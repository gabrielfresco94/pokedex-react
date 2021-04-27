import React, { useState } from "react";
import { searchPokemon } from "../../api";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  margin: 0px auto;
  padding: 0 20px;
  align-items: center;
`;

const SearchB = styled.div`
  background: white;
  margin-right: 20px;
`;

const SearchBarInput = styled.input`
  padding: 10px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0 25);
  border-radius: 3px;
  border: none;

  &&focus {
    outline: none;
  }
`;

const Button = styled.div`
  input {
    background-color: #363636;
    border: none;
    border-radius: 10px;
    color: white;
    padding: 10px 12px;
  }
`;

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const onClick = async (e) => {
    const data = await searchPokemon(search);
    setPokemon(data);
  };

  return (
    <SearchContainer>
      <SearchB>
        <SearchBarInput placeholder="Buscar Pokemon" onChange={handleChange} />
      </SearchB>
      <Button>
        <input onClick={onClick} type="submit" value="Buscar" />
      </Button>
      <div>
        {pokemon && (
          <div>
            <div>Nombre: {pokemon.name}</div>
            <div>Peso: {pokemon.weight}</div>
            <div>
              <img src={pokemon.sprites.front_default} />
            </div>
          </div>
        )}
      </div>
    </SearchContainer>
  );
};

export default SearchBar;
