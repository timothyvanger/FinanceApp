import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import FinancialGoals from "./financial_goal/FinancialGoals";
import Subscriptions from "./subscription/Subscriptions";
import FinanceAll from "./home/subpages/FinanceAll";
import SavingIncome from "./home/subpages/SavingIncome";
import Expenses from "./home/subpages/Expenses";
import { homeSubPages } from "./home/Home";

const PageLoader = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path={homeSubPages[0].link} element={<FinanceAll />}></Route>
        <Route path={homeSubPages[1].link} element={<SavingIncome />}></Route>
        <Route path={homeSubPages[2].link} element={<Expenses />}></Route>
        <Route index element={<FinanceAll />}></Route>
      </Route>
      <Route path="financial_goals" element={<FinancialGoals />}></Route>
      <Route path="subscription" element={<Subscriptions />}></Route>
    </Routes>
  );
};

export default PageLoader;
