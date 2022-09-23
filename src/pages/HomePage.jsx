import React, { useEffect } from "react";
import MainContent from "../components/MainContent/MainContent";
import PropTypes from "prop-types";
import { deleteNote, getActiveNotes } from "../utils/api";

const HomePage = ({
  filteredActive,
  activeNotes,
  setActiveNotes,
  // onDelete,
  onArchive,
  visibleModal,
  setVisibleModal,
  addNotes,
  onModalHandler,
}) => {
  // const [activeNotes, setActiveNotes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getActiveNotes();
      setActiveNotes(data);
    };
    fetchData();
  }, []);

  // delet api
  const onDeleteHandler = async (id) => {
    await deleteNote(id);
    const { data } = await getActiveNotes();
    setActiveNotes(data);
  };

  // if (activeNotes.length === 0) {
  //   return null;
  // }

  console.log(activeNotes);
  return (
    <MainContent
      titleTop="Active Notes"
      filteredActive={filteredActive}
      activeNotes={activeNotes}
      onDelete={onDeleteHandler}
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
  setActiveNotes: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  visibleModal: PropTypes.bool.isRequired,
  setVisibleModal: PropTypes.func.isRequired,
  addNotes: PropTypes.func.isRequired,
  onModalHandler: PropTypes.func.isRequired,
};

export default HomePage;
