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

// @mui material components
// import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
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

import profilePicture from "assets/images/team-3.jpg";

function SchoolForm() {
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
                    <MDBadge color="info">新建</MDBadge>
                  </MDBox>
                  {/* School Id */}
                  <MDBox mb={2}>
                    <Grid container spaing={2} mt={2} mb={3}>
                      <Grid item>
                        <MDTypography variant="h6" fontWeight="regular" color="text">
                          用户名:&nbsp;&nbsp;&nbsp;
                        </MDTypography>
                      </Grid>
                      <Grid item sm={8}>
                        <MDTypography variant="h6" fontWeight="medium" color="text">
                          Chris
                        </MDTypography>
                      </Grid>
                    </Grid>
                  </MDBox>
                  {/*  */}
                  {/* Image */}
                  <MDBox mb={2}>
                    <Grid container spaing={2}>
                      <Grid item>
                        <MDTypography variant="h6" fontWeight="regular" color="text">
                          头像:&nbsp;&nbsp;&nbsp;
                        </MDTypography>
                      </Grid>
                      <Grid item sm={3}>
                        <MDBox
                          component="img"
                          src={profilePicture}
                          alt="Product Image"
                          shadow="lg"
                          width="100%"
                        />
                      </Grid>
                    </Grid>
                  </MDBox>
                  {/*  */}
                  <MDBox mb={2}>
                    <MDInput type="text" label="用户名" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="password" label="登陆密码" fullWidth />
                  </MDBox>
                  <MDBox mt={4} mb={1}>
                    <MDButton variant="gradient" color="info" fullWidth>
                      新建
                    </MDButton>
                  </MDBox>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default SchoolForm;
