import BASE_URL from "service";
import axious from "axious";

export const getList = async (page, size, key) => {
  const res = await axious.post(`${BASE_URL}/api/skill/getList`, {
    page_index: page,
    page_size: size,
    search_content: key,
  });
  return res.data;
};

/* eslint-disable camelcase */

export const addOrUpdate = async (skill_id, name, en_name, img_url) => {
  const res = await axious.post(`${BASE_URL}/api/skill/addOrUpdate`, {
    skill_id,
    name,
    en_name,
    img_url,
  });
  return res.data;
};

export const getDetail = async (skill_id) => {
  const res = await axious.post(`${BASE_URL}/api/skill/getDetail`, {
    skill_id,
  });
  return res.data;
};

export const del = async (skill_id) => {
  const res = await axious.post(`${BASE_URL}/api/skill/del`, {
    skill_id,
  });
  return res.data;
};
