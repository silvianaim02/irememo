import React, { useEffect } from "react";
import MainContent from "../components/MainContent/MainContent";
import PropTypes from "prop-types";
import { getArchivedNotes } from "../utils/api";

const ArchivePage = ({
  filteredArchive,
  archiveNotes,
  setArchiveNotes,
  onDelete,
  onArchive,
  visibleModal,
  setVisibleModal,
  addNotes,
  onModalHandler,
}) => {
  // const [archiveNotes, setArchiveNotes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getArchivedNotes();
      setArchiveNotes(data);
    };
    fetchData();
  }, []);

  // if (archiveNotes.length === 0) {
  //   return null;
  // }

  console.log(archiveNotes);
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
  setArchiveNotes: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  visibleModal: PropTypes.bool.isRequired,
  setVisibleModal: PropTypes.func.isRequired,
  addNotes: PropTypes.func.isRequired,
  onModalHandler: PropTypes.func.isRequired,
};

export default ArchivePage;
