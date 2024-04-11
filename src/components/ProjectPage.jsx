import { useParams, useNavigate, Link } from "react-router-dom";
import data from "../data.yml";

export default function ProjectPage() {
  let { projectName } = useParams();
  const navigate = useNavigate();
  const lang = "fr";

  return (
    <div className="page">
      <br />
      <Link to="/">Retour</Link>
      <br />
      <h2>{data?.projects[projectName].name}</h2>
      <a href={data?.projects[projectName].link} target="_blank">
        {data?.project_page.site_link[lang]}
      </a>
      <br />
      <div
        dangerouslySetInnerHTML={{
          __html: data?.projects[projectName].long_text[lang],
        }}
      />
      <br />

      <img src="./src/assets/geocode1.png" alt="screenshot" />
    </div>
  );
}
