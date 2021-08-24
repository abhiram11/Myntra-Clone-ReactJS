import React, { useState } from "react";
import {
  BrandName,
  CardContainer,
  CardImage,
  CardWishlist,
  Description,
  Price,
  SizeInfo,
  WishlistIcon,
} from "./ProductCardElements";

const ProductCard = ({ imgUrl, brandName, description, size, price }) => {
  const [hover, setHover] = useState(false);

  const changeHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <CardContainer onMouseEnter={changeHover} onMouseLeave={changeHover}>
        {/* later add carousel and stuff to it */}
        <CardImage src={imgUrl} />

        {hover ? (
          <>
            <CardWishlist>
              <WishlistIcon />
              <h4>WISHLIST</h4>
            </CardWishlist>
          </>
        ) : (
          <>
            <BrandName>{brandName}</BrandName>
          </>
        )}
        {hover ? (
          <>
            <SizeInfo>Sizes: {size}</SizeInfo>
          </>
        ) : (
          <>
            <Description>{description}</Description>
          </>
        )}

        <Price>{price}</Price>
        {/* also add ADD TO CART after frontend basic done */}
      </CardContainer>
    </>
  );
};

export default ProductCard;
