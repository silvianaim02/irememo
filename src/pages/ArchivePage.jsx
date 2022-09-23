import React, { useContext, useEffect } from "react";
import MainContent from "../components/MainContent/MainContent";
import PropTypes from "prop-types";
import { getArchivedNotes } from "../utils/api";
import LocaleContext from "../contexts/LocaleContext";

const ArchivePage = ({
  filteredArchive,
  archiveNotes,
  setArchiveNotes,
  setSearchField, 
  onSearch,
  onArchive,
  visibleModal,
  setVisibleModal,
  onModalHandler,
}) => {
  const { locale } = useContext(LocaleContext);
  
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getArchivedNotes();
      setArchiveNotes(data);
    };
    fetchData();
  }, [archiveNotes]);

  // if (archiveNotes.length === 0) {
  //   return null;
  // }

  return (
    <MainContent
      titleTop={locale === "id" ? "Catatan arsip" : "Archive Notes"}
      filteredArchive={filteredArchive}
      archiveNotes={archiveNotes}
      onArchive={onArchive}
      visibleModal={visibleModal}
      setVisibleModal={setVisibleModal}
      setSearchField={setSearchField}
      onSearch={onSearch}
      onModalHandler={onModalHandler}
    />
  );
};

ArchivePage.propTypes = {
  filteredArchive: PropTypes.arrayOf(PropTypes.object).isRequired,
  archiveNotes: PropTypes.arrayOf(PropTypes.object).isRequired,
  setArchiveNotes: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  visibleModal: PropTypes.bool.isRequired,
  setVisibleModal: PropTypes.func.isRequired,
  setSearchField: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onModalHandler: PropTypes.func.isRequired,
};

export default ArchivePage;
