import { Section, VerticalTimelineElementWrapper, VerticalTimelineWrapper } from "./WorkStyle";
import { DiDebian } from "react-icons/di";
import HeaderTextContent from "@/styles/globalComponents/HeaderTextContent";
import { workExperiences } from "@/constants/constants";

const Work = () => {
  return (
    <Section id="work">
      <HeaderTextContent intro="WHAT I HAVE DONE SO FAR" title="Work Experience." />
      <VerticalTimelineWrapper>
        {workExperiences.reverse().map(({ date, title, subtitle, detail }, idx) => (
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
      </VerticalTimelineWrapper>
    </Section>
  );
};

export default Work;
