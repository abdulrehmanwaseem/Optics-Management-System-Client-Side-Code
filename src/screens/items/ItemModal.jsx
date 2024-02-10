import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import { closeModal } from "../../redux/slice/Modal";
import Select from "../../components/Select";
import { useGetCompaniesQuery } from "../../redux/apis/apis";

const ItemModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const {
    data: itemData,
    sendId,
    apiFuncCallback,
  } = useSelector((state) => state.Modal);

  const { data: companies = {} } = useGetCompaniesQuery({ sort: 1 });
  const { data = [] } = companies;

  const submitHandler = async (formData) => {
    try {
      if (sendId) {
        await apiFuncCallback({ _id: itemData._id, ...formData });
        dispatch(closeModal());
      } else {
        await apiFuncCallback(formData);
        dispatch(closeModal());
      }
    } catch (error) {
      console.log(error);
    }
  };
  const options = [];
  options.push(
    data?.data?.map((company) => ({
      title: company.name,
      value: company._id,
    }))
  );
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="form-control w-full max-w-xs min-w-full flex gap-4">
        <Input
          label={"Enter Item Name"}
          register={{
            ...register("name", {
              required: "Item Name Is Required",
            }),
          }}
          defaultValue={itemData?.name}
          error={errors?.name?.message}
        />
        <Select
          label={"Select Item Company"}
          register={{
            ...register("companyName", {
              required: "Company Name Is Required",
            }),
          }}
          defaultValue={itemData?.companyName?.name}
          error={errors?.companyName?.name?.message}
          options={options[0]}
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

export default ItemModal;
