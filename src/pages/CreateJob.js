import { useState } from "react";
import { createVacancy } from "../api/vacancy";
import { useNavigate } from "react-router-dom";

const CreateJob = () => {
  const navigate = useNavigate();
  const [field, setField] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "On Site",
    job_tenure: "Contract",
    job_status: "1",
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: "",
    salary_max: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setField((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createVacancy(field).then((res) => {
      navigate("/dashboard");
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create Job</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-4"
      >
        <div className="mb-2 md:mb-8 w-full">
          <label className="md:text-md" htmlFor="title">
            Job Title
          </label>
          <input
            type="text"
            id="title"
            onChange={handleChange}
            name="title"
            required
            className="w-full rounded-xl border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#216A80]"
          />
        </div>

        <div className="mb-2 md:mb-8">
          <label htmlFor="job_type">Job Type</label>
          <select
            onChange={handleChange}
            id="job_type"
            name="job_type"
            className="block w-full rounded-xl border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#216A80]"
          >
            <option selected value="On Site">
              On Site
            </option>
            <option value="Work From Home">Work From Home</option>
            <option value="Hybird">Hybird</option>
          </select>
        </div>

        <div className="mb-2 md:mb-8">
          <label htmlFor="job_description">Job Description</label>
          <textarea
            id="job_description"
            name="job_description"
            onChange={handleChange}
            required
            className="w-full rounded-xl border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#216A80] sm:leading-6"
          ></textarea>
        </div>

        <div className="mb-2 md:mb-8">
          <label htmlFor="job_description">Job Qualification</label>
          <textarea
            id="job_description"
            name="job_qualification"
            onChange={handleChange}
            required
            className="w-full rounded-xl border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#216A80] sm:leading-6"
          ></textarea>
        </div>

        <div className="mb-2 md:mb-8 ">
          <label htmlFor="job_tenure">Job Tenure</label>
          <select
            id="job_tenure"
            name="job_tenure"
            onChange={handleChange}
            defaultValue="Contract"
            className="block w-full rounded-xl border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#216A80] sm:leading-6"
          >
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
            <option value="Full Time">Full Time</option>
          </select>
        </div>

        <div className="mb-2 md:mb-8">
          <label htmlFor="job_status">Status</label>
          <select
            onChange={handleChange}
            id="job_status"
            name="job_status"
            defaultValue="1"
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
            required
            className="w-full rounded-xl border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#216A80] sm:leading-6"
          />
        </div>

        <input
          type="submit"
          className="text-white p-4 bg-[#216A80] md:col-span-2 rounded-xl"
        />
      </form>
    </div>
  );
};

export default CreateJob;
