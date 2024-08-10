import { useEffect, useState } from "react";
import { CardVacancy, Input } from "../components";
import { readVacancy } from "../api/vacancy";

const Vacancy = () => {
  const [dataVacancy, setDataVacancy] = useState([]);
  const [filteredVacancies, setFilteredVacancies] = useState([]);
  const [filters, setFilters] = useState({
    title: "",
    company_name: "",
    company_city: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value.toLowerCase(),
    }));
  };

  const handleFilter = (e) => {
    e.preventDefault();
    console.log(filters);
    const filtered = dataVacancy.filter(
      (job) =>
        job.title.toLowerCase().includes(filters.title) &&
        job.company_name.toLowerCase().includes(filters.company_name) &&
        job.company_city.toLowerCase().includes(filters.company_city)
    );
    setFilteredVacancies(filtered);
  };

  useEffect(() => {
    readVacancy()
      .then((res) => {
        setDataVacancy(res.data);
        setLoading(false);
        setFilteredVacancies(res.data);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto max-w-screen-xl">
      <section className="mb-60">
        <h1 className="mb-16 text-center text-5xl font-medium">
          Search Your Dream
        </h1>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2 md:gap-y-2 mb-12">
          <Input
            type="text"
            label="Job Title"
            handler={handleFilterChange}
            name="title"
            placeholder="Write a Job"
          />

          <Input
            type="text"
            label="Company"
            handler={handleFilterChange}
            name="company_name"
            placeholder="Company"
          />

          <Input
            type="text"
            label="City"
            handler={handleFilterChange}
            name="company_city"
            placeholder="City"
          />

          <div className="col-span-full">
            <button
              type="submit"
              onClick={handleFilter}
              className="py-4 bg-[#216A80] text-white w-full rounded-xl"
            >
              Search
            </button>
          </div>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <div>Loading..</div>
          ) : (
            filteredVacancies.map((data) => {
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
            })
          )}
        </div>
      </section>
    </div>
  );
};

export default Vacancy;
