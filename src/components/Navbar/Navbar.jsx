import { logo } from "@/constants/constants";
import { useState } from "react";
import { Container, Div1, Div2, Div3, Icon1, Icon2, Logo, LogoText, MenuBox, MenuIcon, NavLink, NavLinks } from "./NavbarStyle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Container>
      <Div1 as="a" href="/">
        <Logo>
          <img src={logo} alt={logo} />
        </Logo>
        <LogoText>포트폴리오</LogoText>
      </Div1>
      <Div2>
        <MenuIcon
          onClick={() => {
            setIsMenuOpen((prev) => !prev);
          }}>
          <Icon1 />
          <Icon2 $isMenuOpen={isMenuOpen} />
        </MenuIcon>
        {isMenuOpen && (
          <MenuBox>
            <NavLinks onClick={() => setIsMenuOpen((prev) => !prev)}>
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#work">Work</NavLink>
              <NavLink href="#projects">Projects</NavLink>
            </NavLinks>
          </MenuBox>
        )}
      </Div2>
      <Div3>
        <NavLinks onClick={() => setIsMenuOpen((prev) => !prev)}>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#work">Work</NavLink>
          <NavLink href="#projects">Projects</NavLink>
        </NavLinks>
      </Div3>
    </Container>
  );
};

export default Navbar;
