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
import Divider from "@mui/material/Divider";
// import Autocomplete from "@mui/material/Autocomplete";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import profilePicture from "assets/images/team-3.jpg";

function UserList() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox my={3}>
        <Card>
          <MDBox p={3} lineHeight={1}>
            <MDBox mt={1}>
              <Grid item xs={12} md={12} sx={{ textAlign: "right" }} mb={2} mr={2}>
                <MDButton variant="outlined" color="dark" onClick={() => navigate(-1)}>
                  <Icon>arrow_left</Icon>&nbsp; 返回
                </MDButton>
              </Grid>
              <MDBox mt={1}>
                <Grid container spacing={3} mb={3}>
                  {/* UserId */}
                  <Grid item sm={1}>
                    <MDTypography variant="caption" fontWeight="regular" color="text">
                      用户ID :&nbsp;&nbsp;&nbsp;
                    </MDTypography>
                  </Grid>
                  <Grid item sm={3}>
                    <MDTypography variant="caption" fontWeight="medium">
                      1
                    </MDTypography>
                  </Grid>
                </Grid>
                {/* UserImage */}
                <Grid container spacing={3} mb={3}>
                  {/*  */}
                  <Grid item sm={4}>
                    {/* Image */}
                    <Grid container spaing={2}>
                      <Grid item sm={3}>
                        <MDTypography variant="caption" fontWeight="regular" color="text">
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
                    {/* Name */}
                    <Grid container spaing={2} mt={2}>
                      <Grid item sm={3}>
                        <MDTypography variant="caption" fontWeight="regular" color="text">
                          用户名:&nbsp;&nbsp;&nbsp;
                        </MDTypography>
                      </Grid>
                      <Grid item sm={9}>
                        <MDTypography variant="caption" fontWeight="medium" color="text">
                          Chris
                        </MDTypography>
                      </Grid>
                    </Grid>
                    {/* Name */}
                    <Grid container spaing={2} mt={2}>
                      <Grid item sm={3}>
                        <MDTypography variant="caption" fontWeight="regular" color="text">
                          姓名:&nbsp;&nbsp;&nbsp;
                        </MDTypography>
                      </Grid>
                      <Grid item sm={9}>
                        <MDTypography variant="caption" fontWeight="medium" color="text">
                          Lee
                        </MDTypography>
                      </Grid>
                    </Grid>
                    {/*  */}
                    <Grid container spaing={2} mt={2}>
                      <Grid item sm={3}>
                        <MDTypography variant="caption" fontWeight="regular" color="text">
                          手机区号:&nbsp;&nbsp;&nbsp;
                        </MDTypography>
                      </Grid>
                      <Grid item sm={9}>
                        <MDTypography variant="caption" fontWeight="medium" color="text">
                          +86
                        </MDTypography>
                      </Grid>
                    </Grid>
                    {/*  */}
                    <Grid container spaing={2} mt={2}>
                      <Grid item sm={3}>
                        <MDTypography variant="caption" fontWeight="regular" color="text">
                          手机号:&nbsp;&nbsp;&nbsp;
                        </MDTypography>
                      </Grid>
                      <Grid item sm={9}>
                        <MDTypography variant="caption" fontWeight="medium" color="text">
                          12345624234
                        </MDTypography>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/*  */}
                  <Grid item sm={4}>
                    {/* Image */}
                    <Grid container spaing={2}>
                      <Grid item sm={3}>
                        <MDTypography variant="caption" fontWeight="regular" color="text">
                          学生卡:&nbsp;&nbsp;&nbsp;
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
                    {/* Name */}
                    <Grid container spaing={2} mt={2}>
                      <Grid item sm={3}>
                        <MDTypography variant="caption" fontWeight="regular" color="text">
                          认证状态:&nbsp;&nbsp;&nbsp;
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
                          是否完善个人信息:&nbsp;&nbsp;&nbsp;
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
                          定位:&nbsp;&nbsp;&nbsp;
                        </MDTypography>
                      </Grid>
                      <Grid item sm={9}>
                        <MDTypography variant="caption" fontWeight="medium" color="text">
                          北京
                        </MDTypography>
                      </Grid>
                    </Grid>
                    {/*  */}
                    <Grid container spaing={2} mt={2}>
                      <Grid item sm={3}>
                        <MDTypography variant="caption" fontWeight="regular" color="text">
                          状态:&nbsp;&nbsp;&nbsp;
                        </MDTypography>
                      </Grid>
                      <Grid item sm={9}>
                        <MDTypography variant="caption" fontWeight="medium" color="text">
                          正常 | 已禁用
                        </MDTypography>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/*  */}
                  <Grid item sm={4}>
                    {/* Image */}
                    <Grid container spaing={2}>
                      <Grid item sm={3}>
                        <MDTypography variant="caption" fontWeight="regular" color="text">
                          背景图:&nbsp;&nbsp;&nbsp;
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
                    {/* Name */}
                    <Grid container spaing={2} mt={2}>
                      <Grid item sm={3}>
                        <MDTypography variant="caption" fontWeight="regular" color="text">
                          简介:&nbsp;&nbsp;&nbsp;
                        </MDTypography>
                      </Grid>
                      <Grid item sm={9}>
                        <MDTypography variant="caption" fontWeight="medium" color="text">
                          Chris
                        </MDTypography>
                      </Grid>
                    </Grid>
                    {/* Name */}
                    <Grid container spaing={2} mt={2}>
                      <Grid item sm={3}>
                        <MDTypography variant="caption" fontWeight="regular" color="text">
                          注册时间:&nbsp;&nbsp;&nbsp;
                        </MDTypography>
                      </Grid>
                      <Grid item sm={9}>
                        <MDTypography variant="caption" fontWeight="medium" color="text">
                          Lee
                        </MDTypography>
                      </Grid>
                    </Grid>
                    {/*  */}
                  </Grid>
                </Grid>
                {/*  */}
                <Divider />
                {/*  */}
                <Grid container spacing={3} mb={3}>
                  {/* UserId */}
                  <Grid item sm={1}>
                    <MDTypography variant="caption" fontWeight="regular" color="text">
                      技能:&nbsp;&nbsp;&nbsp;
                    </MDTypography>
                  </Grid>
                  <Grid item sm={3}>
                    <MDTypography variant="caption" fontWeight="medium">
                      React React-Native Angular Vue
                    </MDTypography>
                  </Grid>
                </Grid>
                {/*  */}
                <Grid container spacing={3} mb={3}>
                  {/* UserId */}
                  <Grid item sm={1}>
                    <MDTypography variant="caption" fontWeight="regular" color="text">
                      爱好:&nbsp;&nbsp;&nbsp;
                    </MDTypography>
                  </Grid>
                  <Grid item sm={3}>
                    <MDTypography variant="caption" fontWeight="medium">
                      React React-Native Angular Vue
                    </MDTypography>
                  </Grid>
                </Grid>
                {/* </Grid> */}
                <Divider />
                {/*  */}
                <Grid container spacing={3}>
                  <Grid item sm={4}>
                    {/*  */}
                    <Grid container spaing={2} mt={2}>
                      <Grid item sm={3}>
                        <MDTypography variant="caption" fontWeight="regular" color="text">
                          教育经历:&nbsp;&nbsp;&nbsp;
                        </MDTypography>
                      </Grid>
                      <Grid item sm={9}>
                        <MDBox
                          component="li"
                          display="flex"
                          justifyContent="space-between"
                          alignItems="flex-start"
                          bgColor="grey-100"
                          borderRadius="lg"
                          p={3}
                          mr={4}
                          mb={2}
                        >
                          <MDBox width="100%" display="flex" flexDirection="column" lineHeight={1}>
                            <MDBox mb={1} lineHeight={0}>
                              <MDTypography variant="caption" fontWeight="medium">
                                学校
                              </MDTypography>
                            </MDBox>
                            <MDBox mb={1} lineHeight={0}>
                              <MDTypography variant="caption" fontWeight="medium">
                                学位
                              </MDTypography>
                            </MDBox>
                            <MDBox mb={1} lineHeight={0}>
                              <MDTypography variant="caption" fontWeight="medium">
                                专业
                              </MDTypography>
                            </MDBox>
                          </MDBox>
                        </MDBox>
                        <MDBox
                          component="li"
                          display="flex"
                          justifyContent="space-between"
                          alignItems="flex-start"
                          bgColor="grey-100"
                          borderRadius="lg"
                          p={3}
                          mr={4}
                          mb={2}
                        >
                          <MDBox width="100%" display="flex" flexDirection="column" lineHeight={1}>
                            <MDBox mb={1} lineHeight={0}>
                              <MDTypography variant="caption" fontWeight="medium">
                                学校
                              </MDTypography>
                            </MDBox>
                            <MDBox mb={1} lineHeight={0}>
                              <MDTypography variant="caption" fontWeight="medium">
                                学位
                              </MDTypography>
                            </MDBox>
                            <MDBox mb={1} lineHeight={0}>
                              <MDTypography variant="caption" fontWeight="medium">
                                专业
                              </MDTypography>
                            </MDBox>
                          </MDBox>
                        </MDBox>
                      </Grid>
                    </Grid>
                    {/*  */}
                  </Grid>
                  {/*  */}
                  <Grid item sm={4}>
                    {/*  */}
                    <Grid container spaing={2} mt={2}>
                      <Grid item sm={3}>
                        <MDTypography variant="caption" fontWeight="regular" color="text">
                          工作经历:&nbsp;&nbsp;&nbsp;
                        </MDTypography>
                      </Grid>
                      <Grid item sm={9}>
                        <MDBox
                          component="li"
                          display="flex"
                          justifyContent="space-between"
                          alignItems="flex-start"
                          bgColor="grey-100"
                          borderRadius="lg"
                          p={3}
                          mr={4}
                          mb={2}
                        >
                          <MDBox width="100%" display="flex" flexDirection="column" lineHeight={1}>
                            <MDBox mb={1} lineHeight={0}>
                              <MDTypography variant="caption" fontWeight="medium">
                                名称
                              </MDTypography>
                            </MDBox>
                            <MDBox mb={1} lineHeight={0}>
                              <MDTypography variant="caption" fontWeight="medium">
                                职位
                              </MDTypography>
                            </MDBox>
                          </MDBox>
                        </MDBox>
                        <MDBox
                          component="li"
                          display="flex"
                          justifyContent="space-between"
                          alignItems="flex-start"
                          bgColor="grey-100"
                          borderRadius="lg"
                          p={3}
                          mr={4}
                          mb={2}
                        >
                          <MDBox width="100%" display="flex" flexDirection="column" lineHeight={1}>
                            <MDBox mb={1} lineHeight={0}>
                              <MDTypography variant="caption" fontWeight="medium">
                                名称
                              </MDTypography>
                            </MDBox>
                            <MDBox mb={1} lineHeight={0}>
                              <MDTypography variant="caption" fontWeight="medium">
                                职位
                              </MDTypography>
                            </MDBox>
                          </MDBox>
                        </MDBox>
                      </Grid>
                    </Grid>
                    {/*  */}
                  </Grid>
                  {/*  */}
                </Grid>
              </MDBox>
            </MDBox>
          </MDBox>
        </Card>
      </MDBox>
    </DashboardLayout>
  );
}

export default UserList;
