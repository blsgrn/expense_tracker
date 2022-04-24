import Category from "./Category";
import Data from "./Data";
import Display from "./Display";
import Header from "./Header";
import Notes from "./Notes";

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
