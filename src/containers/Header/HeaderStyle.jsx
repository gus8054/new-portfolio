import styled from "styled-components";
import { programmer } from "@/constants/constants";

export const Section = styled.section`
  display: flow-root;
  height: calc(100svh - 106.531px);
  background: url(${programmer});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  position: relative;
`;
export const Container = styled.div`
  padding: 0 2rem;
  margin-top: 5rem;
  display: flex;
  gap: 2rem;
`;
export const LeftBar = styled.div`
  display: inline-block;
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
  background: ${(props) => props.theme.color.blue};
  border-radius: 50%;
  position: relative;
  ::after {
    content: "";
    display: block;
    width: 0.5rem;
    height: 20rem;
    background: linear-gradient(180deg, ${(props) => props.theme.color.blue} 0%, transparent 100%);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    @media screen and (${(props) => props.theme.breakpoint.md} <= width) {
      height: 25rem;
    }
  }
`;

export const Div1 = styled.div`
  flex: 1 1;
  margin-top: 2rem;
`;
export const H1 = styled.h1`
  font-family: ${(props) => props.theme.font.omyu_pretty};
  font-size: 3rem;
  @media screen and (${(props) => props.theme.breakpoint.md} <= width) {
    font-size: 4rem;
  }
`;
export const H2 = styled(H1)`
  color: ${(props) => props.theme.color.orange};
  overflow-wrap: anywhere;
`;
export const UpDown = styled.div`
  width: 2rem;
  height: 4rem;
  border-radius: 1rem;
  border: 3px solid ${(props) => props.theme.color.white};
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);

  ::after {
    content: "";
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.color.white};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    animation: ${(props) => props.theme.animation.upDown} 1s ease-in-out infinite alternate both;
  }
`;
