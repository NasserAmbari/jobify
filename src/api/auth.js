import axios from "axios";
import Cookies from "js-cookie";

const login = async ({ email, password }) => {
  try {
    const response = await axios.post(
      "https://dev-example.sanbercloud.com/api/login",
      {
        email: email,
        password: password,
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const register = async (fieldRegister) => {
  try {
    const response = await axios.post(
      "https://dev-example.sanbercloud.com/api/register",
      fieldRegister
    );
    return response.data;
  } catch (error) {
    console.log("disini");
    console.error(error);
  }
};

const changePassword = async (password) => {
  try {
    const response = await axios.post(
      "https://dev-example.sanbercloud.com/api/change-password",
      password,
      {
        headers: {
          Authorization: "Bearer" + Cookies.get("token"),
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { login, register, changePassword };
