import { useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faEnvelope,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";

export default function Nav({ className, scrollToSection }) {
  const { data, lang, setLang } = useOutletContext();

  const changeLang = (e) => {
    e.preventDefault();
    setLang(lang === "fr" ? "en" : "fr");
  };

  return (
    <nav className={className}>
      <ul>
        <li>
          <div onClick={() => scrollToSection("about")}>
            <FontAwesomeIcon icon={faAddressCard} /> {data?.menu.about_me[lang]}
          </div>
        </li>
        <li>
          <div onClick={() => scrollToSection("projects")}>
            <FontAwesomeIcon icon={faFileCode} /> {data?.menu.projects[lang]}
          </div>
        </li>
        <li>
          <div onClick={() => scrollToSection("contact")}>
            <FontAwesomeIcon icon={faEnvelope} /> {data?.menu.contact[lang]}
          </div>
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
