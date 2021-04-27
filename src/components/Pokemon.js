import React from "react";
import styled from "styled-components";

const PokemonCard = styled.div`
  display: flex;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  padding: 10px;
`;

const PokemonImg = styled.img`
  width: 80px;
  height: 80px;
`;
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0 10px 10px;
  flex: 1;
`;

const CardTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h3 {
    text-transform: capitalize;
  }
`;

const CardBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const PokemonType = styled.div`
  display: flex;

  div {
    margin-right: 10px;
    text-transform: capitalize;
  }
`;
const PokemonFavorite = styled.div``;
const Pokemon = ({ pokemon }) => {
  return (
    <PokemonCard>
      <div>
        <PokemonImg src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <CardBody>
        <CardTop>
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </CardTop>
        <CardBottom>
          <PokemonType>
            {pokemon.types.map((type, index) => {
              return <div key={index}>{type.type.name}</div>;
            })}
          </PokemonType>
          <PokemonFavorite>💜</PokemonFavorite>
        </CardBottom>
      </CardBody>
    </PokemonCard>
  );
};

export default Pokemon;
