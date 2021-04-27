import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import SearchBar from "./components/SearchBar";
import "./styles.css";
import { getPokemons, getPokemonData } from "../api";

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const fecthPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(25, 25 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25));
    } catch (error) {}
  };

  useEffect(() => {
    fecthPokemons();
  }, [page]);
  return (
    <>
      <Navbar />
      <div className="App">
        <SearchBar />

        <Pokedex
          pokemons={pokemons}
          page={page}
          setPage={setPage}
          total={total}
          setTotal={setTotal}
          loading={loading}
        />
      </div>
    </>
  );
}
