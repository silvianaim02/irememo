import React, { useContext, useEffect } from "react";
import MainContent from "../components/MainContent/MainContent";
import PropTypes from "prop-types";
import { getActiveNotes } from "../utils/api";
import LocaleContext from "../contexts/LocaleContext";
import { useState } from "react";

const HomePage = ({
  filteredActive,
  activeNotes,
  setActiveNotes,
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
      const { data } = await getActiveNotes();
      setActiveNotes(data);
      setInitializing(false);
      setTimeout(() => {
        setLoading(false);
      }, 350);
    };
    fetchData();
  }, []);

  return (
    <MainContent
      titleTop={locale === "id" ? "Catatan aktif" : "Active Notes"}
      loading={loading}
      initializing={initializing}
      filteredActive={filteredActive}
      activeNotes={activeNotes}
      setActiveNotes={setActiveNotes}
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
  visibleModal: PropTypes.bool.isRequired,
  setVisibleModal: PropTypes.func.isRequired,
  setSearchField: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onModalHandler: PropTypes.func.isRequired,
};

export default HomePage;
