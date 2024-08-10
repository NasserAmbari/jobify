import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { readOneVacancy, readVacancy } from "../api/vacancy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { rupiahFormat, timeAgo, JobStatus } from "../utils";
import { CardVacancy } from "../components";

const VacancyDetail = () => {
  const { id } = useParams();
  const [vacancy, setVacancy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataVacancy, setDataVacancy] = useState([]);

  useEffect(() => {
    setLoading(true);
    readOneVacancy(id)
      .then((res) => {
        setVacancy(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

    readVacancy()
      .then((res) => {
        setDataVacancy(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto max-w-screen-xl">
      {loading ? (
        <div>Loading ...</div>
      ) : (
        <section>
          <div className="flex flex-col mb-8">
            <div className="flex justify-between md:items-start mb-6 md:mb-12">
              <div className="flex flex-col">
                <h1 className="text-xl md:text-7xl font-medium md:mb-4">
                  {vacancy.title}
                </h1>
                <p className="text-md md:text-4xl">{vacancy.company_name}</p>
              </div>
              <div className="w-12 md:w-40 aspect-square">
                <img
                  src={vacancy.company_image_url}
                  alt={vacancy.company_name}
                />
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <div className="flex gap-4 items-center mb-2">
                <FontAwesomeIcon
                  icon="fa-location-dot"
                  className="w-4 h-4 md:w-8 md:h-8"
                />
                <p className="text-sm md:text-xl">{vacancy.company_name}</p>
              </div>

              <div className="flex gap-4 items-center mb-2">
                <FontAwesomeIcon
                  icon="fa-money-bill-wave"
                  className="w-4 h-4 md:w-6 md:h-6"
                />
                <p className="text-sm md:text-xl">{`${rupiahFormat(
                  vacancy.salary_min
                )} - ${rupiahFormat(vacancy.salary_max)}`}</p>
              </div>
            </div>

            <div className="flex gap-2 flex-wrap">
              <span
                class={`inline-flex items-center rounded-md 
                    ${
                      vacancy.job_status
                        ? "bg-red-50 text-red-700"
                        : "bg-green-50 text-green-700"
                    } 
                    px-2 py-1 text-xs font-medium ring-1 ring-inset ring-purple-700/10`}
              >
                {JobStatus(vacancy.job_status)}
              </span>

              <span class="md:text-lg inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                {vacancy.job_tenure}
              </span>
              <span class="md:text-lg inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                {vacancy.job_type}
              </span>
              <span class="md:text-lg inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                {timeAgo(vacancy.created_at)}
              </span>
            </div>
          </div>

          <hr className="mb-8" />

          <div className="mb-8">
            <h3 className="text-xl md:text-3xl font-medium mb-4">
              Job Description
            </h3>
            <p className="text-sm md:text-xl">{vacancy.job_description}</p>
          </div>

          <hr className="mb-8" />

          <div className="mb-8">
            <h3 className="text-xl md:text-3xl font-medium mb-4">
              Job Qualification
            </h3>
            <p className="text-sm md:text-xl">{vacancy.job_qualification}</p>
          </div>

          <hr className="mb-8" />
        </section>
      )}

      <section className="mb-20">
        <h2 className="text-4xl font-medium mb-12">More Job Vacancy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataVacancy.map((data) => {
            return (
              <CardVacancy
                key={data.id}
                id={data.id}
                title={data.title}
                company={data.company}
                imageCompany={data.company_image_url}
                jobTenure={data.job_tenure}
                companyCity={data.company_city}
                salaryMax={data.salary_max}
                salaryMin={data.salary_min}
                jobType={data.job_type}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default VacancyDetail;
