import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 99%;
`;

export const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 64px;
    object-fit: contain;
  }
`;

export const NavH3 = styled.h3`
  text-transform: uppercase;
  padding: 40px 20px;
  &:hover {
    border-bottom: 5px solid;
    border-color: ${({ borderColor }) => borderColor};
  }
`;

export const NavbarRoute = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const NavbarSearch = styled.div`
  display: flex;
  align-items: center;
  margin: 0 25px;
  background: #f5f5f6;
  padding: 16px;
  border-radius: 8px;
  width: 100%;
`;

export const NavbarSearchIcon = styled(SearchIcon)`
  color: grey;
`;

export const NavbarSearchInput = styled.input`
  font-size: 16px;
  background: none;
  outline: none;
  border: none;
  width: 100%;
`;

export const NavbarPersonal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 15px;
  cursor: pointer;
`;
export const Profile = styled(PersonIcon)``;

export const Wishlist = styled(FavoriteBorderIcon)``;

export const Bag = styled(LocalMallIcon)``;
