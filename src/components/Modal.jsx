import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/slice/Modal";
import CustomersModal from "../screens/customers/CustomersModal";
import ConfirmationModal from "./ConfirmationModal";
import PrescriptionDetails from "../screens/customers/PrescriptionDetails";
import PrescriptionModal from "../screens/customers/PrescriptionModal";
import OwnerAccountModal from "../screens/ownerAccount/OwnerAccountModal";
import AccountModal from "../screens/accounts/AccountModal";
import CompaniesModal from "../screens/companies/CompaniesModal";
import ExpenseModal from "../screens/expenses/ExpenseModal";
import ItemModal from "../screens/items/ItemModal";
import VenderModal from "../screens/venders/VenderModal";

const Modal = () => {
  const dispatch = useDispatch();
  const { open, modalType, title } = useSelector((state) => state.Modal);
  return (
    <dialog className="modal" open={open}>
      <div className="modal-box w-full shadow-md outline shadow-slate-100">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => dispatch(closeModal())}
          >
            ✕
          </button>
        </form>
        <h1 className="text-amber-300 font-bold text-lg mb-3">{title}!</h1>
        {checkModal(modalType)}
      </div>
    </dialog>
  );
};

export default Modal;

const checkModal = (name) => {
  let component = null;
  switch (name) {
    case "customer":
      component = <CustomersModal />;
      break;
    case "confirmation":
      component = <ConfirmationModal />;
      break;
    case "prescriptionModal":
      component = <PrescriptionModal />;
      break;
    case "prescription":
      component = <PrescriptionDetails />;
      break;
    case "ownerAccount":
      component = <OwnerAccountModal />;
      break;
    case "Account":
      component = <AccountModal />;
      break;
    case "Companies":
      component = <CompaniesModal />;
      break;
    case "Expense":
      component = <ExpenseModal />;
      break;
    case "Item":
      component = <ItemModal />;
      break;
    case "Vender":
      component = <VenderModal />;
  }
  return component;
};
