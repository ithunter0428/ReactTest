import axious from "axious";
import BASE_URL from "service";

export const getList = async (page, size, key, status) => {
  const res = await axious.post(`${BASE_URL}/api/tools_user/getList`, {
    page_index: page,
    page_size: size,
    search_content: key,
    state: status,
  });
  return res.data;
};

export const addUser = async (userid, password) => {
  const res = await axious.post(`${BASE_URL}/api/tools_user/add`, {
    username: userid,
    pwd: password,
  });
  return res.data;
};

export const setState = async (id, status) => {
  const res = await axious.post(`${BASE_URL}/api/tools_user/setState`, {
    tools_user_id: id,
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

export const resetPwd = async (id) => {
  const res = await axious.post(`${BASE_URL}/api/tools_user/resetPwd`, {
    tools_user_id: id,
  });
  return res.data;
};
