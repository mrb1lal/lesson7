import { useTranslation } from "react-i18next";
import "./Navbar.css";

const language = [
  { code: "uz", label: "Uzbek" },
  { code: "en", label: "English" },
  { code: "ru", label: "Russian" },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="navbar">
      <h2>{t("navbar.brand")}</h2>

      <ul>
        <li>
          <a href="">{t("navbar.home")}</a>
        </li>
        <li>
          <a href="">{t("navbar.about")}</a>
        </li>
        <li>
          <a href="">{t("navbar.contact")}</a>
        </li>
      </ul>

      <select 
        className='select'
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        {language.map((item) => {
          return (
            <option key={item.code} value={item.code}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Navbar;