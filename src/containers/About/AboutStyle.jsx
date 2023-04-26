import styled, { css } from "styled-components";

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgContent = styled.div`
  align-self: center;
  border: 2px solid transparent;
  border-radius: 32px;
  overflow: hidden;
  ${(props) =>
    props.$inView &&
    css`
      animation: ${(props) => props.theme.animation.slideInLeft} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both, ${(props) => props.theme.animation.colorChange} 8s linear infinite alternate both;
    `}
  position: relative;
  transition: transform 0.5s;
  max-width: max-content;
`;
export const Container = styled.section`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (${(props) => props.theme.breakpoint.md} <= width) {
    flex-direction: row;
    justify-content: space-between;
    gap: 4rem;
    & ${TextContent} {
      flex-basis: 50%;
      order: 2;
    }
    & ${ImgContent} {
      flex-basis: 40%;
      order: 1;
    }
  }
`;
export const ImgContainer = styled.div`
  background-color: ${(props) => props.theme.color.blue};
`;
