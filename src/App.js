import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import SearchBar from "./components/SearchBar";
import "./styles.css";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <SearchBar />
      </div>
      <Pokedex />
    </>
  );
}
