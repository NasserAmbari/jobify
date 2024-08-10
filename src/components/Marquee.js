const Marquee = ({ children, speed = 20 }) => {
  return (
    <div className="marquee-container overflow-hidden w-full">
      <div
        className="marquee-content flex whitespace-nowrap"
        style={{ "--speed": `${speed}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

export default Marquee;
