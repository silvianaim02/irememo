import React from "react";
import MainContent from "../components/MainContent/MainContent";
import PropTypes from "prop-types";

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
  );
};

HomePage.propTypes = {
  filteredActive: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeNotes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  visibleModal: PropTypes.bool.isRequired,
  setVisibleModal: PropTypes.func.isRequired,
  addNotes: PropTypes.func.isRequired,
  onModalHandler: PropTypes.func.isRequired,
};

export default HomePage;
