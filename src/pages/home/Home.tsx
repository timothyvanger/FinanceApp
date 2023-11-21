import { NavLink, Outlet } from "react-router-dom";
import style from "./homepage.module.css";

type HomeSubPagesType = { name: string; link: string }[];

export const homeSubPages: HomeSubPagesType = [
  { name: "All Finances", link: "finance_all" },
  { name: "Savings and Income", link: "savings_income" },
  {
    name: "Expenses",
    link: "expenses",
  },
];

const Home = () => {
  return (
    <>
      <div className={style.contentDashboard}>
        <div className={style.homeTab}>
          {homeSubPages.map((page, index) => {
            return (
              <NavLink
                key={index}
                to={page.link}
                className={({ isActive }) =>
                  isActive ? style.subActive : style.subNotActive
                }
              >
                {page.name}
              </NavLink>
            );
          })}
        </div>
        <div className={style.outletContainer}>
          <Outlet />
        </div>
        <div className={style.informationTab}>
          <p>profile stuff</p>
        </div>
      </div>
    </>
  );
};

export default Home;
