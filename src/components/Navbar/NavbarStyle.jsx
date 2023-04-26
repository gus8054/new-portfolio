import styled, { css } from "styled-components";
import { BiMenuAltLeft, BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";

export const Container = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;
export const Div1 = styled.div`
  flex-basis: 11rem;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Logo = styled.div`
  flex-basis: 50%;
  background-color: ${(props) => props.theme.color.violet};
  border-radius: 18px;
  padding: 0.8rem;
`;
export const LogoText = styled.div`
  flex-basis: 45%;
  color: ${(props) => props.theme.color.white};
  font-size: 1.2rem;
  font-family: ${(props) => props.theme.font.logo};
  letter-spacing: 0.2rem;
`;
export const Div2 = styled.div`
  flex-basis: 3rem;
  flex-shrink: 0;
  position: relative;
  @media screen and (${(props) => props.theme.breakpoint.md} <= width) {
    display: none;
  }
`;
export const MenuIcon = styled.div`
  position: relative;
  height: 3rem;
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.color.gray};
  }
`;
export const Icon1 = styled(BiMenuAltLeft)`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 3rem;
`;
export const Icon2 = styled(BiLeftArrowAlt)`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 1.2rem;
  rotate: z ${(props) => (props.$isMenuOpen ? `90deg` : `-90deg`)};
  transition: rotate 0.3s ease-in-out;
`;
export const MenuBox = styled.div`
  position: absolute;
  top: 4rem;
  right: 0;
  border: 2px solid transparent;
  z-index: 9999;
  background-clip: border-box;
  animation: ${(props) => props.theme.animation.scaleInVerTop} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both, ${(props) => props.theme.animation.colorChange} 8s linear infinite alternate both;
`;
export const NavLinks = styled.nav`
  display: flex;
  flex-direction: column;
`;
export const NavLink = styled(Link)`
  padding: 1rem;
  color: ${(props) => props.theme.color.white};
  font-weight: bold;
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.color.background};
  :hover {
    background-color: ${(props) => props.theme.color.navy};
  }
`;
export const Div3 = styled.div`
  display: none;
  flex-grow: 1;
  @media screen and (${(props) => props.theme.breakpoint.md} <= width) {
    display: block;
    & ${NavLinks} {
      flex-direction: row;
      justify-content: flex-end;
      & ${NavLink} {
        :hover {
          opacity: 0.8;
          background: none;
        }
      }
    }
  }
`;
