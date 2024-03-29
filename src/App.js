import React, { useEffect, useMemo, useState } from "react";
import { Navigate, Route, Routes, useSearchParams } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ArchivePage from "./pages/ArchivePage";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { getUserLogged, putAccessToken } from "./utils/api";
import { ROUTES } from "./utils/constantsRoute";
import LocaleContext from "./contexts/LocaleContext";
import ThemeContext from "./contexts/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [locale, setLocale] = useState(localStorage.getItem("locale") || "id");
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams("");
  const keyword = searchParams.get("keyword");
  const [searchField, setSearchField] = useState(keyword ? keyword : "");
  const [visibleModal, setVisibleModal] = useState(false);
  const [activeNotes, setActiveNotes] = useState([]);
  const [archiveNotes, setArchiveNotes] = useState([]);

  // getUserLogged
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    };
    fetchData();
  }, []);

  // Theme
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("blue-bg-theme");
    } else if (theme === "light") {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("blue-bg-theme");
    }
  }, [theme]);

  // Theme toggle
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  // Locale toggle
  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === "id" ? "en" : "id";
      localStorage.setItem("locale", newLocale);
      return newLocale;
    });
  };

  const themeContextValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  });

  const localeContextValue = useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  // login succes
  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  // logout
  const onLogout = () => {
    putAccessToken("");
    setAuthedUser(null);
  };

  // Update Keyword
  function updateKeywordUrlSearchParams(newValue) {
    setSearchParams({ keyword: newValue });
  }

  // Active Search
  const filteredActive = activeNotes.filter((note) => {
    return note.title.toLowerCase().includes(searchField.toLowerCase());
  });

  // Archive Search
  const filteredArchive = archiveNotes.filter((note) => {
    return note.title.toLowerCase().includes(searchField.toLowerCase());
  });

  // Modal Handler
  const onModalHandler = () => {
    setVisibleModal(!visibleModal);
  };

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <>
        <LocaleContext.Provider value={localeContextValue}>
          <ThemeContext.Provider value={themeContextValue}>
            <div className="irememo-app">
              <header>
                <Navbar
                  setSearchField={setSearchField}
                  onSearch={updateKeywordUrlSearchParams}
                  authedUser={authedUser}
                />
              </header>
              <main>
                <Routes>
                  <Route
                    path={`${ROUTES.ROOT}*`}
                    element={<Navigate to={ROUTES.LOGIN} replace />}
                  />
                  <Route
                    path={ROUTES.LOGIN}
                    element={<LoginPage loginSuccess={onLoginSuccess} />}
                  />
                  <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
                </Routes>
              </main>
            </div>
          </ThemeContext.Provider>
        </LocaleContext.Provider>
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    );
  }

  return (
    <>
      <LocaleContext.Provider value={localeContextValue}>
        <ThemeContext.Provider value={themeContextValue}>
          <div className="irememo-app">
            <header>
              <Navbar
                setSearchField={setSearchField}
                onSearch={updateKeywordUrlSearchParams}
                logout={onLogout}
                name={authedUser.name}
                authedUser={authedUser}
              />
            </header>
            <main>
              <Routes>
                <Route
                  path={ROUTES.ROOT}
                  element={
                    <HomePage
                      filteredActive={filteredActive}
                      activeNotes={activeNotes}
                      setActiveNotes={setActiveNotes}
                      searchField={searchField}
                      setSearchField={setSearchField}
                      onSearch={updateKeywordUrlSearchParams}
                      visibleModal={visibleModal}
                      setVisibleModal={setVisibleModal}
                      onModalHandler={onModalHandler}
                    />
                  }
                />
                <Route
                  path={ROUTES.ARCHIVE}
                  element={
                    <ArchivePage
                      filteredArchive={filteredArchive}
                      archiveNotes={archiveNotes}
                      setArchiveNotes={setArchiveNotes}
                      searchField={searchField}
                      setSearchField={setSearchField}
                      onSearch={updateKeywordUrlSearchParams}
                      visibleModal={visibleModal}
                      setVisibleModal={setVisibleModal}
                      onModalHandler={onModalHandler}
                    />
                  }
                />
                <Route path={ROUTES.NOTES}>
                  <Route
                    index
                    element={<Navigate to={ROUTES.ROOT} replace />}
                  />
                  <Route
                    path=":noteId"
                    element={
                      <DetailPage
                        setActiveNotes={setActiveNotes}
                        setArchiveNotes={setArchiveNotes}
                      />
                    }
                  />
                </Route>
                <Route
                  path={ROUTES.LOGIN}
                  element={<Navigate to={ROUTES.ROOT} replace />}
                />
                <Route
                  path={ROUTES.REGISTER}
                  element={<Navigate to={ROUTES.ROOT} replace />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </ThemeContext.Provider>
      </LocaleContext.Provider>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
