import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import SearchBar from "./components/SearchBar";
import "./styles.css";
import { getPokemons, getPokemonData } from "../api";

export default function App() {
  const [pokemons, setPokemons] = useState([]);

  const fecthPokemons = async () => {
    try {
      const data = await getPokemons();
      console.log(data.results);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
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
