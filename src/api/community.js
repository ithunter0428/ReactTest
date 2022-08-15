import axios from "axios";
import BASE_URL from "service";

export const getList = async (page, size, key, status) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(
    `${BASE_URL}/api/community/getList`,
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

export const getUserList = async (page, size, key, id) => {
  const token = localStorage.getItem("token");
  const res = await axios.post(
    `${BASE_URL}/api/community/getCommunityUserList`,
    { page_index: page, page_size: size, search_content: key, community_id: id },
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
  const res = await axios.post(
    `${BASE_URL}/api/community/getDetail`,
    { community_id: id },
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
  const res = await axios.post(
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
