const Button = ({ text, click }) => {
  return (
    <button
      onClick={click}
      className="w-full text-center bg-[#216A80] text-white py-2 md:py-4 rounded-xl"
    >
      {text}
    </button>
  );
};

export default Button;
