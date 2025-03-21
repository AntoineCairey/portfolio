import { useNavigate, useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faNodeJs, faReact, faAngular, faJava } from "@fortawesome/free-brands-svg-icons";

export default function ProjectCard({ project }) {
  const icons = { faDatabase, faLeaf, faNodeJs, faReact, faAngular, faJava };
  const navigate = useNavigate();
  const { data, lang } = useOutletContext();
  const projectData = data.projects[project]

  return (
    <div className="project-card" onClick={() => navigate(`/${project}`)}>
      <div className="pc-header">
        <h3>{projectData.name}</h3>
        <div>{projectData.date[lang]}</div>
        <div>{projectData.team[lang]}</div>
      </div>
      <hr />
      <div className="pb-body">
        <p className="description">{projectData.short_text[lang]}</p>
        <div className="tags">
          {projectData.tech.map((tech) => (
            <div key={tech.name} className="tag">
              <FontAwesomeIcon icon={icons[tech.icon]} /> {tech.name}
            </div>
          ))}
        </div>
      </div>
      <img src={`/${project}.png`} alt="screenshot" />
    </div>
  );
}
