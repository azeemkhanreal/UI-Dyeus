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
  width: 311px;
  height: 407px;
  margin: 0 auto;
`;

const ProductTitle = styled.h2`
  margin-top: 74px;
  font-family: "DM Sans", sans-serif;
  font-size: 32px;
`;
const ProductDesc = styled.p`
  margin-top: 13px;
  font-family: "Belgrano", serif;
  font-weight: 400;
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
    font-weight: 700;
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
  font-weight: 500;
`;
