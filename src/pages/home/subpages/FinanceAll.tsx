import style from "./../homepage.module.css";
import { useFinance } from "../../../context/useFinance/useFinance";
import FinanceCard from "../../../layout/financeCard/FinanceCard";

const FinanceAll = () => {
  const financeAll = useFinance();

  console.log(financeAll);
  return (
    <div className={style.financeList}>
      {financeAll.map((finance) => {
        return <FinanceCard {...finance} key={finance.id} />;
      })}
    </div>
  );
};

export default FinanceAll;
