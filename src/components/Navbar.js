import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const Logo = styled.img`
  width: 64px;
`;

const Navbar = () => {
  const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <Nav>
      <Logo src={imgUrl} />
    </Nav>
  );
};

export default Navbar;
