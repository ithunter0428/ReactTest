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

import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";
// import Autocomplete from "@mui/material/Autocomplete";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDBadge from "components/MDBadge";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// API
import { getDetail } from "api/appuser";

function UserList() {
  const navigate = useNavigate();
  const location = useLocation();

  const verifiedStatus = ["认证失败", "未认证", "认证中", ""];
  const answer = ["否", "是"];
  // State
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);

  // Load Data from API
  const getData = async () => {
    const id = location.search.replace("?id=", "");
    const res = await getDetail(id);
    console.log(res);
    setData(res.msg);
    setLoaded(true);
  };
  // Use Effect
  useEffect(() => {
    getData();
  }, [true]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      {loaded === false && <MDBox />}
      {loaded === true && (
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
                        {data.app_user_id}
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
                            src={data.avatar_url}
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
                            {data.username}
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
                            {data.name}
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
                            {data.area_code}
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
                            {data.phone}
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
                            src={data.student_card_img_url}
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
                            {/* 认证失败 | 未认证 | 认证中 */}
                            {verifiedStatus[data.verify_state]}
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
                            {answer[data.is_perfect_info]}
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
                            {data.location}
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
                            {data.state === 1 && "正常"}
                            {data.state === 0 && "已禁用"}
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
                            src={data.bg_img_url}
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
                            {data.description}
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
                            {moment(data.create_time).format("YYYY-MM-DD HH:MM:SS")}
                          </MDTypography>
                        </Grid>
                      </Grid>
                      {/*  */}
                    </Grid>
                  </Grid>
                  {/*  */}
                  <Divider />
                  {/*  */}
                  <Grid container spacing={0} mb={3}>
                    {/* UserId */}
                    <Grid item sm={1}>
                      <MDTypography variant="caption" fontWeight="regular" color="text">
                        技能:&nbsp;&nbsp;&nbsp;
                      </MDTypography>
                    </Grid>
                    <Grid item sm={10}>
                      <Grid container spacing={0}>
                        <MDTypography variant="caption" fontWeight="medium">
                          {data.skill_arr.map((skill) => (
                            <MDBadge
                              badgeContent={skill.name}
                              sx={{ marginLeft: 1 }}
                              variant="contained"
                              size="xl"
                              container
                            />
                          ))}
                        </MDTypography>
                      </Grid>
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
                    <Grid item sm={10}>
                      <MDTypography variant="caption" fontWeight="medium">
                        {data.hobby_arr.map((hobby) => (
                          <MDBadge
                            badgeContent={hobby.name}
                            sx={{ marginLeft: 1 }}
                            variant="contained"
                            size="xl"
                            container
                          />
                        ))}
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
                          {data.education_arr.map((education) => (
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
                              <MDBox width="100%" display="flex" flexDirection="column">
                                <MDBox mb={1} lineHeight={0}>
                                  <MDTypography variant="caption" fontWeight="text" mr={1}>
                                    学校:
                                  </MDTypography>
                                  <MDTypography variant="caption" fontWeight="medium">
                                    {education.school_name}
                                  </MDTypography>
                                </MDBox>
                                <MDBox mb={1} lineHeight={0}>
                                  <MDTypography variant="caption" fontWeight="text" mr={1}>
                                    学位:
                                  </MDTypography>
                                  <MDTypography variant="caption" fontWeight="medium">
                                    {education.degree_name}
                                  </MDTypography>
                                </MDBox>
                                <MDBox mb={1} lineHeight={0}>
                                  <MDTypography variant="caption" fontWeight="text" mr={1}>
                                    专业:
                                  </MDTypography>
                                  <MDTypography variant="caption" fontWeight="medium">
                                    {education.major_name}
                                  </MDTypography>
                                </MDBox>
                              </MDBox>
                            </MDBox>
                          ))}
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
                          {data.experience_arr.map((experience) => (
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
                              <MDBox width="100%" display="flex" flexDirection="column">
                                <MDBox mb={1} lineHeight={0}>
                                  <MDTypography variant="caption" fontWeight="text" mr={1}>
                                    名称:
                                  </MDTypography>
                                  <MDTypography variant="caption" fontWeight="medium">
                                    {experience.name}
                                  </MDTypography>
                                </MDBox>
                                <MDBox mb={1} lineHeight={0}>
                                  <MDTypography variant="caption" fontWeight="text" mr={1}>
                                    职位:
                                  </MDTypography>
                                  <MDTypography variant="caption" fontWeight="medium">
                                    {experience.position}
                                  </MDTypography>
                                </MDBox>
                              </MDBox>
                            </MDBox>
                          ))}
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
      )}
    </DashboardLayout>
  );
}

export default UserList;
