import React, { useEffect } from "react";
import MainContent from "../components/MainContent/MainContent";
import PropTypes from "prop-types";
import { getActiveNotes } from "../utils/api";

const HomePage = ({
  filteredActive,
  activeNotes,
  setActiveNotes,
  setSearchField, 
  onSearch,
  onArchive,
  visibleModal,
  setVisibleModal,
  onModalHandler,
}) => {
  // const [activeNotes, setActiveNotes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getActiveNotes();
      setActiveNotes(data);
    };
    fetchData();
  }, [activeNotes]);

  // if (activeNotes.length === 0) {
  //   return null;
  // }

  return (
    <MainContent
      titleTop="Active Notes"
      filteredActive={filteredActive}
      activeNotes={activeNotes}
      onArchive={onArchive}
      visibleModal={visibleModal}
      setVisibleModal={setVisibleModal}
      setSearchField={setSearchField}
      onSearch={onSearch}
      onModalHandler={onModalHandler}
    />
  );
};

HomePage.propTypes = {
  filteredActive: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeNotes: PropTypes.arrayOf(PropTypes.object).isRequired,
  setActiveNotes: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  visibleModal: PropTypes.bool.isRequired,
  setVisibleModal: PropTypes.func.isRequired,
  setSearchField: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onModalHandler: PropTypes.func.isRequired,
};

export default HomePage;
