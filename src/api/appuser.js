import BASE_URL from "service";
import axious from "axious";

export const getList = async (page, size, key, status) => {
  const token = localStorage.getItem("token");
  const res = await axious.post(
    `${BASE_URL}/api/app_user/getList`,
    { page_index: page, page_size: size, search_content: key, state: status },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  return res.data;
};

export const getDetail = async (id) => {
  const token = localStorage.getItem("token");
  const res = await axious.post(
    `${BASE_URL}/api/app_user/getDetail`,
    { app_user_id: id },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  return res.data;
};

export const setState = async (id, status) => {
  const token = localStorage.getItem("token");
  const res = await axious.post(
    `${BASE_URL}/api/app_user/setState`,
    { app_user_id: id, state: status },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  return res.data;
};

export const changePwd = async (oldPass, newPass) => {
  const token = localStorage.getItem("token");
  const res = await axious.post(
    `${BASE_URL}/api/tools_user/setMyPwd`,
    { old_pwd: oldPass, new_pwd: newPass },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  return res.data;
};
