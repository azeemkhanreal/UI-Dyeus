import React, { useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuHandler = () => setMenuOpen(!menuOpen);

  return (
    <Container>
      <HamburgerIcon
        className={`header__hamburger ${menuOpen ? "active" : ""}`}
        onClick={menuHandler}
      >
        <span></span>
      </HamburgerIcon>
      <CartIcon className="header__cart">
        <img src="/cart.svg" alt="" />
      </CartIcon>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  padding: 30px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  &:after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: gray;
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const HamburgerIcon = styled.div`
  position: relative;
  cursor: pointer;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    background-color: #fff;
    width: 100%;
    height: 1px;
    border-radius: 5px;
    display: block;
  }
  &::before,
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #fff;
    position: absolute;
    transition: transform 0.5s ease-in-out;
  }
  &::before {
    transform: translateY(-6px);
  }
  &::after {
    transform: translateY(6px);
  }
  &.active > span {
    opacity: 0;
  }
  &.active::before {
    transform: translate(0px, 0px) rotate(45deg);
  }
  &.active::after {
    transform: translate(0px, 0px) rotate(-45deg);
  }
`;

const CartIcon = styled.div`
  &:hover {
    transform: rotate(-5deg);
    cursor: pointer;
  }
`;
