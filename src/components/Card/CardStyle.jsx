import styled from "styled-components";
import ProjectCard from "./Card";

export const Overlay = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in-out;
  background: rgba(0, 0, 0, 0.5);
  animation: ${(props) => props.theme.animation.focusIn} 0.2s linear both;
  @media (pointer: none) {
    height: 20%;
    flex-direction: row;
    line-height: 0;
  }
`;

export const ProjectCardStyle = styled(ProjectCard)`
  padding: 2rem;
  border-radius: 10px;
  overflow: hidden;
  background: ${(props) => props.theme.color.navy};
  box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px;
  position: relative;
  :hover ${Overlay} {
    display: flex;
  }
`;
export const ImgContainer = styled.div`
  border-radius: 10px;
  background: ${(props) => props.theme.color.gray};
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  position: relative;
  overflow: hidden;
  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }
`;

export const Icon = styled.a`
  cursor: pointer;
  font-size: 3rem;
  color: ${(props) => props.theme.color.white};
  :hover {
    scale: 1.2;
  }
`;
export const TextContent = styled.div`
  margin-top: 2rem;
`;
export const Tags = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;
export const Tag = styled.div`
  border-radius: 10px;
  padding: 0.2rem 0.4rem;
  background: ${(props) => props.theme.color.blue};
  ::before {
    content: "# ";
  }
`;
