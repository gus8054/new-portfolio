import { myPhoto } from "@/constants/constants";
import React from "react";
import { Container, ImgContainer, ImgContent, MouseBox, TextContent } from "./AboutStyle";
import { InView } from "react-intersection-observer";
import HeaderTextContent from "@/styles/globalComponents/HeaderTextContent";
import { about } from "@/constants/constants";
const About = () => {
  let requestId;
  const mouseMoveHandler = (e) => {
    const box = e.currentTarget;
    const x = e.clientX;
    const y = e.clientY;
    const boxRect = box.getBoundingClientRect();
    const boxCenterX = boxRect.left + boxRect.width / 2;
    const boxCenterY = boxRect.top + boxRect.height / 2;
    const deltaX = x - boxCenterX;
    const deltaY = y - boxCenterY;
    const rotateX = deltaY / 10;
    const rotateY = -deltaX / 10;

    cancelAnimationFrame(requestId);
    requestId = requestAnimationFrame(() => {
      box.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.1, 1.1, 1.1)`;
    });
  };
  const mouseOutHandler = (e) => {
    const box = e.currentTarget;
    cancelAnimationFrame(requestId);
    requestId = requestAnimationFrame(() => {
      box.style.transform = `perspective(2000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
  };
  return (
    <InView>
      {({ inView, ref }) => (
        <Container>
          <TextContent>
            <HeaderTextContent intro="INTRODUCTION" title="Overview." detail={about} />
          </TextContent>
          <ImgContent onMouseMove={mouseMoveHandler} onMouseOut={mouseOutHandler} $inView={inView}>
            <ImgContainer>
              <img src={myPhoto} alt={myPhoto} ref={ref} />
            </ImgContainer>
          </ImgContent>
        </Container>
      )}
    </InView>
  );
};

export default About;
