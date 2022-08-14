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

import { useNavigate } from "react-router-dom";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
// import Autocomplete from "@mui/material/Autocomplete";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import Divider from "@mui/material/Divider";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import UserTable from "layouts/community/details/table";
import profilePicture from "assets/images/team-3.jpg";

function CommunityDetails() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox my={3}>
        <Card>
          <MDBox p={3} lineHeight={1}>
            <MDBox mt={1}>
              {/* Back */}
              <Grid item xs={12} md={12} sx={{ textAlign: "right" }} mb={2} mr={2}>
                <MDButton variant="outlined" color="dark" onClick={() => navigate(-1)}>
                  <Icon>arrow_left</Icon>&nbsp; 返回
                </MDButton>
              </Grid>
              <MDBox mt={1}>
                <Grid container spacing={3} mb={3}>
                  {/* CommunityId */}
                  <Grid item sm={1}>
                    <MDTypography variant="caption" fontWeight="regular" color="text">
                      社区ID :&nbsp;&nbsp;&nbsp;
                    </MDTypography>
                  </Grid>
                  <Grid item sm={3}>
                    <MDTypography variant="caption" fontWeight="medium">
                      1
                    </MDTypography>
                  </Grid>
                </Grid>
                {/*  */}
                <Grid contrainer spacing={3} mb={3}>
                  <Grid item sm={4}>
                    {/* Image */}
                    <Grid container spaing={2}>
                      <Grid item sm={3}>
                        <MDTypography variant="caption" fontWeight="regular" color="text">
                          图标:&nbsp;&nbsp;&nbsp;
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
                  </Grid>
                </Grid>
                {/*  */}
                <Grid container spacing={3} mb={3}>
                  {/*  */}
                  <Grid item sm={4}>
                    {/* Name */}
                    <Grid container spaing={2} mt={2}>
                      <Grid item sm={3}>
                        <MDTypography variant="caption" fontWeight="regular" color="text">
                          名称:&nbsp;&nbsp;&nbsp;
                        </MDTypography>
                      </Grid>
                      <Grid item sm={9}>
                        <MDTypography variant="caption" fontWeight="medium" color="text">
                          认证失败 | 未认证 | 认证中
                        </MDTypography>
                      </Grid>
                    </Grid>
                    {/* Name */}
                    <Grid container spaing={2} mt={2}>
                      <Grid item sm={3}>
                        <MDTypography variant="caption" fontWeight="regular" color="text">
                          状态:&nbsp;&nbsp;&nbsp;
                        </MDTypography>
                      </Grid>
                      <Grid item sm={9}>
                        <MDTypography variant="caption" fontWeight="medium" color="text">
                          是 | 否
                        </MDTypography>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/*  */}
                  <Grid item sm={4}>
                    {/* Name */}
                    <Grid container spaing={2} mt={2}>
                      <Grid item sm={3}>
                        <MDTypography variant="caption" fontWeight="regular" color="text">
                          简介:&nbsp;&nbsp;&nbsp;
                        </MDTypography>
                      </Grid>
                      <Grid item sm={9}>
                        <MDTypography variant="caption" fontWeight="medium" color="text">
                          认证失败 | 未认证 | 认证中
                        </MDTypography>
                      </Grid>
                    </Grid>
                    {/* Name */}
                    <Grid container spaing={2} mt={2}>
                      <Grid item sm={3}>
                        <MDTypography variant="caption" fontWeight="regular" color="text">
                          创建人:&nbsp;&nbsp;&nbsp;
                        </MDTypography>
                      </Grid>
                      <Grid item sm={9}>
                        <MDTypography variant="caption" fontWeight="medium" color="text">
                          是 | 否
                        </MDTypography>
                      </Grid>
                    </Grid>
                    {/*  */}
                    <Grid container spaing={2} mt={2}>
                      <Grid item sm={3}>
                        <MDTypography variant="caption" fontWeight="regular" color="text">
                          创建时间:&nbsp;&nbsp;&nbsp;
                        </MDTypography>
                      </Grid>
                      <Grid item sm={9}>
                        <MDTypography variant="caption" fontWeight="medium" color="text">
                          北京
                        </MDTypography>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/*  */}
                  <Grid item sm={4} />
                </Grid>
                {/*  */}
                <Divider />
                {/* Community User Table */}
                <MDTypography variant="caption" fontWeight="medium" color="text">
                  社区用户:&nbsp;&nbsp;&nbsp;
                </MDTypography>
                <UserTable />
              </MDBox>
            </MDBox>
          </MDBox>
        </Card>
      </MDBox>
    </DashboardLayout>
  );
}

export default CommunityDetails;
