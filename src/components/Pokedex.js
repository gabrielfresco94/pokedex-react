import React from "react";
import styled from "styled-components";
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

const Pokedex = ({ pokemons }) => {
  return (
    <div>
      <HeaderPokedex>
        <h1>Pokedex</h1>
        <div>Pagination</div>
      </HeaderPokedex>
      <PokedexGrid>
        {pokemons.map((pokemon, index) => {
          return <Pokemon pokemon={pokemon} key={pokemon.name} />;
        })}
      </PokedexGrid>
    </div>
  );
};

export default Pokedex;
