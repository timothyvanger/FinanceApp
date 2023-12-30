import style from "./../homepage.module.css";
import { useFinance } from "../../../context/useFinance/useFinance";
import FinanceCard from "../../../layout/financeCard/FinanceCard";
import useModal from "../../../hooks/useModal/useModal";

const FinanceAll = () => {
  const { financeAll } = useFinance();
  const { setFormState, isForm, returnForm } = useModal();

  return (
    <>
      <div className={style.financeList}>
        {!isForm && (
          <button onClick={() => setFormState("GENERAL")}>
            Add a new expense/saving
          </button>
        )}

        {isForm && returnForm()}

        <div className={style.filterBar}>
          <p>Name</p>
          <p>Location of purchase</p>
          <p>time</p>
          <p>date</p>
          <p>type of finance</p>
          <p>account selection</p>
          <p>cost</p>
        </div>
        {financeAll.map((finance) => {
          return (
            <FinanceCard {...finance} finance={finance} key={finance.id} />
          );
        })}
      </div>
    </>
  );
};

export default FinanceAll;
