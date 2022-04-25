import Category from "./components/Category";
import Data from "./components/Data";
import Display from "./components/Display";
import Header from "./components/Header";
import Notes from "./components/Notes";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Data />
        <Category />
        <Notes />
        <Display />
      </div>
    </>
  );
}

export default App;
