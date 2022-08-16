import BASE_URL from "service";
import axious from "axious";

export const getList = async (page, size, key, status) => {
  const res = await axious.post(`${BASE_URL}/api/app_user/getList`, {
    page_index: page,
    page_size: size,
    search_content: key,
    state: status,
  });
  return res.data;
};

export const getDetail = async (id) => {
  const res = await axious.post(`${BASE_URL}/api/app_user/getDetail`, {
    app_user_id: id,
  });
  return res.data;
};

export const setState = async (id, status) => {
  const res = await axious.post(`${BASE_URL}/api/app_user/setState`, {
    app_user_id: id,
    state: status,
  });
  return res.data;
};

export const changePwd = async (oldPass, newPass) => {
  const res = await axious.post(`${BASE_URL}/api/tools_user/setMyPwd`, {
    old_pwd: oldPass,
    new_pwd: newPass,
  });
  return res.data;
};
