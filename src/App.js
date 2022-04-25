import { useState } from "react";
import Category from "./components/Category";
import Data from "./components/Data";
import Display from "./components/Display";
import Header from "./components/Header";
import EntryData from "./data/EntryData";
import Notes from "./components/Notes";

function App() {
  const [entry, setEntry] = useState(EntryData);
  return (
    <>
      <Header />
      <div className="container">
        <Data />
        <Category />
        <Notes />
        <Display entry={entry} />
      </div>
    </>
  );
}

export default App;
