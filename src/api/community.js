import axious from "axious";
import BASE_URL from "service";

export const getList = async (page, size, key, status) => {
  const res = await axious.post(`${BASE_URL}/api/community/getList`, {
    page_index: page,
    page_size: size,
    search_content: key,
    state: status,
  });
  return res.data;
};

export const setState = async (id, status) => {
  const res = await axious.post(`${BASE_URL}/api/community/setState`, {
    community_id: id,
    state: status,
  });
  return res.data;
};

export const getUserList = async (page, size, key, id) => {
  const res = await axious.post(`${BASE_URL}/api/community/getCommunityUserList`, {
    page_index: page,
    page_size: size,
    search_content: key,
    community_id: id,
  });
  return res.data;
};

export const getDetail = async (id) => {
  const res = await axious.post(`${BASE_URL}/api/community/getDetail`, {
    community_id: id,
  });
  return res.data;
};
