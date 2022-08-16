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
import { useNavigate } from "react-router-dom";
// @mui material components
// import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// import Autocomplete from "@mui/material/Autocomplete";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDBadge from "components/MDBadge";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// API
import { changePwd } from "api/tooluser";

function UserForm() {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [open, setOpen] = useState(false);
  const handleSubmit = async () => {
    const data = await changePwd(oldPass, newPass);
    // Login Succes
    if (data.res_code === 1) {
      setOpen(true);
    }
    // Login Failed
    else {
      setMsg(data.msg);
    }
  };
  // Dialog
  const handleDelete = () => {
    setOpen(false);
    navigate(-1);
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox px={1} width="100%" height="100vh" mx="auto" my={15}>
        <Grid container spacing={1} justifyContent="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MDBox pt={4} pb={3} px={3}>
                <MDBox component="form" role="form">
                  <MDBox mb={2} textAlign="center">
                    <MDBadge color="info">更改密码</MDBadge>
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput
                      type="password"
                      label="当前密码"
                      value={oldPass}
                      onChange={(e) => setOldPass(e.target.value)}
                      fullWidth
                    />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput
                      type="password"
                      label="新密码"
                      value={newPass}
                      onChange={(e) => setNewPass(e.target.value)}
                      fullWidth
                    />
                  </MDBox>
                  {msg !== "" && (
                    <MDTypography color="primary" size="small" fontWeight="regular">
                      {msg}
                    </MDTypography>
                  )}
                  <MDBox mt={4} mb={1}>
                    <MDButton variant="gradient" color="info" onClick={handleSubmit} fullWidth>
                      改变
                    </MDButton>
                  </MDBox>
                  <Dialog
                    open={open}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    maxWidth="sm"
                    fullWidth
                  >
                    <DialogTitle id="alert-dialog-title">成功</DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        您的密码已成功更改。
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <MDButton onClick={handleDelete}>好的</MDButton>
                    </DialogActions>
                  </Dialog>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default UserForm;
