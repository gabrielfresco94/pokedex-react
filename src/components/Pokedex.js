import React from "react";
import styled from "styled-components";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

const HeaderPokedex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const PokedexGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 18px;
  padding: 0px 10px;
`;

const Pokedex = ({ pokemons, page, setPage, total, loading }) => {
  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total);
    setPage(nextPage);
  };
  return (
    <div>
      <HeaderPokedex>
        <h1>Pokedex</h1>
        <Pagination
          page={page + 1}
          totalPages={total}
          lastPage={lastPage}
          nextPage={nextPage}
        />
      </HeaderPokedex>
      {loading ? (
        <div>Cargando Pokemones...</div>
      ) : (
        <PokedexGrid>
          {pokemons.map((pokemon, index) => {
            return <Pokemon pokemon={pokemon} key={pokemon.name} />;
          })}
        </PokedexGrid>
      )}
    </div>
  );
};

export default Pokedex;
