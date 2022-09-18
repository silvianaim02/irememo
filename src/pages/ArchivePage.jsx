import React from "react";
import MainContent from "../components/MainContent/MainContent";
import PropTypes from "prop-types";

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
  );
};

ArchivePage.propTypes = {
  filteredArchive: PropTypes.arrayOf(PropTypes.object).isRequired,
  archiveNotes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  visibleModal: PropTypes.bool.isRequired,
  setVisibleModal: PropTypes.func.isRequired,
  addNotes: PropTypes.func.isRequired,
  onModalHandler: PropTypes.func.isRequired,
};

export default ArchivePage;
