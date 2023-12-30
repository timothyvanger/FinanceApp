import style from "./expenseStyle.module.css";

type ExpenseCardProps = {
  title: string;
  date: string;
  time: string;
};

const ExpenseCard = ({ title, date, time }: ExpenseCardProps) => {
  return (
    <div className={style.expenseCard}>
      <p>{title}</p>
      <p>{date}</p>
      <p>{time}</p>
    </div>
  );
};

export default ExpenseCard;
