import React from "react";

const InputField = ({ type, label, options, value, setValue }) => {
  return (
    <div className="flex flex-col gap-1 mb-10">
      <label htmlFor={label} className="pl-2 text-xl text-text-secondary">
        {label}
      </label>
      {options ? (
        <select
          value={value}
          onChange={(e) => {
            console.log(value);
            setValue(e.target.value);
          }}
          name={label}
          className="w-full bg-surface-dark border border-border outline-0 focus:border-secondary rounded-md px-4 py-2 text-2xl text-text-primary"
        >
          {options.map((option, i) => {
            return (
              <option
                key={i}
                value={option}
                className="w-full bg-surface-dark border border-border outline-0 focus:border-secondary px-4 py-2 text-2xl text-text-primary rounded-2xl"
              >
                {option}
              </option>
            );
          })}
        </select>
      ) : (
        <input
          name={label}
          type={type}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className="w-full bg-surface-dark border border-border outline-0 focus:border-secondary rounded-md px-4 py-2 text-2xl text-text-primary"
        />
      )}
    </div>
  );
};

export default InputField;
