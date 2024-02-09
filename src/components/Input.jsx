import React from "react";

const Input = ({
  type = "text",
  label,
  register = {},
  error = "",
  defaultValue,
}) => {
  return (
    <label className="form-control flex gap-1">
      <span className="label-text">{label}</span>
      <input
        type={type}
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs min-w-full"
        {...register}
        defaultValue={defaultValue}
      />
      <span className="text-red-400 text-xs">{error}</span>
    </label>
  );
};

export default Input;
