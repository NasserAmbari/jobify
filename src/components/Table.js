import { useContext, useEffect, useState } from "react";
import { readVacancy } from "../api/vacancy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DashboardContext } from "../context/dashboard";
import { rupiahFormat, timeAgo, JobStatus } from "../utils";
import { deleteVacancy } from "../api/vacancy";
import { useNavigate } from "react-router-dom";
import { Input } from "../components";
import { ToastContainer } from "react-toastify";

const Table = () => {
  const navigate = useNavigate();
  const { isFetch, setIsFetch } = useContext(DashboardContext);

  const [data, setData] = useState();
  const [filtered, setFiltered] = useState();
  const [filters, setFilters] = useState({
    title: "",
    company_name: "",
    company_city: "",
  });

  const handleDelete = (id) => {
    deleteVacancy(id).then((response) => {
      setIsFetch(true);
    });
  };

  const handleUpdate = (id) => {
    navigate(`/dashboard/update-a-job/${id}`);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value.toLowerCase(),
    }));
  };

  const handleFilter = (e) => {
    e.preventDefault();
    const filtered = data.filter(
      (job) =>
        job.title.toLowerCase().includes(filters.title) &&
        job.company_name.toLowerCase().includes(filters.company_name) &&
        job.company_city.toLowerCase().includes(filters.company_city)
    );
    setFiltered(filtered);
  };

  useEffect(() => {
    readVacancy()
      .then((res) => {
        setFiltered(res.data);
        setData(res.data);
        setIsFetch(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [isFetch]);

  if (!data) return <div>Kosong</div>;

  return (
    <>
      <ToastContainer />
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

      <div className="overflow-x-auto text-xs">
        <table className="min-w-full bg-white border border-gray-200 align-top">
          <thead>
            <tr className="text-left bg-gray-100">
              <th className="py-2 px-4 border">Title</th>
              <th className="py-2 px-4 border">Company</th>
              <th className="py-2 px-4 border">City</th>
              <th className="py-2 px-4 border">Description</th>
              <th className="py-2 px-4 border">Qualification</th>
              <th className="py-2 px-4 border">Salary</th>
              <th className="py-2 px-4 border">Status</th>
              <th className="py-2 px-4 border">Detail</th>
              <th className="py-2 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="p-2 border">{item.title}</td>
                <td className="p-2 border text-">{item.company_name}</td>
                <td className="p-2 border text-">{item.company_city}</td>
                <td className="p-2 border ">
                  <div className="line-clamp-2">{item.job_description}</div>
                </td>
                <td className="p-2 border">
                  <div className="line-clamp-2">{item.job_qualification}</div>
                </td>
                <td className="p-2 border">{`${rupiahFormat(
                  item.salary_min
                )} - ${rupiahFormat(item.salary_max)}`}</td>
                <td className="p-2 border text-xs">
                  <span
                    className={`inline-flex items-center rounded-md 
                    ${
                      item.job_status
                        ? "bg-red-50 text-red-700"
                        : "bg-green-50 text-green-700"
                    } 
                    px-2 py-1 text-xs font-medium ring-1 ring-inset ring-purple-700/10`}
                  >
                    {JobStatus(item.job_status)}
                  </span>
                </td>

                <td className="py-2 px-4 border">
                  <span className="inline-flex items-center rounded-md bg-purple-50 p-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                    {item.job_tenure}
                  </span>
                  <span className="inline-flex items-center rounded-md bg-blue-50 p-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                    {item.job_type}
                  </span>
                  <span className="inline-flex items-center rounded-md bg-yellow-50 p-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                    {timeAgo(item.created_at)}
                  </span>
                </td>
                <td className="p-2 border">
                  <div className="flex justify-evenly gap-4">
                    <button
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                    >
                      <FontAwesomeIcon
                        icon="fa-trash"
                        size="xl"
                        color="#991b1b"
                      />
                    </button>
                    <button
                      onClick={() => {
                        handleUpdate(item.id);
                      }}
                    >
                      <FontAwesomeIcon
                        icon="fa-rotate"
                        size="xl"
                        color="#166534"
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
