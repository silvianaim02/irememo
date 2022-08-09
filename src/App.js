import React, { useState } from "react";
import MainContent from "./components/MainContent/MainContent";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [searchField, setSearchField] = useState("");

  return (
    <div className="irememo-app">
      <Navbar setSearchField={setSearchField} />
      <MainContent searchField={searchField} setSearchField={setSearchField} />
    </div>
  );
};

export default App;
