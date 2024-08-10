import React from "react";

const Input = ({ label, handler, name, placeholder, type, required }) => {
  return (
    <div className="mb-2 md:mb-8">
      <label className="md:text-md" for={name}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        onChange={handler}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-xl border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#216A80] sm:leading-6"
      />
    </div>
  );
};

export default Input;
