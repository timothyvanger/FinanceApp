import style from "./SavingIncome.module.css";
import { getCurrency } from "../../../utili";
import { accountType } from "../../../context/useAccount/AccountType";

const SavingIncome = ({
  accTag,
  balance,
  title,
  deleteAccount,
  id,
  accountType,
  goalBalance,
}) => {
  const generateColor = (type: accountType) => {
    if (type === "goal") {
      return "#56cae7";
    } else {
      return "#44b86a";
    }
  };

  return (
    <div
      className={style.accountCard}
      style={{ backgroundColor: generateColor(accountType) }}
    >
      <p className={style.title}>{title}</p>
      <p className={style.tag}>
        <span style={{ color: "#0c5970" }}>Account Tag: </span>
        {accTag}
      </p>
      <p className={style.accountType}>
        <span style={{ color: "#0c5970" }}>Account Type: </span>
        {accountType}
      </p>
      <p className={style.balance}>
        <span style={{ color: "#0c5970" }}>Current Balance: </span>
        {getCurrency(balance)}
      </p>
      {goalBalance && (
        <p className={style.goalBalance}>
          <span style={{ color: "#0c5970" }}>Goal Balance: </span>
          {getCurrency(goalBalance)}
        </p>
      )}
      <button id={style.deleteBtn} onClick={() => deleteAccount(id)}>
        Delete
      </button>
    </div>
  );
};

export default SavingIncome;
