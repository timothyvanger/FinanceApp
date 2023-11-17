import style from "./header.module.css";
import { NavLink } from "react-router-dom";

type HeaderTypes = { name: string; link: string }[];

const headerList: HeaderTypes = [
  { name: "Money", link: "money" },
  { name: "Candy", link: "candy" },
  { name: "Home", link: "/" },
];
const Header = () => {
  return (
    <>
      <header>
        <h2>Logo</h2>
        <div className={style.navContainer}>
          {headerList.map((link, index) => {
            return (
              <NavLink
                key={index}
                to={link.link}
                className={({ isActive }) => (isActive ? style.active : "")}
              >
                {link.name}
              </NavLink>
            );
          })}
        </div>
      </header>
    </>
  );
};

export default Header;
