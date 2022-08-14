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
import moment from "moment";
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

function UserList() {
  const navigate = useNavigate();
  const verifiedStatus = ["认证失败", "未认证", "认证中", ""];
  const answer = ["否", "是"];
  const data = {
    app_user_id: 1,
    phone: "15810018878",
    username: "",
    name: "苏玉博",
    avatar_url: "http://oss.ban-qu.com/1646982853424.jpg",
    student_card_img_url: "",
    bg_img_url: "http://oss.ban-qu.com/1647627681822.png",
    description: "",
    verify_state: 2,
    location: "这存坐标对象还是字符串？",
    is_perfect_info: 1,
    state: 1,
    create_time: "2022-06-29T09:33:07.000Z",
    area_code: "+86",
    skill_arr: [
      {
        name: "分析能力",
        img_url: "http://oss.ban-qu.com/Analytical%20Skills%20icon.png",
      },
      {
        name: "数据库设计",
        img_url: "http://oss.ban-qu.com/Database%20Design%20icon.png",
      },
      {
        name: "数据库管理",
        img_url: "http://oss.ban-qu.com/Database%20Management%20icon.png",
      },
      {
        name: "算法",
        img_url: "http://oss.ban-qu.com/Algorithms%20icon.png",
      },
    ],
    hobby_arr: [
      {
        name: "3D打印",
        img_url: "http://oss.ban-qu.com/hobby/flaticon%203D%20printing%20logo.png",
      },
      {
        name: "杂技瑜伽",
        img_url: "http://oss.ban-qu.com/hobby/flaticon%20Acro%20yoga%20logo.png",
      },
      {
        name: "演戏",
        img_url: "http://oss.ban-qu.com/hobby/flaticon%20Acting%20logo.png",
      },
      {
        name: "可动人偶",
        img_url: "http://oss.ban-qu.com/hobby/flaticon%20Action%20figure%20logo.png",
      },
    ],
    education_arr: [
      {
        school_name: "北京大学 ",
        school_img_url: "https://oss.ban-qu.com/university/Peking%20University%20logo.png",
        degree_name: "学术学位博士",
        major_name: "哲学",
      },
    ],
    experience_arr: [
      {
        name: "bq",
        position: "",
      },
    ],
  };
  // const EducationList = data.education_arr.map((education) => (
  //   <MDBox
  //     component="li"
  //     display="flex"
  //     justifyContent="space-between"
  //     alignItems="flex-start"
  //     bgColor="grey-100"
  //     borderRadius="lg"
  //     p={3}
  //     mr={4}
  //     mb={2}
  //   >
  //     <MDBox width="100%" display="flex" flexDirection="column" lineHeight={1}>
  //       <MDBox mb={1} lineHeight={0}>
  //         <MDTypography variant="caption" fontWeight="medium">
  //           {education.school_name}
  //         </MDTypography>
  //       </MDBox>
  //       <MDBox mb={1} lineHeight={0}>
  //         <MDTypography variant="caption" fontWeight="medium">
  //           {education.degree_name}
  //         </MDTypography>
  //       </MDBox>
  //       <MDBox mb={1} lineHeight={0}>
  //         <MDTypography variant="caption" fontWeight="medium">
  //           {education.major_name}
  //         </MDTypography>
  //       </MDBox>
  //     </MDBox>
  //   </MDBox>
  // ));

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
                <Grid container spacing={3} mb={3}>
                  {/* UserId */}
                  <Grid item sm={1}>
                    <MDTypography variant="caption" fontWeight="regular" color="text">
                      技能:&nbsp;&nbsp;&nbsp;
                    </MDTypography>
                  </Grid>
                  <Grid item sm={3}>
                    <MDTypography variant="caption" fontWeight="medium">
                      {data.skill_arr.map((skill) => skill.name).join(",")}
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
                      {data.hobby_arr.map((hobby) => hobby.name).join(",")}
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
    </DashboardLayout>
  );
}

export default UserList;
