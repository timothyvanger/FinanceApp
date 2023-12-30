import { useFinance } from "../../../context/useFinance/useFinance";
import style from "./expenseSubpages/expenseStyle.module.css";
import ExpenseCard from "./expenseSubpages/expenseCard";
import { useAccount } from "../../../context/useAccount/useAccount";
import ExpenseAccountCard from "./expenseSubpages/expenseAccountCard";

const Expenses = () => {
  const { financeAll } = useFinance();
  const { accounts } = useAccount();
  return (
    <>
      <div className={style.dashboard}>
        <div className={style.accountExpenseContainer}>
          <p>Account and their recent Expenses</p>
          {accounts.map((account) => {
            return (
              <ExpenseAccountCard
                title={account.title}
                balance={account.balance}
                id={account.id}
              />
            );
          })}
        </div>
        <div className={style.recentExpensesContainer}>
          <p>Most recent Expenses</p>
          <div className={style.actualContainer}>
            {financeAll.map((finance) => {
              if (finance.type === "expense") {
                return (
                  <ExpenseCard
                    key={finance.id}
                    title={finance.title}
                    date={finance.date}
                    time={finance.time}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Expenses;
