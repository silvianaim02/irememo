import React from "react";
import MainContent from "../components/MainContent/MainContent";

const HomePage = ({
  filteredActive,
  activeNotes,
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
          titleTop="Active Notes"
          filteredActive={filteredActive}
          activeNotes={activeNotes}
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

export default HomePage;
