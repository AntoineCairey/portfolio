import { useParams, Link, useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

export default function ProjectPage() {
  const { data, lang } = useOutletContext();
  const { project } = useParams();
  const projectData = data.projects[project];

  return (
    <div className="page project-page">
      <header>
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} /> Retour
        </Link>
      </header>

      <main>
        <div className="project-header">
          <div>
            <h2>{projectData.name}</h2>
            <a href={projectData.site_link} target="_blank">
              {data?.project_page.site_link[lang]}{" "}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
            <br />
            <br />
            <a href={projectData.repo_link} target="_blank">
              {data?.project_page.repo_link[lang]}{" "}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <div className="project-pic">
            <img src={`${project}/${project}.png`} alt="screenshot" />
          </div>
        </div>

        <h3>{data.project_page.context[lang]}</h3>
        <p>{projectData.context[lang]}</p>
        <br />
        <h3>{data.project_page.development[lang]}</h3>
        <p>{projectData.development[lang]}</p>
        <br />
        <h3>{data.project_page.feedback[lang]}</h3>
        <p>{projectData.feedback[lang]}</p>

        <br />
        <div className="project-pics">
          {[...Array(projectData.img_nb)].map((_, index) => (
            <img
              src={`${project}/${project}${index + 1}.png`}
              alt="screenshot"
              key={index}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
