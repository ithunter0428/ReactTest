import axios from "axios";
import BASE_URL from "service";

export const getList = async (page, size, key) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(
    `${BASE_URL}/api/school/getList`,
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

export const addOrUpdate = async (school_id, name, en_name, img_url) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(
    `${BASE_URL}/api/school/addOrUpdate`,
    { school_id, name, en_name, img_url },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  return res.data;
};

export const getDetail = async (school_id) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(
    `${BASE_URL}/api/school/getDetail`,
    { school_id },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  return res.data;
};

export const del = async (school_id) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(
    `${BASE_URL}/api/school/del`,
    { school_id },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  return res.data;
};
