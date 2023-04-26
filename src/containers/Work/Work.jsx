import React from "react";
import "react-vertical-timeline-component/style.min.css";
import { H1, Section, VerticalTimelineElementWrapper, VerticalTimelineWrapper } from "./WorkStyle";
import { DiDebian } from "react-icons/di";
import HeaderTextContent from "@/styles/globalComponents/HeaderTextContent";
import { workExperiences } from "@/constants/constants";

const Work = () => {
  return (
    <Section>
      <HeaderTextContent intro="WHAT I HAVE DONE SO FAR" title="Work Experience." />
      <VerticalTimelineWrapper>
        {workExperiences.map(({ date, title, subtitle, detail }, idx) => (
          <VerticalTimelineElementWrapper className="vertical-timeline-element--work" date={date} icon={<DiDebian />} key={idx} $idx={idx}>
            <h3 className="vertical-timeline-element-title">{title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
            <ul>
              {detail?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </VerticalTimelineElementWrapper>
        ))}
        {/* <VerticalTimelineElementWrapper className="vertical-timeline-element--work" date="2011 - present" icon={<DiDebian />} $key={0}>
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
        </VerticalTimelineElementWrapper>
        <VerticalTimelineElementWrapper
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<DiDebian />}
          $key={1}>
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
        </VerticalTimelineElementWrapper> */}
      </VerticalTimelineWrapper>
    </Section>
  );
};

export default Work;
