import axios from "axios";
import Cookies from "js-cookie";

const readVacancy = async () => {
  try {
    const response = await axios.get(process.env.REACT_APP_API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const readOneVacancy = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const createVacancy = async (field) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}`,
      field,
      { headers: { Authorization: "Bearer " + Cookies.get("token") } }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const deleteVacancy = async (id) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_BASE_URL}/${id}`,
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

const updateVacancy = async (id, field) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API_BASE_URL}/${id}`,
      field,
      { headers: { Authorization: "Bearer " + Cookies.get("token") } }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export {
  readVacancy,
  readOneVacancy,
  createVacancy,
  deleteVacancy,
  updateVacancy,
};
