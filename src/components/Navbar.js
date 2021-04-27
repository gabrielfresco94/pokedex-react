import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import FavoriteContext from "../../contexts/favoritesContext";

const Nav = styled.nav`
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const Logo = styled.img`
  width: 84px;
`;

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);

  const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <Nav>
      <div>
        <Logo src={imgUrl} />
      </div>
      <div>&#10084;&#65039; {favoritePokemons.length}</div>
    </Nav>
  );
};

export default Navbar;
