import axios from "axios";
import BASE_URL from "service";

export const getList = async (page, size, key) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(
    `${BASE_URL}/api/degree/getList`,
    { page_index: page, page_size: size, search_content: key },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  return res.data;
};

/* eslint-disable camelcase */

export const addOrUpdate = async (degree_id, name, en_name) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(
    `${BASE_URL}/api/degree/addOrUpdate`,
    { degree_id, name, en_name },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  return res.data;
};

export const getDetail = async (degree_id) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(
    `${BASE_URL}/api/degree/getDetail`,
    { degree_id },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  return res.data;
};

export const del = async (degree_id) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(
    `${BASE_URL}/api/degree/del`,
    { degree_id },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  return res.data;
};
