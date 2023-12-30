import { useAccount } from "../../../../context/useAccount/useAccount";
import { useFinance } from "../../../../context/useFinance/useFinance";
import { getCurrency } from "../../../../utili";
import style from "./expenseStyle.module.css";

type ExpenseAccountCardProps = {
  title: string;
  balance: number;
  id: string;
};
const ExpenseAccountCard = ({
  title,
  balance,
  id,
}: ExpenseAccountCardProps) => {
  const { financeAll } = useFinance();

  return (
    <div className={style.expenseAccountCard}>
      <p>{title}</p>
      <p>{getCurrency(balance)}</p>
      <div className={style.accountFinanceExpenses}>
        {financeAll.map((finance) => {
          if (finance.accountSelection.id !== id) return;
          if (finance.type !== "expense") return;

          return <>{finance.title}</>;
        })}
      </div>
    </div>
  );
};

export default ExpenseAccountCard;
