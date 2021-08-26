import React from "react";
import { connect } from "react-redux";
import {
  CardContainerLeft,
  CardContainerRight,
  CartContainer,
  CartProduct,
  CartProductCross,
  CartProductLeft,
  CartProductRight,
  EmptyCart,
  ProductImage,
} from "./CartElements";

const Cart = (props) => {
  var total = 0;
  var items = 0;
  console.log("Props:", props);
  // {props.productsInComponent? }
  console.log(props.productsInComponent.length);
  return (
    <div>
      {props.productsInComponent.length > 0 ? (
        <>
          {/* <h1>Cart is here: {props.productsInComponent}</h1> */}
          {/* imgUrl, brandName, description, size, price */}
          <CartContainer>
            <CardContainerLeft>
              {props.productsInComponent.map((product) => {
                total += Number(product?.price.slice(4));
                items += 1;
                return (
                  <CartProduct>
                    <CartProductLeft>
                      <ProductImage
                        src={product?.imgUrl}
                        alt="Product Image"
                      ></ProductImage>
                    </CartProductLeft>
                    <CartProductRight>
                      <h4>{product?.brandName}</h4>
                      <p>{product?.description}</p>
                      <p>Sold By Abhiram Satpute</p>
                      <p>{product?.size}</p>
                      <p>{product?.price}</p>
                    </CartProductRight>
                    <CartProductCross onClick={() => alert("Coming Soon!")} />
                  </CartProduct>
                );
              })}
            </CardContainerLeft>
            <CardContainerRight>
              <h4>Price Details ({items} items)</h4>
              <p>Total MRP: Rs. {total}</p>
              <h3>Total Amount: Rs. {total}</h3>
              <button onClick={() => alert("Order Placed!")}>
                PLACE ORDER
              </button>
            </CardContainerRight>
          </CartContainer>
        </>
      ) : (
        <>
          <EmptyCart>
            <h1>Your Cart is Empty! Pack Something!</h1>
          </EmptyCart>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productsInComponent: state.cartReducer.productsInCart,
  };
};

export default connect(mapStateToProps)(Cart);

// return (
//   <>
//     {/* <h1>Cart is here: {props.productsInComponent}</h1> */}
//     {/* imgUrl, brandName, description, size, price */}
//     <CartContainer>
//       <CardContainerLeft>
//         {props.productsInComponent.map((product) => {
//           return (
//             <CartProduct>
//               <CartProductLeft>
//                 <ProductImage src="https://www.soccerbible.com/media/19123/adidas-messi-10-10-img1.jpg"></ProductImage>
//               </CartProductLeft>
//               <CartProductRight>
//                 <h4>{product?.brandName}</h4>
//                 <p>{product?.description}</p>
//                 <p>Sold By Me</p>
//                 <p>{product?.size}</p>
//                 <p>{product?.price}</p>
//               </CartProductRight>
//               <CartProductCross />
//             </CartProduct>
//           );
//         })}
//       </CardContainerLeft>
//       <CardContainerRight>
//         <h4>Price Details (x items)</h4>
//         <p>Total MRP: Price</p>
//         <h3>Total Amount: Amount</h3>
//         <button onClick={() => alert("Order Placed!")}>PLACE ORDER</button>
//       </CardContainerRight>
//     </CartContainer>
//   </>
// );
