import styled from "styled-components";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 320px;
  width: 256px;
  // border: 1px solid black;
  margin: 10px;

  &:hover {
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
  }
`;

export const CardImage = styled.img`
  object-fit: cover;
`;

export const CardWishlist = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
  padding: 10px 0;
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    border: 1px solid gray;
  }
`;
export const WishlistIcon = styled(FavoriteBorderIcon)``;

export const BrandName = styled.h3``;

export const Description = styled.p``;

export const SizeInfo = styled.p``;

export const Price = styled.h3``;
