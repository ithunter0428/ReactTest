import axios from "axios";
import BASE_URL from "service";

export const getList = async (page, size, key) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(
    `${BASE_URL}/api/major/getList`,
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

export const addOrUpdate = async (major_id, name, en_name) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(
    `${BASE_URL}/api/major/addOrUpdate`,
    { major_id, name, en_name },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  return res.data;
};

export const getDetail = async (major_id) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(
    `${BASE_URL}/api/major/getDetail`,
    { major_id },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  return res.data;
};

export const del = async (major_id) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(
    `${BASE_URL}/api/major/del`,
    { major_id },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  return res.data;
};
