import { useState } from "react";
import { DifferentFinanceTypes } from "../../../context/useFinance/FinanceType";
import style from "./formStyle.module.css";
import { useFinance } from "../../../context/useFinance/useFinance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown, faBan } from "@fortawesome/free-solid-svg-icons";
import { useAccount } from "../../../context/useAccount/useAccount";
import { Account } from "../../../context/useAccount/AccountType";
import { useProfile } from "../../useProfile/useProfile";

type Types = {
  expense: DifferentFinanceTypes;
  transfer: DifferentFinanceTypes;
  subscription: DifferentFinanceTypes;
  saving: DifferentFinanceTypes;
};

const financeTypes: Types = {
  expense: "expense",
  transfer: "transfer",
  subscription: "subscription",
  saving: "saving",
};

const GeneralForm = ({ setIsForm }: any) => {
  const [inputData, setInputData] = useState({
    name: "",
    location: "",
    cost: 0,
    type: financeTypes.expense,
    date: "",
    accountSelection: "",
  });
  const { profile } = useProfile();
  const { addFinance } = useFinance();
  const { accounts } = useAccount();

  const handleChange = (e: any) => {
    let name = e.target.name;
    let value = e.target.value;

    setInputData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleCancel = () => {
    setIsForm(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let selection: Account | string;
    accounts.forEach((account) => {
      if (account.id === inputData.accountSelection) {
        selection = account;
      }
    });
    if (inputData.accountSelection === "master") {
      selection = inputData.accountSelection;
    }

    addFinance(
      inputData.name,
      inputData.date,
      inputData.cost,
      inputData.type,
      inputData.location,
      selection
    );
    setIsForm(false);
  };

  return (
    <form onSubmit={handleSubmit} className={style.formContainer}>
      <label className={style.labelContainer}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={inputData.name}
          onChange={(e) => handleChange(e)}
          required
        ></input>
      </label>
      <label className={style.labelContainer}>
        <input
          type="text"
          placeholder="Location"
          name="location"
          value={inputData.location}
          onChange={(e) => handleChange(e)}
        ></input>
      </label>
      <label className={style.labelContainer}>
        <input
          type="date"
          placeholder="Date"
          name="date"
          value={inputData.date}
          onChange={(e) => handleChange(e)}
        ></input>
      </label>
      <label className={style.labelContainer}>
        <select
          name="type"
          value={inputData.type}
          onChange={(e) => handleChange(e)}
          required
        >
          <option disabled>Finance Type</option>
          <option value={financeTypes.expense}>Expense</option>
          <option value={financeTypes.saving}>Saving</option>
          <option value={financeTypes.transfer}>Transfer</option>
          <option value={financeTypes.subscription}>Subscription</option>
        </select>
      </label>
      <label className={style.labelContainer}>
        <select
          name="accountSelection"
          value={inputData.accountSelection}
          onChange={(e) => handleChange(e)}
          required
        >
          <option disabled value="">
            Select an account
          </option>
          <option value={profile.id} key={profile.id}>
            {profile.tag}
          </option>
          {accounts.map((account, index) => {
            return (
              <option value={account.id} key={index}>
                {account.accTag}
              </option>
            );
          })}
        </select>
      </label>
      <label className={style.labelContainer}>
        <input
          type="number"
          placeholder="Cost"
          name="cost"
          value={inputData.cost}
          onChange={(e) => handleChange(e)}
          required
        ></input>
      </label>
      <label className={style.labelContainer}>
        <button>
          <FontAwesomeIcon icon={faCircleDown} style={{ color: "#0081a7" }} />
          Add
        </button>
      </label>
      <label className={style.labelContainer}>
        <button type="button" onClick={() => handleCancel()}>
          <FontAwesomeIcon icon={faBan} style={{ color: "#e05252bd" }} />
        </button>
      </label>
    </form>
  );
};

export default GeneralForm;
