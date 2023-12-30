import { useState } from "react";
import { accountType } from "../../../context/useAccount/AccountType";
import style from "./IncomeFrom.module.css";
import { useAccount } from "../../../context/useAccount/useAccount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";

type InputDataType = {
  title: string;
  description: string;
  balance: number;
  accountType: accountType;
  accTag: string;
};

const SavingIncomeForm = ({ setIsForm }) => {
  const { addNewAccount } = useAccount();
  const [formCount, setFormCount] = useState(0);
  const [inputData, setInputData] = useState<InputDataType>({
    title: "",
    description: "",
    balance: 0,
    accountType: "goal",
    accTag: "",
  });

  const moveFoward = () => {
    setFormCount((prev) => prev + 1);
  };

  const moveBackward = () => {
    setFormCount((prev) => prev - 1);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    addNewAccount(
      inputData.title,
      inputData.description,
      inputData.balance,
      inputData.accountType,
      inputData.accTag.toLocaleUpperCase()
    );
    setIsForm((prev) => !prev);
  };
  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleRadio = (e: any) => {
    setInputData((prev) => {
      return { ...prev, accountType: e.target.value };
    });
  };

  const titleFrom = (
    <>
      <label className={style.labelContainer}>
        <p>Create a title for your new account!</p>
        <input
          type="text"
          name="title"
          value={inputData.title}
          onChange={(e) => handleChange(e)}
          placeholder="Enter Title Here"
          required
        ></input>
      </label>
      <div className={style.formBtnContainer}>
        {formCount !== 4 && (
          <button onClick={() => moveFoward()}>Continue</button>
        )}
        {formCount !== 0 && (
          <button onClick={() => moveBackward()}>Back</button>
        )}
      </div>
    </>
  );
  const descriptionFrom = (
    <>
      <label className={style.labelContainer}>
        <p>Create a description!{"(optional)"}</p>
        <textarea
          name="description"
          value={inputData.description}
          onChange={(e) => handleChange(e)}
          cols={30}
          rows={4}
        ></textarea>
      </label>
      <div className={style.formBtnContainer}>
        {formCount !== 5 && (
          <button onClick={() => moveFoward()}>Continue</button>
        )}
        {formCount !== 0 && (
          <button onClick={() => moveBackward()}>Back</button>
        )}
      </div>
    </>
  );
  const balanceForm = (
    <>
      <label className={style.labelContainer}>
        <p>Enter the current amount you want in this balance</p>
        <input
          type="number"
          name="balance"
          value={inputData.balance}
          onChange={(e) => handleChange(e)}
          required
        ></input>
      </label>
      <div className={style.formBtnContainer}>
        {formCount !== 5 && (
          <button onClick={() => moveFoward()}>Continue</button>
        )}
        {formCount !== 0 && (
          <button onClick={() => moveBackward()}>Back</button>
        )}
      </div>
    </>
  );
  const accountTypeForm = (
    <>
      <label className={style.labelContainer}>
        <p>Select if this is a saving's or a goal orientated account.</p>

        <div className={style.radioContainer}>
          <input
            type="radio"
            value="savings "
            checked={inputData.accountType === "savings "}
            onChange={handleRadio}
          ></input>
          <p>Savings</p>
        </div>
        <div className={style.radioContainer}>
          <input
            type="radio"
            value="goal"
            checked={inputData.accountType === "goal"}
            onChange={handleRadio}
          ></input>
          <p>Goal</p>
        </div>
      </label>
      <div className={style.formBtnContainer}>
        {formCount !== 5 && (
          <button onClick={() => moveFoward()}>Continue</button>
        )}
        {formCount !== 0 && (
          <button onClick={() => moveBackward()}>Back</button>
        )}
      </div>
    </>
  );
  const accTag = (
    <>
      <label className={style.labelContainer}>
        <p>Create a four letter tag that represents this account! </p>
        <input
          type="text"
          name="accTag"
          value={inputData.accTag}
          maxLength={4}
          minLength={4}
          onChange={(e) => handleChange(e)}
          placeholder="ex: MAIN or CART"
          required
        ></input>
      </label>
      <div className={style.formBtnContainer}>
        {formCount !== 5 && (
          <button onClick={() => moveFoward()}>Continue</button>
        )}
        {formCount !== 0 && (
          <button onClick={() => moveBackward()}>Back</button>
        )}
      </div>
    </>
  );
  const submitForm = (
    <>
      <div className={style.labelContainer}>
        <p>
          Before submitting, make sure you have all the enter information are
          correct!
        </p>
        <button id={style.submitBtn} type="submit">
          Submit
        </button>
      </div>
      <div className={style.formBtnContainer}>
        {formCount !== 5 && (
          <button onClick={() => moveFoward()}>Continue</button>
        )}
        {formCount !== 0 && (
          <button onClick={() => moveBackward()}>Back</button>
        )}
      </div>
    </>
  );

  return (
    <>
      <form className={style.formContainer} onSubmit={handleSubmit}>
        <div className={style.subContainer}>
          {formCount === 0 && titleFrom}
          {formCount === 1 && descriptionFrom}
          {formCount === 2 && balanceForm}
          {formCount === 3 && accountTypeForm}
          {formCount === 4 && accTag}
          {formCount === 5 && submitForm}
        </div>
        <button id={style.cancelBtn} onClick={() => setIsForm((prev) => !prev)}>
          <FontAwesomeIcon icon={faBan} style={{ color: "#e05252bd" }} />
        </button>
      </form>
    </>
  );
};

export default SavingIncomeForm;
