import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import { closeModal } from "../../redux/slice/Modal";
import Select from "../../components/Select";

const AccountModal = () => {
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
  const options = [
    {
      title: "Customer",
      value: "customer",
    },
    {
      title: "Vender",
      value: "vender",
    },
    {
      title: "Expense",
      value: "expense",
    },
  ];
  console.log(data?.accountType);
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="form-control w-full max-w-xs min-w-full flex gap-4">
        <Input
          label={"Enter Account Name"}
          register={{
            ...register("accountName", {
              required: "Account Name Is Required",
            }),
          }}
          defaultValue={data?.accountName}
          error={errors?.accountName?.message}
        />
        <Input
          label={"Enter Account Number"}
          register={{
            ...register("accountNumber", {
              required: "Account Number Is Required",
            }),
          }}
          type="number"
          defaultValue={data?.accountNumber}
          error={errors?.accountNumber?.message}
        />
        <Select
          label={"Enter Account Type"}
          register={{
            ...register("accountType", {
              required: "Account Number Is Required",
            }),
          }}
          defaultValue={data?.accountType}
          error={errors?.accountType?.message}
          options={options}
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

export default AccountModal;
