import React from "react";
import { WomensData } from "../../Data";
import ProductCard from "../ProductCard";
import { ProductsGrid } from "./WomenElements";

const Women = () => {
  const womenData = WomensData;
  return (
    <>
      <h2>Women</h2>
      <ProductsGrid>
        {womenData.map((product) => {
          return (
            <ProductCard
              imgUrl={product.imgUrl}
              brandName={product.brandName}
              description={product.description}
              price={product.price}
              size={product.size}
            />
          );
        })}
        {/* <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> */}
      </ProductsGrid>
    </>
  );
};

export default Women;
