import axios from "axios";
import BASE_URL from "service";

export const getList = async (page, size, key) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(
    `${BASE_URL}/api/hobby/getList`,
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

export const addOrUpdate = async (hobby_id, name, en_name, img_url) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(
    `${BASE_URL}/api/hobby/addOrUpdate`,
    { hobby_id, name, en_name, img_url },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  return res.data;
};

export const getDetail = async (hobby_id) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(
    `${BASE_URL}/api/hobby/getDetail`,
    { hobby_id },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  return res.data;
};

export const del = async (hobby_id) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(
    `${BASE_URL}/api/hobby/del`,
    { hobby_id },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  return res.data;
};
