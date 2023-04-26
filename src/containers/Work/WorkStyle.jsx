import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";

export const Section = styled.section`
  margin-top: 10rem;
`;

export const VerticalTimelineWrapper = styled(VerticalTimeline).attrs((props) => ({
  lineColor: `linear-gradient(180deg, transparent 0%, ${props.theme.color.blue} 15%, ${props.theme.color.violet} 85%, transparent 100%)`,
}))`
  margin-top: 5rem;
`;

export const VerticalTimelineElementWrapper = styled(VerticalTimelineElement).attrs((props) => ({
  contentArrowStyle: {
    border: "none",
  },
  contentStyle: {
    background: props.$idx % 2 === 0 ? props.theme.color.blue : props.theme.color.violet,
    boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
  },
  iconStyle: {
    background: props.$idx !== 0 ? props.theme.color.orange : "tomato",
  },
}))`
  font-family: ${(props) => props.theme.font.default};
  & .vertical-timeline-element-icon:hover {
    transform: rotate(180deg) scale(1.1);
    transition: transform 0.5s ease-in-out;
  }
  & .vertical-timeline-element-content:hover {
    & h3 {
      animation: ${(props) => props.theme.animation.textPop} 0.6s both;
    }
  }
  & h3 {
    font-size: 2rem;
  }
  & li {
    ::before {
      content: "🏷️ ";
    }
  }
`;
