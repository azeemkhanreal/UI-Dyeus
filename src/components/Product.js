import React from "react";
import styled from "styled-components";

const Product = () => {
  return (
    <Container>
      <ProductImage src="/product_image.png" />
      <ProductTitle>Everyday rinse and reload</ProductTitle>
      <ProductDesc>
        Achieve your dream skin goal with this complete package of skincare
        products that will rejuvenate your day.
      </ProductDesc>
      <ProductRatingsContainer>
        <button>&#x02605; &#x02605; &#x02605; &#x02605; &#x02606;</button>
        <p>4.5</p>
        <a href="#">Click to read reviews &gt; </a>
      </ProductRatingsContainer>
      <ProductPrice>
        <ProductCurrentPrice>&#8377;899</ProductCurrentPrice>
        <ProductOldPrice>
          <strike>&#8377;1299</strike>
        </ProductOldPrice>
      </ProductPrice>
      <ProductVariantPicker>
        <ProductVariant>
          <ProductVariantDesc>
            <button>&#x02605; Most Popular &#x02605;</button>
            <h1>1 Months Pack (4 tubes)</h1>
            <p>Saving: &#8377;200</p>
            <span className="savingPercentage">38% Saved</span>
            <span className="bestResults">Best Results</span>
          </ProductVariantDesc>
          <ProductVariantPrice>
            <p>&#8377;595</p>
            <p>
              <strike>&#8377;795</strike>
            </p>
          </ProductVariantPrice>
        </ProductVariant>
      </ProductVariantPicker>
      <ProductVariantPicker>
        <ProductVariant>
          <ProductVariantDesc>
            <h1>3 Months Pack (12 tubes)</h1>
            <p>Saving: &#8377;100</p>
            <span className="savingPercentage">12% Saved</span>
          </ProductVariantDesc>
          <ProductVariantPrice>
            <p>&#8377;899</p>
            <p>
              <strike>&#8377;999</strike>
            </p>
          </ProductVariantPrice>
        </ProductVariant>
      </ProductVariantPicker>
      <AddToCartButton>
        <img src="/cart.svg" alt="" srcset="" />
        <span>ADD TO CART</span>
      </AddToCartButton>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ProductImage = styled.img`
  object-fit: contain;
  margin-top: 20px;
  width: 100%;
`;

const ProductTitle = styled.h2`
  margin-top: 74px;
  font-family: "DM Sans", sans-serif;
  font-size: 32px;
`;
const ProductDesc = styled.p`
  margin-top: 13px;
  font-family: "Belgrano", serif;
  line-height: 23.24px;
  font-size: 12px;
  color: rgba(196, 202, 207, 1);
`;
const ProductRatingsContainer = styled.div`
  margin-top: 13px;
  display: flex;
  align-items: center;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
    background: rgba(7, 151, 65, 1);
    width: 73px;
    height: 20px;
    border-radius: 10px;
    padding: 10px;
    color: #fff;
    outline: none;
    border: none;
  }
  p {
    margin-left: 8px;
    font-size: 12px;
    font-family: "Montserrat", sans-serif;
  }
  a {
    font-family: "DM Sans", sans-serif;
    text-decoration: none;
    color: rgba(66, 70, 72, 1);
    font-size: 12px;
    margin-left: 8px;
  }
`;
const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-weight: bolder;
  font-size: 32px;
  margin-top: 30px;
`;
const ProductCurrentPrice = styled.div``;
const ProductOldPrice = styled.div`
  margin-left: 20px;
  color: rgba(60, 70, 79, 1);
  font-family: "Montserrat", sans-serif;
`;
const ProductVariantPicker = styled.div`
  margin-top: 30px;
  background: rgba(33, 39, 44, 1);
  border-radius: 8px;
  padding: 18px;
`;
const ProductVariant = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProductVariantDesc = styled.div`
  button {
    background: rgb(34, 123, 216);
    outline: none;
    border: none;
    padding: 4px;
    font-size: 7px;
    color: #fff;
    font-weight: 800;
    border-radius: 8px;
    text-transform: uppercase;
    width: 100px;
  }
  h1 {
    font-family: "DM Sans", sans-serif;
    font-size: 16px;
    margin-top: 7px;
    font-weight: 700;
  }
  p {
    color: rgba(70, 93, 104, 1);
    font-size: 12px;
    font-family: "Belgrano", serif;
    margin: 5px 0px 10px;
  }
  .savingPercentage {
    color: rgba(36, 219, 109, 1);
    font-weight: bold;
    font-size: 12px;
  }
  .bestResults {
    color: rgba(219, 157, 36, 1);
    font-size: 12px;
    font-weight: bold;
    margin-left: 8px;
  }
`;
const ProductVariantPrice = styled.div`
  font-family: "DM Sans", sans-serif;
  p:first-child {
    font-size: 19px;
  }
  p:last-child {
    font-size: 19px;
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    color: rgba(76, 96, 112, 1);
  }
`;
const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  background: #13324a;
  box-shadow: 0px 1px 15px rgba(2, 2, 2, 0.04),
    inset 0px 0px 15px rgba(88, 88, 88, 0.3);
  color: #fff;
  outline: none;
  border: none;
  font-weight: bold;
  font-size: 13px;
  padding: 16px;
  margin-bottom: 30px;
  img {
    width: 16px;
  }
  span {
    margin-left: 8px;
  }
`;
