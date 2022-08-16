import BASE_URL from "service";
import axious from "axious";

export const getList = async (page, size, key) => {
  const res = await axious.post(`${BASE_URL}/api/major/getList`, {
    page_index: page,
    page_size: size,
    search_content: key,
  });
  return res.data;
};

/* eslint-disable camelcase */

export const addOrUpdate = async (major_id, name, en_name) => {
  const res = await axious.post(`${BASE_URL}/api/major/addOrUpdate`, {
    major_id,
    name,
    en_name,
  });
  return res.data;
};

export const getDetail = async (major_id) => {
  const res = await axious.post(`${BASE_URL}/api/major/getDetail`, {
    major_id,
  });
  return res.data;
};

export const del = async (major_id) => {
  const res = await axious.post(`${BASE_URL}/api/major/del`, {
    major_id,
  });
  return res.data;
};
