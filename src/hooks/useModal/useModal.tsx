import { useState } from "react";
import { createPortal } from "react-dom";
import GeneralForm from "./forms/GeneralForm";

type modalTypes = "GENERAL" | "EXPENSE" | "SAVING" | "SUBSCRIPTION";

const useModal = () => {
  const [modalType, setModalType] = useState<modalTypes | undefined>();
  const [isForm, setIsForm] = useState(false);

  const setFormState = (modalType: modalTypes | undefined) => {
    setModalType(modalType);
    setIsForm((prev) => !prev);
  };

  const getModalType = (modalType: modalTypes | undefined) => {
    switch (modalType) {
      case "GENERAL":
        return <GeneralForm setIsForm={setIsForm}></GeneralForm>;
      case "EXPENSE":
        return;
      case "SAVING":
        return;
      case "SUBSCRIPTION":
        return;
      default:
        throw new Error("None of the modal types matches");
        break;
    }
  };

  const returnForm = () => {
    return <>{getModalType(modalType)}</>;
  };

  return { isForm, setFormState, returnForm };
};

export default useModal;
