import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import Icons from "../components/Icons";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #160632;
  padding: 10px 20px;
  color: white;
`;

const NavItems = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #160632;
    padding: 10px 20px;
  }
`;

const NavItem = styled(Link)`
  cursor: pointer;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 18px;
  color: #fbfbfe;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:active {
    text-decoration: underline;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      {isOpen && (
        <Hamburger onClick={toggleMenu}>
          <Icons type="hamburger" />
        </Hamburger>
      )}

      <NavItems>
        <NavItem href="/" passHref>
          HOME
        </NavItem>
        <NavItem href="/store" passHref>
          STORE
        </NavItem>
        <NavItem href="/style" passHref>
          STYLE
        </NavItem>
        <NavItem href="/about" passHref>
          ABOUT
        </NavItem>
      </NavItems>
    </NavbarContainer>
  );
};

export default Navbar;
