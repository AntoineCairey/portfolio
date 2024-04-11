import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";

export default function ProjectCard({ project, lang }) {
  const icons = { faDatabase, faNodeJs, faReact };
  const navigate = useNavigate();

  return (
    <div className="project-card" onClick={() => navigate("/geocode")}>
      <div className="pc-header">
        <h3>{project.name}</h3>
        <div>{project.date[lang]}</div>
        <div>{project.team[lang]}</div>
      </div>
      <hr />
      <div className="pb-body">
        <p className="description">{project.short_text[lang]}</p>
        <div className="tags">
          {project.tech.map((tech) => (
            <div key={tech.name} className="tag">
              <FontAwesomeIcon icon={icons[tech.icon]} /> {tech.name}
            </div>
          ))}
        </div>
      </div>
      <img src="./src/assets/geocode1.png" alt="screenshot" />
    </div>
  );
}
