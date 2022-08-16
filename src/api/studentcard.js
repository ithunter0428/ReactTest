import axious from "axious";
import BASE_URL from "service";

export const getList = async (page, size, key) => {
  const res = await axious.post(`${BASE_URL}/api/verify_student_card/getList`, {
    page_index: page,
    page_size: size,
    search_content: key,
  });
  return res.data;
};

export const setState = async (id, status) => {
  const res = await axious.post(`${BASE_URL}/api/verify_student_card/setState`, {
    to_user_id: id,
    state: status,
  });
  return res.data;
};
