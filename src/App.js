import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import SearchBar from "./components/SearchBar";
import "./styles.css";
import { getPokemons } from "../api";

export default function App() {
  const [pokemons, setPokemons] = useState([]);

  const fecthPokemons = async () => {
    try {
      const data = await getPokemons();
      setPokemons(data.results);
    } catch (error) {}
  };

  useEffect(() => {
    fecthPokemons();
  }, []);
  return (
    <>
      <Navbar />
      <div className="App">
        <SearchBar />
      </div>
      <Pokedex pokemons={pokemons} />
    </>
  );
}
