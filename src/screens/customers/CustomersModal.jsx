import React from "react";
import { closeModal } from "../../redux/slice/Modal";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";

const CustomersModal = () => {
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
          label={"Enter Customer Name"}
          register={{
            ...register("name", {
              required: "Customer Name Is Required",
            }),
          }}
          defaultValue={data?.name}
          error={errors?.name?.message}
        />
        <Input
          label={"Enter Customer Contact-1"}
          register={{
            ...register("contact1", {
              required: "Customer Contact1 Is Required",
            }),
          }}
          type="number"
          defaultValue={data?.contact1}
          error={errors?.contact1?.message}
        />
        <Input
          label={"Enter Customer Contact-2"}
          register={{
            ...register("contact2", {
              required: "Customer Contact2 Is Required",
            }),
          }}
          type="number"
          defaultValue={data?.contact2}
          error={errors?.contact2?.message}
        />
        <Input
          label={"Enter Customer Address"}
          register={{
            ...register("address", {
              required: "Customer Address Is Required",
            }),
          }}
          defaultValue={data?.address}
          error={errors?.address?.message}
        />
        <Input
          label={"Enter Customer Age"}
          register={{
            ...register("age", {
              required: "Customer Age Is Required",
            }),
          }}
          type="number"
          defaultValue={data?.age}
          error={errors?.age?.message}
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

export default CustomersModal;
