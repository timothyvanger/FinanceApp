import { NavLink, Outlet } from "react-router-dom";
import style from "./homepage.module.css";
import { useProfile } from "../../hooks/useProfile/useProfile";
import { getCurrency } from "../../utili";
import { useState } from "react";
import HomeIncomeForm from "./HomeIncomeForm";

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
  const { profile, clearProfile, changeIncome } = useProfile();
  const [isIncomeInput, setIsIncomeInput] = useState(false);

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
          <img
            src={profile.profilePic}
            width={150}
            height={150}
            style={{ borderRadius: "50%", border: "1px solid black" }}
          />
          <p style={{ fontSize: "2rem" }}>{profile.name}</p>
          <p className={style.incomeFormBtn}>
            <button
              className={style.incomeBtn}
              onClick={() => setIsIncomeInput(true)}
            >
              Income:{" "}
            </button>{" "}
            {isIncomeInput ? (
              <HomeIncomeForm
                changeIncome={changeIncome}
                setIsIncomeInput={setIsIncomeInput}
              ></HomeIncomeForm>
            ) : (
              getCurrency(profile.income)
            )}
          </p>
          <p>Master Balance: {getCurrency(profile.masterBalance)}</p>
          <button onClick={() => clearProfile()}>
            Clear income and master balace
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
