import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ text }) => {
  return (
    <div className="rounded-xl w-full py-8 px-4 shadow-lg hover:shadow-2xl">
      <FontAwesomeIcon icon="fa-map" />
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default Card;
