import { useParams, Link, useOutletContext } from "react-router-dom";

export default function ProjectPage() {
  const { data, lang } = useOutletContext();
  const { project } = useParams();
  const projectData = data.projects[project];

  return (
    <div className="page project-page">
      <br />
      <Link to="/">Retour</Link>
      <br />
      <h2>{projectData.name}</h2>
      <a href={projectData.link} target="_blank">
        {data?.project_page.site_link[lang]}
      </a>
      <br />
      <div>
        <img src={`/${project}1.png`} alt="screenshot" />
      </div>
      <br />

      <h3>{data.project_page.context[lang]}</h3>
      <p>{projectData.context[lang]}</p>
      <br />
      <h3>{data.project_page.development[lang]}</h3>
      <p>{projectData.development[lang]}</p>
      <br />
      <h3>{data.project_page.feedback[lang]}</h3>
      <p>{projectData.feedback[lang]}</p>

      <br />
      <div>
        {[...Array(projectData.img_nb)].map((_, index) => (
          <img src={`/${project}${index + 1}.png`} alt="screenshot" />
        ))}
      </div>
    </div>
  );
}
