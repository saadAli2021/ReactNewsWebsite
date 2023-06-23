import logo from "./logo.svg";
import "./App.css";
import SearchForm from "./SearchForm";
import Buttons from "./Buttons";
import Stories from "./Stories";

function App() {
  return (
    <section className="bodysection">
      <SearchForm />
      <Buttons />
      <Stories />
    </section>
  );
}

export default App;
