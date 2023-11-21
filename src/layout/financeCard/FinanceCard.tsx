import style from "./financeCard.module.css";
import { FinanceType } from "../../context/useFinance/FinanceType";
import { getCurrency } from "../../utili";

const FinanceCard = ({
  title,
  cost,
  date,
  time,
  id,
  type,
  location,
}: FinanceType) => {
  return (
    <>
      <div className={style.fCard} key={id}>
        <p>{title}</p>
        <p>{location}</p>
        <p>{time}</p>
        <p>{date}</p>
        <p>{type}</p>
        <p>{getCurrency(cost)}</p>
      </div>
    </>
  );
};

export default FinanceCard;
