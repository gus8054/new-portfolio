import styled from "styled-components";
import { programmer } from "@/constants/constants";

export const Section = styled.section`
  display: flow-root;
  background: url(${programmer});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  position: relative;

  @media (orientation: portrait) {
    min-height: calc(100vmax - 106.53px);
  }
  @media (orientation: landscape) {
    min-height: calc(100vmin - 106.53px);
  }
`;
export const Container = styled.div`
  // position: relative;
  margin-top: 5rem;
  display: flex;
  gap: 2rem;
  @media screen and (${(props) => props.theme.breakpoint.md} <= width) {
    padding: 0 4rem;
    gap: 4rem;
  }
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
    min-height: calc(100vmax - 106.53px - 6.5rem);
    background: linear-gradient(180deg, ${(props) => props.theme.color.blue} 0%, transparent 100%);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    @media (orientation: portrait) {
      min-height: calc(100vmax - 106.53px - 6.5rem);
    }
    @media (orientation: landscape) {
      min-height: calc(100vmin - 106.53px - 6.5rem);
    }
  }
`;

export const Div1 = styled.div`
  // position: absolute;
  // top: 1rem;
  // left: 3rem;
  position: relative;
  flex: 1 1;
  // margin-top: 1rem;
  @media screen and (${(props) => props.theme.breakpoint.md} <= width) {
    // margin-top: 2rem;
  }
`;
export const H1 = styled.h1`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-family: ${(props) => props.theme.font.omyu_pretty};
  font-size: 2rem;
  @media screen and (${(props) => props.theme.breakpoint.md} <= width) {
    font-size: 4rem;
  }
`;
export const H2 = styled(H1)`
  color: ${(props) => props.theme.color.orange};
  overflow-wrap: anywhere;
  position: absolute;
  top: 4rem;
`;
export const UpDown = styled.div`
  width: 2rem;
  height: 4rem;
  border-radius: 1rem;
  border: 3px solid ${(props) => props.theme.color.white};
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

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
