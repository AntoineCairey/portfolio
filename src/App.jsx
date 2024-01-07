import { useRef } from "react";
import "./App.css";

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="page">
      <header>
        <h1>Antoine Cairey</h1>
        <nav>
          <ul>
            <li>
              <a href="#!" onClick={() => handleClick(aboutRef)}>
                Présentation
              </a>
            </li>
            <li>
              <a href="#!" onClick={() => handleClick(projectsRef)}>
                Projets
              </a>
            </li>
            <li>
              <a href="#!" onClick={() => handleClick(contactRef)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section ref={aboutRef} className="about">
          <h2>Bonjour !</h2>
          <p>Je suis Antoine Cairey, développeur JavaScript fullstack junior</p>
          <div>
            <a href="">{">"} CV </a>
            <a href="https://www.linkedin.com/in/antoine-cairey/">
              {">"} LinkedIn{" "}
            </a>
            <a href="https://github.com/AntoineCairey">{">"} GitHub </a>
          </div>
        </section>

        <section ref={projectsRef} className="projects">
          <h2>Projets</h2>
          <div className="projects-list">
            <div>Geocode</div>
            <div>Elemen5</div>
            <div>Rodolf</div>
          </div>
        </section>

        <section ref={contactRef} className="contact">
          <h2>Contact</h2>
          <a href="">
              {">"} cairey.antoine@gmail.com{" "}
            </a>
            <a href="https://www.linkedin.com/in/antoine-cairey/">
              {">"} LinkedIn{" "}
            </a>
        </section>
      </main>

      <footer>
        <div>Réalisé à Bordeaux par Antoine Cairey</div>
        <a href="https://github.com/AntoineCairey/portfolio">{">"} Repo GitHub </a>
      </footer>
    </div>
  );
}

export default App;
