import { useEffect, useState } from "react";
import { readOneVacancy, updateVacancy } from "../api/vacancy";
import { useParams, useNavigate } from "react-router-dom";

const UpdateJob = () => {
  const navigate = useNavigate("/dashboard");
  const { id } = useParams();
  const [data, setData] = useState({});
  const [field, setField] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: "",
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: "",
    salary_max: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateVacancy(id, field).then((res) => {
      navigate("/dashboard");
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
    setField((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(field);
  };

  useEffect(() => {
    readOneVacancy(id).then((res) => {
      setData(res);
      setField((prev) => ({
        ...res,
      }));
    });
  }, [id]);

  if (!field) return <div>Loading ... </div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Update A Job</h1>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
        <div className="mb-2 md:mb-8">
          <label className="md:text-md" htmlFor="title">
            Job Title
          </label>
          <input
            type="text"
            id="title"
            onChange={handleChange}
            name="title"
            defaultValue={data.title}
            required
            className="w-full rounded-xl border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#216A80] sm:leading-6"
          />
        </div>

        <div className="mb-2 md:mb-8 flex flex-col">
          <label
            htmlFor="job_type"
            className="block font-medium leading-6 text-gray-900"
          >
            Job Type
          </label>
          <div className="mt-2">
            <select
              onChange={handleChange}
              id="job_type"
              name="job_type"
              defaultValue={data.job_type}
              className="block w-full rounded-xl border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#216A80] sm:leading-6"
            >
              <option value="On Site">On Site</option>
              <option value="Work From Home">Work From Home</option>
              <option value="Hybird">Hybird</option>
            </select>
          </div>
        </div>

        <div className="mb-2 md:mb-8 flex flex-col">
          <label htmlFor="job_description">Job Description</label>
          <textarea
            id="job_description"
            name="job_description"
            onChange={handleChange}
            defaultValue={data.job_description}
            required
            className="w-full rounded-xl border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#216A80] sm:leading-6"
          ></textarea>
        </div>

        <div className="mb-2 md:mb-8 flex flex-col">
          <label htmlFor="job_description">Job Qualification</label>
          <textarea
            id="job_description"
            name="job_qualification"
            onChange={handleChange}
            defaultValue={data.job_qualification}
            required
            className="w-full rounded-xl border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#216A80] sm:leading-6"
          ></textarea>
        </div>

        <div className="mb-2 md:mb-8 flex flex-col">
          <label htmlFor="job_tenure">Job Tenure</label>
          <select
            id="job_tenure"
            name="job_tenure"
            onChange={handleChange}
            defaultValue={data.job_tenure}
            className="block w-full rounded-xl border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#216A80] sm:leading-6"
          >
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
            <option value="Full Time">Full Time</option>
          </select>
        </div>

        <div className="mb-2 md:mb-8 flex flex-col">
          <label htmlFor="job_status">Status</label>
          <select
            onChange={handleChange}
            id="job_status"
            name="job_status"
            defaultValue={data.job_status}
            className="block w-full rounded-xl border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#216A80] sm:leading-6"
          >
            <option value="1">Open Recruitement</option>
            <option value="0">Closed</option>
          </select>
        </div>

        <div className="mb-2 md:mb-8">
          <label className="md:text-md" htmlFor="company_name">
            Company
          </label>
          <input
            type="text"
            id="company_name"
            name="company_name"
            onChange={handleChange}
            defaultValue={data.company_name}
            required
            className="w-full rounded-xl border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#216A80] sm:leading-6"
          />
        </div>

        <div className="mb-2 md:mb-8">
          <label className="md:text-md" htmlFor="company_city">
            Location
          </label>
          <input
            type="text"
            id="company_city"
            name="company_city"
            onChange={handleChange}
            defaultValue={data.company_city}
            required
            className="w-full rounded-xl border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#216A80] sm:leading-6"
          />
        </div>

        <div className="mb-2 md:mb-8 col-span-2">
          <label className="md:text-md" htmlFor="company_image_url">
            Url Image Company
          </label>
          <input
            type="text"
            id="company_image_url"
            name="company_image_url"
            onChange={handleChange}
            defaultValue={data.company_image_url}
            required
            className="w-full rounded-xl border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#216A80] sm:leading-6"
          />
        </div>

        <div className="mb-2 md:mb-8">
          <label className="md:text-md" htmlFor="salary_min">
            Salary Min
          </label>
          <input
            type="number"
            id="salary_min"
            name="salary_min"
            onChange={handleChange}
            defaultValue={data.salary_min}
            required
            className="w-full rounded-xl border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#216A80] sm:leading-6"
          />
        </div>

        <div className="mb-2 md:mb-8">
          <label className="md:text-md" htmlFor="salary_max">
            Salary Max
          </label>
          <input
            type="number"
            id="salary_max"
            name="salary_max"
            onChange={handleChange}
            defaultValue={data.salary_max}
            required
            className="w-full rounded-xl border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#216A80] sm:leading-6"
          />
        </div>

        <input
          onClick={handleSubmit}
          type="submit"
          className="text-white p-4 bg-[#216A80] md:col-span-2 rounded-xl"
        />
      </form>
    </div>
  );
};

export default UpdateJob;
