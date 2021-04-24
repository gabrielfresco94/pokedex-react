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

const Pokedex = () => {
  return (
    <div>
      <HeaderPokedex>
        <h1>Pokedex</h1>
        <div>Pagination</div>
      </HeaderPokedex>
      <PokedexGrid>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
      </PokedexGrid>
    </div>
  );
};

export default Pokedex;
