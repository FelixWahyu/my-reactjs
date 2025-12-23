import React from "react";

type InputProps = {
  type: string;
  id: string;
  name: string;
  placeholder?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validation?: string;
};

export const Input = (props: InputProps) => {
  const { type, id, name, placeholder, value, onChange, validation = "" } = props;

  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete="off"
      className={`bg-gray-100 mt-1 pl-10 pr-3 py-2 w-full border shadow-sm rounded-lg outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-500 transition-all ${validation}`}
    />
  );
};
