/**
=========================================================
* Material Dashboard 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { v4 as uuid } from "uuid";
import OSS from "ali-oss";
import MDBox from "components/MDBox";
import axios from "axios";
import BASE_URL from "service";

function MainPage() {
  const upload = async () => {
    const data = document.getElementById("file").files[0];
    const res = await axios.post(`${BASE_URL}/api/oss/getSTS`, {});
    const client = new OSS({
      accessKeyId: res.data.msg.AccessKeyId,
      accessKeySecret: res.data.msg.AccessKeySecret,
      // 从STS服务获取的安全令牌（SecurityToken）。
      stsToken: res.data.msg.SecurityToken,
      // 填写Bucket名称。
      bucket: res.data.msg.Bucket,
    });
    const url = `example/${uuid()}.jpg`;
    const result = await client.put(url, data);
    console.log(url);
    console.log(result);
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox>
        <input type="file" id="file" />
        <button type="button" onClick={upload}>
          upload
        </button>
      </MDBox>
    </DashboardLayout>
  );
}

export default MainPage;
