import axios from "axios";

const authAxios = axios.create();

authAxios.interceptors.request.use((config) => {
  // add token to request headers
  const headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };
  return { ...config, headers };
});

authAxios.interceptors.response.use((response) => {
  if (response.data.res_code === -995 || response.data.res_code === -999) {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.href = "/authentication/sign-in";
  }
  return response;
});

export default authAxios;
