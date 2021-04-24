import React from "react";
import styled from "styled-components";

const HeaderPokedex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const PokedexGrid = styled.div`
  display: grid;
  grid-auto-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

const Pokedex = ({ pokemons }) => {
  return (
    <div>
      <HeaderPokedex>
        <h1>Pokedex</h1>
        <div>Pagination</div>
      </HeaderPokedex>
      <PokedexGrid>
        {pokemons.map((pokemon, index) => {
          return <div>{pokemon.name}</div>;
        })}
      </PokedexGrid>
    </div>
  );
};

export default Pokedex;
