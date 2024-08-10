import axios from "axios";
import { API_VACANCY_ROUTE } from "../constants/apiRoute";
import Cookies from "js-cookie";

const readVacancy = async () => {
  try {
    const response = await axios.get(API_VACANCY_ROUTE.GET_VACANCY);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const readOneVacancy = async (id) => {
  try {
    const response = await axios.get(
      `${API_VACANCY_ROUTE.GET_ONE_VACANCY + id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const createVacancy = async (field) => {
  try {
    console.log(field);
    const response = await axios.post(
      `${API_VACANCY_ROUTE.CREATE_VACANCY}`,
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
      `${"https://dev-example.sanbercloud.com/api/job-vacancy/" + id}`,
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
    console.log({ id, field });
    const response = await axios.put(
      `${API_VACANCY_ROUTE.UPDATE_VACANCY + id}`,
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
