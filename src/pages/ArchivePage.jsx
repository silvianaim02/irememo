import React, { useContext, useEffect, useState } from "react";
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
  visibleModal,
  setVisibleModal,
  onModalHandler,
}) => {
  const { locale } = useContext(LocaleContext);
  const [loading, setLoading] = useState(false);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await getArchivedNotes();
      setArchiveNotes(data);
      setInitializing(false);
      setTimeout(() => {
        setLoading(false);
      }, 350);
    };
    fetchData();
  }, []);

  return (
    <MainContent
      titleTop={locale === "id" ? "Catatan arsip" : "Archive Notes"}
      loading={loading}
      initializing={initializing}
      filteredArchive={filteredArchive}
      archiveNotes={archiveNotes}
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
  visibleModal: PropTypes.bool.isRequired,
  setVisibleModal: PropTypes.func.isRequired,
  setSearchField: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onModalHandler: PropTypes.func.isRequired,
};

export default ArchivePage;
