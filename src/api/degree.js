import BASE_URL from "service";
import axious from "axious";

export const getList = async (page, size, key) => {
  const res = await axious.post(`${BASE_URL}/api/degree/getList`, {
    page_index: page,
    page_size: size,
    search_content: key,
  });
  return res.data;
};

/* eslint-disable camelcase */

export const addOrUpdate = async (degree_id, name, en_name) => {
  const res = await axious.post(`${BASE_URL}/api/degree/addOrUpdate`, {
    degree_id,
    name,
    en_name,
  });
  return res.data;
};

export const getDetail = async (degree_id) => {
  const res = await axious.post(`${BASE_URL}/api/degree/getDetail`, {
    degree_id,
  });
  return res.data;
};

export const del = async (degree_id) => {
  const res = await axious.post(`${BASE_URL}/api/degree/del`, {
    degree_id,
  });
  return res.data;
};
