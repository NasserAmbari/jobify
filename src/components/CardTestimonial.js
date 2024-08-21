const CardTestimonial = ({ name, job, testimonial, avatar }) => {
  return (
    <div className="mb-12 px-4">
      <div className="shadow-lg p-12 rounded-lg">
        <div className="flex gap-4 items-center mb-4">
          <div className="avatar">
            <img src={avatar} className="w-16 rounded-full" alt={name} />
          </div>
          <div className="detail">
            <p>{name}</p>
            <p className="font-semibold text-lg">{job}</p>
          </div>
        </div>
        <div className="testimonial">
          <p>{testimonial}</p>
        </div>
      </div>
    </div>
  );
};

export default CardTestimonial;
