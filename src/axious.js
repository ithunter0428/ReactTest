import axios from "axios";

const authAxios = axios.create();

authAxios.interceptors.response.use((response) => {
  if (response.data.res_code === -995) window.location.href = "/authentication/sign-in";
  return response;
});

export default authAxios;
