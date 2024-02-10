import React from "react";

const Select = ({
  label,
  register = {},
  error = "",
  defaultValue,
  options,
}) => {
  return (
    <label className="form-control flex gap-1">
      <span className="label-text">{label}</span>
      <select
        placeholder="Type here"
        className="select select-bordered"
        {...register}
      >
        {options?.map((val, i) => (
          <option
            key={i}
            value={val?.value}
            selected={val.title === defaultValue || val.value === defaultValue}
          >
            {val?.title}
          </option>
        ))}
      </select>
      <span className="text-red-400 text-xs">{error}</span>
    </label>
  );
};

export default Select;
