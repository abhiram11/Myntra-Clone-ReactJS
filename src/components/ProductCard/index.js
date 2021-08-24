import React from "react";
import {
  BrandName,
  CardContainer,
  CardImage,
  Description,
  Price,
} from "./ProductCardElements";

const ProductCard = ({ imgUrl, brandName, description, price }) => {
  // props =  {imgUrl, brandName, description, price}
  // img
  // wishlist // (visible on hover)
  // Product Name(2 lines, brand then product detail)
  // Price

  return (
    <>
      {/* <h2>Produuct Card</h2> */}

      <CardContainer>
        {/* later add carousel and stuff to it */}
        <CardImage src={imgUrl} />
        <BrandName>{brandName}</BrandName>
        <Description>{description}</Description>
        <Price>{price}</Price>
        {/* also add ADD TO CART after frontend basic done */}
      </CardContainer>
    </>
  );
};

export default ProductCard;
