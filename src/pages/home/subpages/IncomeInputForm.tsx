import { useState } from "react";
import style from "./SavingIncome.module.css";

const IncomeInputForm = ({ setIsProfile, addToIncomeArray }) => {
  const [inputData, setInputData] = useState({
    location: "",
  });

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addToIncomeArray(inputData.location);
    setIsProfile(false);
  };
  return (
    <form onSubmit={handleSubmit} className={style.incomeInputLabel}>
      <label>
        <p>Location: </p>
        <input
          type="text"
          name="location"
          value={inputData.location}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default IncomeInputForm;
