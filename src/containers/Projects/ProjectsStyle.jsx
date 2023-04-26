import styled, { css } from "styled-components";
import { FcGlobe } from "react-icons/fc";

export const Tech = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
  gap: 2rem;
`;
export const TextContent = styled.div``;
export const Container = styled.section`
  margin: 10rem 0;

  @media screen and (${(props) => props.theme.breakpoint.md} <= width) {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: space-between;
    align-items: flex-start;
    & ${TextContent} {
      flex-basis: 40%;
    }
    & ${Tech} {
      flex-basis: 50%;
    }
  }
`;

export const Span = styled.span`
  display: none;
  position: absolute;
  bottom: 0;
  left: 50%;
  translate: -50% 50%;
  animation: ${(props) => props.theme.animation.scaleInVerTop} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  padding: 0.3rem 0.6rem;
  background: ${(props) => props.theme.color.navy};
  color: white;
  letter-spacing: 0.1rem;
  border: 2px solid ${(props) => props.theme.color.blue};
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  border-radius: 10px;
  text-transform: uppercase;
`;
export const GridItem = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid ${(props) => props.theme.color.navy};
  transition: all 0.2s ease-in-out;
  :hover {
    scale: 1.1;
    box-shadow: rgba(255, 255, 255, 0.09) 0px 54px 55px, rgba(255, 255, 255, 0.17) 0px -12px 30px, rgba(255, 255, 255, 0.12) 0px 4px 6px, rgba(255, 255, 255, 0.12) 0px 12px 13px, rgba(255, 255, 255, 0.25) 0px -3px 5px;
  }
  :focus {
    scale: 1.1;
    box-shadow: rgba(255, 0, 0, 0.09) 0px 54px 55px, rgba(255, 0, 0, 0.17) 0px -12px 30px, rgba(255, 0, 0, 0.12) 0px 4px 6px, rgba(255, 255, 255, 0.12) 0px 12px 13px, rgba(255, 255, 255, 0.25) 0px -3px 5px;
    animation: ${(props) => props.theme.animation.vibrate} 0.3s linear infinite both;
    + ${Span} {
      display: inline-block;
    }
  }
`;

export const GridItemContainer = styled.div`
  position: relative;
`;

export const AllIcon = styled(FcGlobe)`
  scale: 4;
`;

export const Cards = styled.div`
  width: 100%;
  margin-top: 5rem;
  display: grid;
  gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`;
