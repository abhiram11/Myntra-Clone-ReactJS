import React from "react";
import {
  Bag,
  NavbarContainer,
  NavbarLeft,
  NavbarPersonal,
  NavbarRight,
  NavbarSearch,
  NavbarSearchIcon,
  NavbarSearchInput,
  Profile,
  Wishlist,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLeft>
        <img
          src="https://www.freepnglogos.com/uploads/logo-myntra-png/myntra-logo-m-png-3.png"
          alt="Myntra Logo"
        />
        <h3>Men</h3>
        <h3>Women</h3>
        <h3>Kids</h3>
        <h3>Home & Living</h3>
        <h3>Beauty</h3>
      </NavbarLeft>
      <NavbarRight>
        <NavbarSearch>
          <NavbarSearchIcon />
          <NavbarSearchInput placeholder="Search for products, brands and more"></NavbarSearchInput>
        </NavbarSearch>
        {/* make it as a resuable component later, profile wishlist heart, bag */}
        <NavbarPersonal>
          <Profile />
          Profile
        </NavbarPersonal>
        <NavbarPersonal>
          <Wishlist />
          Wishlist
        </NavbarPersonal>
        <NavbarPersonal>
          <Bag />
          Bag
        </NavbarPersonal>
      </NavbarRight>
    </NavbarContainer>
  );
};

export default Navbar;
