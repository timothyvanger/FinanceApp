import style from "./SavingIncome.module.css";
import { useAccount } from "../../../context/useAccount/useAccount";
import SavingIncomeCard from "./SavingIncomeCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SavingIncomeForm from "./SavingIncomeForm";
import { accountTypes } from "../../../context/useAccount/AccountType";
import { getCurrency } from "../../../utili";
import IncomeInputForm from "./IncomeInputForm";

import { useProfile } from "../../../hooks/useProfile/useProfile";

const SavingIncome = () => {
  const [isForm, setIsForm] = useState(false);
  const { accounts, deleteAccount } = useAccount();
  const { profile, incomeChecks, addToIncomeArray } = useProfile();
  const [isProfile, setIsProfile] = useState(false);

  return (
    <>
      <div className={style.dashboard}>
        <div className={style.accountContainer}>
          <div className={style.addContainer}>
            {isForm ? (
              <SavingIncomeForm setIsForm={setIsForm} />
            ) : (
              <button onClick={() => setIsForm((prev) => !prev)}>
                <FontAwesomeIcon
                  icon={faPlusCircle}
                  style={{ color: "#0081a7" }}
                  size="4x"
                />
              </button>
            )}
          </div>
          <div className={style.accountCard}>
            <p className={style.title}>Master Account</p>
            <p className={style.accountType}>
              <span style={{ color: "#0c5970" }}>Account Tag: </span>
              {profile.tag}
            </p>
            <p className={style.balance}>
              <span style={{ color: "#0c5970" }}>Current Balance: </span>
              {getCurrency(profile.masterBalance)}
            </p>
          </div>
          {accounts.map((account, index) => {
            if (account.accountType === accountTypes.savings) {
              return (
                <SavingIncomeCard
                  key={index}
                  accTag={account.accTag}
                  title={account.title}
                  balance={account.balance}
                  id={account.id}
                  accountType={account.accountType}
                  deleteAccount={deleteAccount}
                />
              );
            }
            if (account.accountType === accountTypes.goal) {
              return (
                <SavingIncomeCard
                  key={index}
                  accTag={account.accTag}
                  title={account.title}
                  balance={account.balance}
                  id={account.id}
                  goalBalance={account.goalBalance}
                  accountType={account.accountType}
                  deleteAccount={deleteAccount}
                />
              );
            }
          })}
        </div>
        <div className={style.incomeColumn}>
          <p style={{ fontSize: "1.5rem", color: "white" }}>Income column</p>
          {isProfile ? (
            <IncomeInputForm
              addToIncomeArray={addToIncomeArray}
              setIsProfile={setIsProfile}
            />
          ) : (
            <button
              className={style.toggleIncomeBtn}
              onClick={() => setIsProfile((prev) => !prev)}
              style={{ fontSize: "1rem" }}
            >
              Add Income
            </button>
          )}
          <div className={style.incomeColumnScroll}>
            {incomeChecks.map((check) => {
              return (
                <div key={check.id} className={style.incomeCard}>
                  <p style={{ color: "white" }}>{getCurrency(check.amount)}</p>
                  <p>
                    <span style={{ fontStyle: "italic" }}>recieved from: </span>
                    {check.location}
                  </p>
                  <p style={{ fontStyle: "italic" }}>
                    recieved at {check.date} at {check.time.slice(0, 5)}
                    {check.time.slice(8)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SavingIncome;
