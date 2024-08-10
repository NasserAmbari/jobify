import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Quote = () => {
  return (
    <div className="flex flex-col rounded-lg w-full py-8 px-4 shadow-lg hover:shadow-2xl gap-8">
      <div className="text-center">
        <FontAwesomeIcon icon="fa-circle" size="10x" className="mb-8" />
        <p>Ahmad Nasser Ambari</p>
        <p>Indonesia, Front-end Web Dev</p>
      </div>
      <div>
        <div className="mb-2">
          <FontAwesomeIcon icon="fa-quote-left" size="2xl" />
        </div>
        <p>Ternyata segampang ini apply sebuah perkerjaan </p>
      </div>
      <div className="flex justify-end items-center gap-2">
        <div className="text-xs"></div>
      </div>
    </div>
  );
};

export default Quote;
