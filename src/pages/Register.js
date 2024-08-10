import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  let navigate = useNavigate();
  const [registerField, setRegisterField] = useState({
    email: "",
    password: "",
    name: "",
    image_url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterField((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://dev-example.sanbercloud.com/api/register", registerField)
      .then((res) => {
        navigate("/login");
      })
      .catch((error) => {
        toast(error.response.data.error);
      });
  };

  return (
    <div className="container mx-auto max-w-screen-xl">
      <ToastContainer />
      <section className="flex w-4/5 md:w-1/2 shadow-md p-8 flex-col rounded-lg mx-auto">
        <h1 className="text-5xl mb-8">Register</h1>
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-2 md:mb-8">
            <label className="md:text-md" for="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              onChange={handleChange}
              name="email"
              placeholder="Your Email"
              required
              className="w-full rounded-xl border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#216A80] sm:leading-6"
            />
          </div>

          <div className="mb-2 md:mb-8">
            <label className="md:text-md" for="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={handleChange}
              name="password"
              placeholder="Your Password"
              required
              minLength={8}
              className="w-full rounded-xl border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#216A80] sm:leading-6"
            />
          </div>

          <div className="mb-2 md:mb-8">
            <label className="md:text-md" for="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              onChange={handleChange}
              name="name"
              placeholder="Your name"
              required
              className="w-full rounded-xl border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#216A80] sm:leading-6"
            />
          </div>

          <div className="mb-2 md:mb-8">
            <label className="md:text-md" for="image_url">
              Url Image
            </label>
            <input
              type="text"
              id="image_url"
              onChange={handleChange}
              name="image_url"
              placeholder="Your Image"
              required
              className="w-full rounded-xl border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#216A80] sm:leading-6"
            />
          </div>

          <button
            type="submit"
            className="py-4 bg-[#216A80] text-white w-full rounded-lg"
          >
            Register
          </button>
        </form>

        <hr className="mb-8" />

        <div className="flex flex-col text-center text-sm">
          <p>Already have account?</p>
          <Link to="/login">
            <p className="text-[#216A80]">Login here</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Register;
