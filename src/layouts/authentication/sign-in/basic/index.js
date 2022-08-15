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

import { useState } from "react";

// react-router-dom components
import { useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDBadge from "components/MDBadge";

// Context
import { useMaterialUIController, setUserName } from "context";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import login from "api/session";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function Basic() {
  const [controller, dispatch] = useMaterialUIController();
  const [rememberMe, setRememberMe] = useState(false);
  // const [username, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [userid, setUserId] = useState("");
  const [password, setPassWord] = useState("");

  const navigate = useNavigate();

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleSignIn = async () => {
    const data = await login(userid, password);
    // Login Succes
    if (data.res_code === 1) {
      localStorage.setItem("token", data.msg.token);
      // Set Current UserName
      if (controller.username !== data.msg.username) {
        setUserName(dispatch, data.msg.username);
      }
      navigate("/mainpage");
    }
    // Login Failed
    else {
      setMsg(data.msg);
    }
  };
  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2} textAlign="center">
              <MDBadge color="info">半区管理后台</MDBadge>
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="用户名"
                text={userid}
                onChange={(e) => setUserId(e.target.value)}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="登陆密码"
                text={password}
                onChange={(e) => setPassWord(e.target.value)}
                fullWidth
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;记住密码
              </MDTypography>
            </MDBox>
            {msg !== "" && (
              <MDTypography color="primary" size="small" fontWeight="regular">
                {msg}
              </MDTypography>
            )}
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" onClick={handleSignIn} fullWidth>
                登入
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
