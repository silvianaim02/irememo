import React from "react";
import MainContent from "../components/MainContent/MainContent";

const ArchivePage = ({
  filteredArchive,
  archiveNotes,
  onDelete,
  onArchive,
  visibleModal,
  setVisibleModal,
  addNotes,
  onModalHandler,
}) => {
  return (
    <>
      <div>
        <MainContent
          titleTop="Archive Notes"
          filteredArchive={filteredArchive}
          archiveNotes={archiveNotes}
          onDelete={onDelete}
          onArchive={onArchive}
          visibleModal={visibleModal}
          setVisibleModal={setVisibleModal}
          addNotes={addNotes}
          onModalHandler={onModalHandler}
        />
      </div>
    </>
  );
};

export default ArchivePage;
