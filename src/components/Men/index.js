import React from "react";
import { MensData } from "../../Data";
import ProductCard from "../ProductCard";
import { ProductsGrid } from "./MenElements";

const Men = () => {
  const menData = MensData;
  return (
    <>
      <h2>Men</h2>
      <ProductsGrid>
        {menData.map((product) => {
          return (
            <ProductCard
              imgUrl={product.imgUrl}
              brandName={product.brandName}
              description={product.description}
              price={product.price}
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

export default Men;
