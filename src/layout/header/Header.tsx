import { useState } from "react";
import style from "./header.module.css";
import { NavLink } from "react-router-dom";

type HeaderTypes = { name: string; link: string }[];

const headerList: HeaderTypes = [
  { name: "Home", link: "/" },
  { name: "Goals", link: "financial_goals" },
  { name: "Subscription", link: "subscription" },
];
const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <header style={{ width: isOpen ? "15%" : "0%" }}>
        <h2>Finance!</h2>
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
      <button
        className={style.toggleNav}
        onClick={() => handleToggle()}
        style={{ left: isOpen ? "13.1%" : ".1%" }}
        title={isOpen ? "close sidebar" : "open sidebar"}
      >
        {isOpen ? "<" : ">"}
      </button>
    </>
  );
};

export default Header;
