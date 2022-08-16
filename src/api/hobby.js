import BASE_URL from "service";
import axious from "axious";

export const getList = async (page, size, key) => {
  const res = await axious.post(`${BASE_URL}/api/hobby/getList`, {
    page_index: page,
    page_size: size,
    search_content: key,
  });
  return res.data;
};

/* eslint-disable camelcase */

export const addOrUpdate = async (hobby_id, name, en_name, img_url) => {
  const res = await axious.post(`${BASE_URL}/api/hobby/addOrUpdate`, {
    hobby_id,
    name,
    en_name,
    img_url,
  });
  return res.data;
};

export const getDetail = async (hobby_id) => {
  const res = await axious.post(`${BASE_URL}/api/hobby/getDetail`, {
    hobby_id,
  });
  return res.data;
};

export const del = async (hobby_id) => {
  const res = await axious.post(`${BASE_URL}/api/hobby/del`, {
    hobby_id,
  });
  return res.data;
};
