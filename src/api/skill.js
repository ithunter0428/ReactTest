import axios from "axios";
import BASE_URL from "service";

export const getList = async (page, size, key) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(
    `${BASE_URL}/api/skill/getList`,
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

export const addOrUpdate = async (skill_id, name, en_name, img_url) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(
    `${BASE_URL}/api/skill/addOrUpdate`,
    { skill_id, name, en_name, img_url },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  return res.data;
};

export const getDetail = async (skill_id) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(
    `${BASE_URL}/api/skill/getDetail`,
    { skill_id },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  return res.data;
};

export const del = async (skill_id) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(
    `${BASE_URL}/api/skill/del`,
    { skill_id },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  return res.data;
};
