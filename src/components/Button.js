import { forwardRef } from "react";

const Button = forwardRef(({ children, click, small = false }, ref) => {
  return (
    <button
      ref={ref}
      onClick={click}
      className={` p-2 rounded-xl text-white bg-[#216A80] shadow-xl ${
        small === true ? "text-sm px-4" : "text-lg px-8"
      }`}
    >
      {children}
    </button>
  );
});

export default Button;
