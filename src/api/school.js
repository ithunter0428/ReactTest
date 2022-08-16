import BASE_URL from "service";
import axious from "axious";

export const getList = async (page, size, key) => {
  const res = await axious.post(`${BASE_URL}/api/school/getList`, {
    page_index: page,
    page_size: size,
    search_content: key,
  });
  return res.data;
};

/* eslint-disable camelcase */

export const addOrUpdate = async (school_id, name, en_name, img_url) => {
  const res = await axious.post(`${BASE_URL}/api/school/addOrUpdate`, {
    school_id,
    name,
    en_name,
    img_url,
  });
  return res.data;
};

export const getDetail = async (school_id) => {
  const res = await axious.post(`${BASE_URL}/api/school/getDetail`, {
    school_id,
  });
  return res.data;
};

export const del = async (school_id) => {
  const res = await axious.post(`${BASE_URL}/api/school/del`, {
    school_id,
  });
  return res.data;
};
