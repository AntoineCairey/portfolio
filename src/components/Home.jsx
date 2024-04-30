import { useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import ProjectCard from "./ProjectCard";
import Nav from "./Nav";

export default function Home() {
  const { data, lang } = useOutletContext();
  const [showMenu, setShowMenu] = useState(false);
  const projects = ["geocode", "fragrance", "elemen5", "rodolf"];

  const navRefs = {
    about: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (section) => {
    console.log("coucou");
    console.log(section);
    navRefs[section].current.scrollIntoView({ behavior: "smooth" });
  };

  console.log(data);

  return (
    <div className="page">
      <header>
        <h1>Antoine Cairey</h1>
        <Nav className="menu-desktop" scrollToSection={scrollToSection} />
        <button
          className="button-mobile"
          onClick={() => setShowMenu(!showMenu)}
        >
          <h1>
            <FontAwesomeIcon icon={faBars} />
          </h1>
        </button>
        {showMenu && (
          <Nav className="menu-mobile" scrollToSection={scrollToSection} />
        )}
      </header>

      <main>
        <section ref={navRefs.about} className="about">
          <div className="profile-pic">
            <img src="/me.png" alt="me" />
          </div>
          <h2>{data?.about_me.greeting[lang]}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: data?.about_me.description[lang],
            }}
          />
          <br />
          <ul>
            <li>
              <a href="/CV-AntoineCairey-DeveloppeurWeb.pdf" target="_blank">
                <FontAwesomeIcon icon={faFile} /> CV
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/antoine-cairey/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/AntoineCairey" target="_blank">
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
            </li>
          </ul>
        </section>

        <section ref={navRefs.projects} className="projects">
          <h2>Projets</h2>
          <div className="projects-list">
            {projects.map((project) => (
              <ProjectCard key={project} project={project} />
            ))}
          </div>
        </section>

        <section ref={navRefs.contact} className="contact">
          <h2>{data?.menu.contact[lang]}</h2>
          <div>{data?.contact.text[lang]}</div>
          <a href="javascript:void(0)">
            {">"} <FontAwesomeIcon icon={faEnvelope} /> cairey.antoine@gmail.com{" "}
          </a>
          <a href="https://www.linkedin.com/in/antoine-cairey/" target="_blank">
            {">"} <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </section>
      </main>

      <footer>
        <div>{data?.footer.text[lang]}</div>
        <a href="https://github.com/AntoineCairey/portfolio" target="_blank">
          {">"} <FontAwesomeIcon icon={faGithub} />{" "}
          {data?.footer.repo_link[lang]}
        </a>
      </footer>
    </div>
  );
}
