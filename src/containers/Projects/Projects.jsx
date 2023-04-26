import { ProjectCardStyle } from "@/components/Card/CardStyle";
import { techLogos, projects as myProjects } from "@/constants/constants";
import HeaderTextContent from "@/styles/globalComponents/HeaderTextContent";
import { useMemo, useState } from "react";
import { AllIcon, Cards, Container, GridItem, GridItemContainer, Span, Tech, TextContent } from "./ProjectsStyle";

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState("all");

  const projects = useMemo(() => myProjects, []);

  return (
    <Container id="projects">
      <TextContent>
        <HeaderTextContent intro="MY WORK" title="Projects" detail={projects.about} />
      </TextContent>
      <Tech>
        <GridItemContainer onClick={() => setSelectedTech("all")}>
          <GridItem type="button">
            <AllIcon />
          </GridItem>
          <Span>all</Span>
        </GridItemContainer>
        {techLogos.map((item, idx) => {
          return (
            <GridItemContainer key={idx} onClick={() => setSelectedTech(item.title)}>
              <GridItem type="button">
                <img src={item.img} alt={item.title} style={{ scale: 1.05 }} />
              </GridItem>
              <Span>{item.title}</Span>
            </GridItemContainer>
          );
        })}
      </Tech>
      <Cards>
        {projects.projectList
          .filter((project) => {
            if (selectedTech === "all") return true;
            else return project.tags.includes(selectedTech);
          })
          .map((project, idx) => (
            <ProjectCardStyle key={idx} {...project} />
          ))}
      </Cards>
    </Container>
  );
};

export default Projects;
