import { useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBars,
  faEnvelope,
  faFile,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// import data from "../data.yml";
import ProjectCard from "./ProjectCard";

export default function Home() {
  const { data, lang, setLang } = useOutletContext();
  const [showMenu, setShowMenu] = useState(false);
  const projects = ["geocode", "fragrance", "elemen5", "rodolf"];

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleClick = (ref) => {
    setShowMenu(false);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const changeLang = (e) => {
    e.preventDefault();
    setLang(lang === "fr" ? "en" : "fr");
  };

  console.log(data);

  return (
    <div className="page">
      <header>
        <h1>Antoine Cairey</h1>
        <nav className="menu-desktop">
          <ul>
            <li>
              <a href="#!" onClick={() => handleClick(aboutRef)}>
                <FontAwesomeIcon icon={faAddressCard} />{" "}
                {data?.menu.about_me[lang]}
              </a>
            </li>
            <li>
              <a href="#!" onClick={() => handleClick(projectsRef)}>
                <FontAwesomeIcon icon={faFileCode} />{" "}
                {data?.menu.projects[lang]}
              </a>
            </li>
            <li>
              <a href="#!" onClick={() => handleClick(contactRef)}>
                <FontAwesomeIcon icon={faEnvelope} /> {data?.menu.contact[lang]}
              </a>
            </li>

            <div className="lang-select" onClick={changeLang}>
              <div className={`select-pointer ${lang}`}></div>
              <div>fr</div>
              <div>en</div>
            </div>
          </ul>
        </nav>
        <button
          className="button-mobile"
          onClick={() => setShowMenu(!showMenu)}
        >
          <h1>
            <FontAwesomeIcon icon={faBars} />
          </h1>
        </button>
        {showMenu && (
          <nav className="menu-mobile">
            <ul>
              <li>
                <a href="#!" onClick={() => handleClick(aboutRef)}>
                  <FontAwesomeIcon icon={faAddressCard} /> Présentation
                </a>
              </li>
              <li>
                <a href="#!" onClick={() => handleClick(projectsRef)}>
                  <FontAwesomeIcon icon={faFileCode} /> Projets
                </a>
              </li>
              <li>
                <a href="#!" onClick={() => handleClick(contactRef)}>
                  <FontAwesomeIcon icon={faEnvelope} /> Contact
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main>
        <section ref={aboutRef} className="about">
          <h2>{data?.about_me.greeting[lang]}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: data?.about_me.description[lang],
            }}
          />
          <br />
          <ul>
            <li>
              <a href="">
                <FontAwesomeIcon icon={faFile} /> CV
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/antoine-cairey/">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/AntoineCairey">
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
            </li>
          </ul>
        </section>

        <section ref={projectsRef} className="projects">
          <h2>Projets</h2>
          <div className="projects-list">
            {projects.map((project) => (
              <ProjectCard key={project} project={project} />
            ))}
          </div>
        </section>

        <section ref={contactRef} className="contact">
          <h2>{data?.menu.contact[lang]}</h2>
          <div>{data?.contact.text[lang]}</div>
          <a href="">
            {">"} <FontAwesomeIcon icon={faEnvelope} /> cairey.antoine@gmail.com{" "}
          </a>
          <a href="https://www.linkedin.com/in/antoine-cairey/">
            {">"} <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </section>
      </main>

      <footer>
        <div>{data?.footer.text[lang]}</div>
        <a href="https://github.com/AntoineCairey/portfolio">
          {">"} <FontAwesomeIcon icon={faGithub} />{" "}
          {data?.footer.repo_link[lang]}
        </a>
      </footer>
    </div>
  );
}
