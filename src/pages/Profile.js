import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const [password, setPassword] = useState({
    current_password: "",
    new_password: "",
    new_confirm_password: "",
  });
  const dataJson = Cookies.get("profile");
  const dataProfile = JSON.parse(dataJson);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassword((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://dev-example.sanbercloud.com/api/change-password",
        password,
        {
          headers: {
            Authorization: "Bearer" + Cookies.get("token"),
          },
        }
      )
      .then((res) => {
        toast("Password Has Changed");
      })
      .catch((error) => {
        const message = JSON.parse(error.response.data).current_password[0];
        toast(message);
      });
  };

  return (
    <>
      <ToastContainer />
      <h1 className="text-2xl font-bold ">Profile</h1>
      <hr className="md:my-4 lg:my-8" />
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col mb-8 lg:mb-0 md:mr-10 lg:mr-20 ">
          <div className="aspect-square w-40 rounded-full overflow-hidden mb-4">
            <img src={dataProfile.image_url} alt="" />
          </div>
          <h2 className="text-black text-center">{dataProfile.name}</h2>
        </div>

        <div className="md:pl-10 lg:pl-20 md:border-l-2 w-3/4 ">
          <h2 className="font-semibold text-xl mb-4">Data Profile</h2>
          <div className="mb-2 md:mb-8 w-full">
            <label className="md:text-md" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={dataProfile.name}
              disabled
              className="w-full rounded-xl border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#216A80]"
            />
          </div>

          <div className="mb-2 md:mb-8 w-full">
            <label className="md:text-md" htmlFor="created_at">
              Account Created at
            </label>
            <input
              type="text"
              id="created_at"
              name="created_at"
              value={dataProfile.created_at}
              disabled
              className="w-full rounded-xl border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#216A80]"
            />
          </div>
          <hr className="md:my-4 lg:my-8" />

          <h2 className="font-semibold text-xl mb-4">Change Password</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-2 md:mb-8 w-full">
              <label className="md:text-md" htmlFor="current_password">
                Curent Password
              </label>
              <input
                required
                minlength="8"
                type="password"
                id="current_password"
                name="current_password"
                onChange={handleChange}
                className="w-full rounded-xl border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#216A80]"
              />
            </div>

            <div className="mb-2 md:mb-8 w-full">
              <label className="md:text-md" htmlFor="new_password">
                New Password
              </label>
              <input
                required
                minlength="8"
                type="password"
                id="new_password"
                name="new_password"
                onChange={handleChange}
                className="w-full rounded-xl border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#216A80]"
              />
            </div>

            <div className="mb-2 md:mb-8 w-full">
              <label className="md:text-md" htmlFor="new_confirm_password">
                Confirm Password
              </label>
              <input
                required
                minlength="8"
                type="password"
                id="new_confirm_password"
                name="new_confirm_password"
                onChange={handleChange}
                className="w-full rounded-xl border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#216A80]"
              />
            </div>

            <div className="mb-2 md:mb-8 w-full">
              <input
                type="Submit"
                id="password"
                name="password"
                className="py-4 bg-[#216A80] text-white w-full rounded-lg"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
