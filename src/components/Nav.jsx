import { useNavigate, useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faEnvelope,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";

export default function Nav({ className }) {
  const { data, lang, setLang } = useOutletContext();

  const handleClick = (ref) => {
    setShowMenu(false);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const changeLang = (e) => {
    e.preventDefault();
    setLang(lang === "fr" ? "en" : "fr");
  };

  return (
    <nav className={className}>
      <ul>
        <li>
          <a href="#!" onClick={() => handleClick(aboutRef)}>
            <FontAwesomeIcon icon={faAddressCard} /> {data?.menu.about_me[lang]}
          </a>
        </li>
        <li>
          <a href="#!" onClick={() => handleClick(projectsRef)}>
            <FontAwesomeIcon icon={faFileCode} /> {data?.menu.projects[lang]}
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
  );
}
