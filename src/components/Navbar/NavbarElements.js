import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocalMallIcon from "@material-ui/icons/LocalMall";
export const NavbarContainer = styled.div`
  display: flex;
`;

export const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
  h3 {
    margin-right: 5px;
    border: 1px solid black;
  }
`;

export const NavbarRight = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarSearch = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
`;

export const NavbarSearchIcon = styled(SearchIcon)``;

export const NavbarSearchInput = styled.input``;

export const NavbarPersonal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 5px;
`;
export const Profile = styled(PersonIcon)``;

export const Wishlist = styled(FavoriteBorderIcon)``;

export const Bag = styled(LocalMallIcon)``;
