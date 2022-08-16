import axious from "axious";
import BASE_URL from "service";

export const getList = async (page, size, key, status) => {
  const res = await axious.post(`${BASE_URL}/api/posts/getList`, {
    page_index: page,
    page_size: size,
    search_content: key,
    state: status,
  });
  return res.data;
};

export const getDetail = async (id) => {
  const res = await axious.post(`${BASE_URL}/api/posts/getDetail`, {
    post_id: id,
  });
  return res.data;
};

export const setState = async (id, status) => {
  const res = await axious.post(`${BASE_URL}/api/posts/setState`, {
    post_id: id,
    state: status,
  });
  return res.data;
};
