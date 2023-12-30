import { useState } from "react";

const HomeIncomeForm = ({ changeIncome, setIsIncomeInput }) => {
  const [newIncome, setNewIncome] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    changeIncome(parseFloat(newIncome));
    setIsIncomeInput(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="number"
            value={newIncome}
            onChange={(e) => setNewIncome(e.target.value)}
            required
            placeholder="0"
          ></input>
        </label>
      </form>
    </>
  );
};

export default HomeIncomeForm;
