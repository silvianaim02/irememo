import React, { useState } from "react";
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

const App = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams("");
  const keyword = searchParams.get("keyword");
  const [searchField, setSearchField] = useState(keyword ? keyword : "");
  const [notes, setNotes] = useState(getInitialData());
  const [visibleModal, setVisibleModal] = useState(false);
  const activeNotes = notes.filter((note) => !note.archived);
  const archiveNotes = notes.filter((note) => note.archived);

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

  // Create Note Handler
  const onAddNotesHandler = ({ title, body }) => {
    const newNotes = [
      ...notes,
      {
        id: `notes-${+new Date()}`,
        title: title || "(untitled)",
        body,
        createdAt: new Date().toISOString(),
        archived: false,
      },
    ];
    setNotes(newNotes);
  };

  // Delete Note Handler
  const onDeleteHandler = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    navigate("/");
  };

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

  return (
    <div className="irememo-app">
      <header>
        <Navbar
          setSearchField={setSearchField}
          onSearch={updateKeywordUrlSearchParams}
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
                searchField={searchField}
                setSearchField={setSearchField}
                onDelete={onDeleteHandler}
                onArchive={onArchiveNotesHandler}
                visibleModal={visibleModal}
                setVisibleModal={setVisibleModal}
                addNotes={onAddNotesHandler}
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
                archiveNotes={activeNotes}
                searchField={searchField}
                setSearchField={setSearchField}
                onDelete={onDeleteHandler}
                onArchive={onArchiveNotesHandler}
                visibleModal={visibleModal}
                setVisibleModal={setVisibleModal}
                addNotes={onAddNotesHandler}
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
                  onDelete={onDeleteHandler}
                  onArchive={onArchiveNotesHandler}
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
