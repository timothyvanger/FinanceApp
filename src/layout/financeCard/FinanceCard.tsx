import style from "./financeCard.module.css";
import { FinanceType } from "../../context/useFinance/FinanceType";
import { getCurrency } from "../../utili";
import useDeleteModal from "../../hooks/useDeleteModal/useDeleteModal";

const FinanceCard = ({
  title,
  cost,
  date,
  time,
  id,
  type,
  location,
  accountSelection,
  finance,
}: FinanceType) => {
  const { setModal, isDelete, returnModal } = useDeleteModal();

  return (
    <>
      {isDelete && returnModal()}
      <div className={style.fCard} key={id}>
        <p>{title}</p>
        <p>{location}</p>
        <p>{time}</p>
        <p>{date}</p>
        <p>{type}</p>
        <p>{accountSelection.accTag}</p>
        <p>{getCurrency(cost)}</p>
        <button onClick={() => setModal(finance)}>Delete</button>
      </div>
    </>
  );
};

export default FinanceCard;
