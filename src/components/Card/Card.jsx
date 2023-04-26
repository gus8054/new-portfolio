import { GithubIcon, Icon, ImgContainer, Overlay, Tag, Tags, TextContent } from "./CardStyle";
import { SiVelog, SiGithub, SiAirplayaudio } from "react-icons/si";
const ProjectCard = (props) => {
  return (
    <article {...props}>
      <ImgContainer>
        <img src={props.img} alt={props.img} />
      </ImgContainer>
      <TextContent>
        <h1>{props.title}</h1>
        <p>{props.detail}</p>
      </TextContent>
      <Tags>
        {props.tags.map((tag, idx) => (
          <Tag key={idx}>{tag}</Tag>
        ))}
      </Tags>
      <Overlay>
        <Icon href={props.link.github}>
          <SiGithub />
        </Icon>
        <Icon href={props.link.velog}>
          <SiVelog />
        </Icon>
        <Icon href={props.link.demo}>
          <SiAirplayaudio />
        </Icon>
      </Overlay>
    </article>
  );
};

export default ProjectCard;
