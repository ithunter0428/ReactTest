import axious from "axious";
import BASE_URL from "service";

export const getList = async (page, size, key) => {
  const token = localStorage.getItem("token");
  const res = await axious.post(
    `${BASE_URL}/api/verify_student_card/getList`,
    { page_index: page, page_size: size, search_content: key },
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
    `${BASE_URL}/api/verify_student_card/setState`,
    { to_user_id: id, state: status },
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
