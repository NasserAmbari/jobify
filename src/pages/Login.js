import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  let navigate = useNavigate();

  const [loginField, setLoginField] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginField((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://dev-example.sanbercloud.com/api/login", loginField)
      .then((res) => {
        Cookies.set("token", res.data.token, { expires: 1 });
        Cookies.set("profile", JSON.stringify(res.data.user), { expires: 1 });
        navigate("/dashboard");
      })
      .catch((error) => {
        toast(error.response.data.error);
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="container mx-auto max-w-screen-xl">
        <section className="flex w-4/5 md:w-1/2 shadow-md p-8 flex-col rounded-xl mx-auto">
          <h1 className="text-5xl mb-8">Sign In</h1>
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="mb-2 md:mb-8">
              <label className="md:text-md" htmlFor="email">
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
              <label className="md:text-md" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={handleChange}
                name="password"
                placeholder="Your Password"
                required
                className="w-full rounded-xl border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#216A80] sm:leading-6"
              />
            </div>

            <input
              type="submit"
              className="py-4 bg-[#216A80] text-white w-full rounded-xl"
            ></input>
          </form>

          <hr className="mb-8" />

          <div className="flex flex-col text-center text-sm">
            <p>Not registered yet?</p>
            <Link to="/register">
              <p className="text-[#216A80]">Create an account</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
