import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import { closeModal } from "../../redux/slice/Modal";

const ExpenseModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { data, sendId, apiFuncCallback } = useSelector((state) => state.Modal);

  const submitHandler = async (formData) => {
    try {
      if (sendId) {
        await apiFuncCallback({ _id: data._id, ...formData });
        dispatch(closeModal());
      } else {
        await apiFuncCallback(formData);
        dispatch(closeModal());
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="form-control w-full max-w-xs min-w-full flex gap-4">
        <Input
          label={"Enter Expense Name"}
          register={{
            ...register("name", {
              required: "Account Name Is Required",
            }),
          }}
          defaultValue={data?.name}
          error={errors?.name?.message}
        />
        <Input
          label={"Enter Expense Type"}
          register={{
            ...register("expenseType", {
              required: "Account Name Is Required",
            }),
          }}
          defaultValue={data?.expenseType}
          error={errors?.expenseType?.message}
        />
        <div className="modal-action">
          <button className="btn btn-outline btn-sm" type="submit">
            Confirm
          </button>
          <button
            className="btn btn-outline btn-sm"
            type="button"
            onClick={() => dispatch(closeModal())}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseModal;
