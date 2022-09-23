import React, { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { getInitialData } from "./utils";
import Navbar from "./components/Navbar/Navbar";
import ArchivePage from "./pages/ArchivePage";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { getUserLogged, putAccessToken } from "./utils/api";

const App = () => {
  const navigate = useNavigate();
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams("");
  const keyword = searchParams.get("keyword");
  const [searchField, setSearchField] = useState(keyword ? keyword : "");
  const [notes, setNotes] = useState(getInitialData());
  const [visibleModal, setVisibleModal] = useState(false);
  const [activeNotes, setActiveNotes] = useState([]);
  const [archiveNotes, setArchiveNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    };
    fetchData();
  }, []);

  // login succes
  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  // logout
  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken("");
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

  // Archive Note Handler
  const onArchiveNotesHandler = (id) => {
    const newNotes = notes.map((note) => {
      if (id === note.id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });
    setNotes(newNotes);
    navigate("/");
  };

  // Modal Handler
  const onModalHandler = () => {
    setVisibleModal(!visibleModal);
  };

  if (initializing) {
    return null;
  }

  // not user
  if (authedUser === null) {
    return (
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
              path="/*"
              element={<LoginPage loginSuccess={onLoginSuccess} />}
            />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
    );
  }

  return (
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
            path="/"
            element={
              <HomePage
                notes={notes}
                setNotes={setNotes}
                filteredActive={filteredActive}
                activeNotes={activeNotes}
                setActiveNotes={setActiveNotes}
                searchField={searchField}
                setSearchField={setSearchField}
                onSearch={updateKeywordUrlSearchParams}
                onArchive={onArchiveNotesHandler}
                visibleModal={visibleModal}
                setVisibleModal={setVisibleModal}
                onModalHandler={onModalHandler}
              />
            }
          />
          <Route
            path="/archive"
            element={
              <ArchivePage
                notes={notes}
                setNotes={setNotes}
                filteredArchive={filteredArchive}
                archiveNotes={archiveNotes}
                setArchiveNotes={setArchiveNotes}
                searchField={searchField}
                setSearchField={setSearchField}
                onSearch={updateKeywordUrlSearchParams}
                onArchive={onArchiveNotesHandler}
                visibleModal={visibleModal}
                setVisibleModal={setVisibleModal}
                onModalHandler={onModalHandler}
              />
            }
          />
          <Route path="notes">
            <Route index element={<Navigate to="/" replace />} />
            <Route
              path=":noteId"
              element={
                <DetailPage
                  notes={notes}
                  onArchive={onArchiveNotesHandler}
                  setActiveNotes={setActiveNotes}
                  setArchiveNotes={setArchiveNotes}
                />
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
