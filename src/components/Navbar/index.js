import React from "react";
import {
  Bag,
  NavbarContainer,
  NavbarLeft,
  NavbarPersonal,
  NavbarRight,
  NavbarRoute,
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
        <NavbarRoute to="/">
          <img
            src="https://www.freepnglogos.com/uploads/logo-myntra-png/myntra-logo-m-png-3.png"
            alt="Myntra Logo"
          />
        </NavbarRoute>
        <NavbarRoute to="/men">
          <h3>Men</h3>
        </NavbarRoute>
        <NavbarRoute to="/women">
          <h3>Women</h3>
        </NavbarRoute>
        {/* <NavbarRoute>
          <h3>Kids</h3>
        </NavbarRoute>
        <NavbarRoute>
          <h3>Home & Living</h3>
        </NavbarRoute> */}
        <NavbarRoute to="/cart">
          <h3>Cart</h3>
        </NavbarRoute>
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
          <NavbarRoute to="/wishlist">
            <Wishlist />
            Wishlist
          </NavbarRoute>
        </NavbarPersonal>
        <NavbarPersonal>
          <NavbarRoute to="/cart">
            <Bag />
            Bag
          </NavbarRoute>
        </NavbarPersonal>
      </NavbarRight>
    </NavbarContainer>
  );
};

export default Navbar;
