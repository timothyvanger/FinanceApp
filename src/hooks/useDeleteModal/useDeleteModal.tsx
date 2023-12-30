import { useState } from "react";
import { FinanceType } from "../../context/useFinance/FinanceType";
import style from "./deleteModalStyle.module.css";
import { createPortal } from "react-dom";
import { useFinance } from "../../context/useFinance/useFinance";

const useDeleteModal = () => {
  const [data, setData] = useState<FinanceType>();
  const [isDelete, setIsDelete] = useState(false);
  const { deleteFinance } = useFinance();

  const deleteModal = (
    <>
      <div className={style.modalContainer}>
        <div className={style.contentContainer}>
          <p>Are you sure you want to delete this: </p>
          <div className={style.tag}>
            <p>{data?.title}</p>
            <p>{data?.location}</p>
            <p>{data?.date}</p>
            <p>{data?.type}</p>
            <p>{data?.cost}</p>
          </div>
          <button onClick={() => deleteFinance(data?.id)}>Yes</button>
          <button onClick={() => setIsDelete(false)}>No</button>
        </div>
      </div>
    </>
  );

  const setModal = (data: FinanceType | undefined) => {
    setData(data);
    if (data === undefined) return;
    setIsDelete((prev) => !prev);
  };

  const returnModal = () => {
    return <>{createPortal(deleteModal, document.getElementById("portal")!)}</>;
  };

  return { isDelete, setModal, returnModal };
};

export default useDeleteModal;
