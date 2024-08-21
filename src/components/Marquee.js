const Marquee = ({ children, length }) => {
  return (
    <div
      className="marquee fadeout-horizontal"
      style={{ "--num-items": length }}
    >
      <div className="marquee-track">{children}</div>
    </div>
  );
};

export default Marquee;
