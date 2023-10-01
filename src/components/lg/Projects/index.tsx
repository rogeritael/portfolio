import { Title } from "../../sm/Title";
import { StyledSection } from "./styles";

import { projects } from "../../../mocks/projects";
import { ProjectCard } from "../../md/ProjectCard";

export function Projects(){
    return(
        <StyledSection id="projects">
            <Title
                string="Projetos em"
                emphasis="Destaque"
            />
            <div className="projects_container">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.project_name}
                        project_name={project.project_name}
                        technologies={project.technologies}
                        cover={project.cover}
                        description={project.description}
                        gitLink={project.gitLink}
                        prodLink={project.gitLink}
                        content_side={project.content_side}
                    />
                ))}
            </div>
        </StyledSection>
    )
}