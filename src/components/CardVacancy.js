import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { rupiahFormat } from "../utils/format";
import { Link } from "react-router-dom";
import { Button } from "../components";

const CardVacancy = ({
  id,
  title,
  company,
  imageCompany,
  jobTenure,
  companyCity,
  salaryMin,
  salaryMax,
  jobType,
}) => {
  return (
    <div className="rounded-xl w-full py-8 px-4 shadow-lg hover:shadow-2xl">
      <div className="flex gap-8 justify-between items-center mb-8">
        <div className="flex flex-col">
          <p className="text-2xl">{title}</p>
          <p className="text-sm opacity-70">{company}</p>
        </div>

        <div className="w-12 h-12 aspect-square">
          <img src={imageCompany} alt={company} />
        </div>
      </div>

      <div className="flex gap-4 items-center mb-2">
        <FontAwesomeIcon icon="fa-location-dot" className="w-4 h-4" />
        <p className="text-sm">{companyCity}</p>
      </div>

      <div className="flex gap-4 items-center mb-2">
        <FontAwesomeIcon icon="fa-clock" className="w-4 h-4" />
        <p className="text-sm">{`${jobTenure}, ${jobType}`}</p>
      </div>

      <div className="flex gap-4 items-center mb-4">
        <FontAwesomeIcon icon="fa-money-bill-wave" className="w-4 h-4" />
        <p className="text-sm">{`${rupiahFormat(salaryMin)} - ${rupiahFormat(
          salaryMax
        )}`}</p>
      </div>

      <Link to={`/job-vacancy/${id}`}>
        <Button className="p-12" small={true}>
          Learn More
        </Button>
      </Link>
    </div>
  );
};

export default CardVacancy;
