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
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
// import Autocomplete from "@mui/material/Autocomplete";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// API
import { getDetail } from "api/post";
// Constant
import { POST_TYPES } from "constant";

function UserList() {
  const navigate = useNavigate();
  const location = useLocation();

  // State
  const [post, setPost] = useState({});
  const [loaded, setLoaded] = useState(false);

  // Load Data from API
  const getData = async () => {
    const id = location.search.replace("?id=", "");
    const res = await getDetail(id);
    console.log(res.msg);
    setPost(res.msg);
    setLoaded(true);
  };
  // Use Effect
  useEffect(() => {
    getData();
  }, [location]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox my={3}>
        <Card>
          {loaded === false && <MDBox />}
          {loaded === true && (
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
                    {/* UserId */}
                    <Grid item sm={1}>
                      <MDTypography variant="caption" fontWeight="regular" color="text">
                        帖子ID :&nbsp;&nbsp;&nbsp;
                      </MDTypography>
                    </Grid>
                    <Grid item sm={3}>
                      <MDTypography variant="caption" fontWeight="medium">
                        {post.post_id}
                      </MDTypography>
                    </Grid>
                  </Grid>
                  {/* UserImage */}
                  <Grid container spacing={3} mb={3}>
                    {/*  */}
                    <Grid item sm={4}>
                      {/* Name */}
                      <Grid container spaing={2} mt={2}>
                        <Grid item sm={3}>
                          <MDTypography variant="caption" fontWeight="regular" color="text">
                            类型:&nbsp;&nbsp;&nbsp;
                          </MDTypography>
                        </Grid>
                        <Grid item sm={9}>
                          <MDTypography variant="caption" fontWeight="medium" color="text">
                            {POST_TYPES[post.type]}
                          </MDTypography>
                        </Grid>
                      </Grid>
                      {/* Name */}
                      <Grid container spaing={2} mt={2}>
                        <Grid item sm={3}>
                          <MDTypography variant="caption" fontWeight="regular" color="text">
                            权限:&nbsp;&nbsp;&nbsp;
                          </MDTypography>
                        </Grid>
                        <Grid item sm={9}>
                          <MDTypography variant="caption" fontWeight="medium" color="text">
                            {post.role_id}
                          </MDTypography>
                        </Grid>
                      </Grid>
                      {/*  */}
                      <Grid container spaing={2} mt={2}>
                        <Grid item sm={3}>
                          <MDTypography variant="caption" fontWeight="regular" color="text">
                            创建人:&nbsp;&nbsp;&nbsp;
                          </MDTypography>
                        </Grid>
                        <Grid item sm={9}>
                          <MDTypography variant="caption" fontWeight="medium" color="text">
                            {post.creator}
                          </MDTypography>
                        </Grid>
                      </Grid>
                      {/*  */}
                    </Grid>
                    {/*  */}
                    <Grid item sm={4}>
                      {/* Name */}
                      <Grid container spaing={2} mt={2}>
                        <Grid item sm={3}>
                          <MDTypography variant="caption" fontWeight="regular" color="text">
                            状态:&nbsp;&nbsp;&nbsp;
                          </MDTypography>
                        </Grid>
                        <Grid item sm={9}>
                          <MDTypography variant="caption" fontWeight="medium" color="text">
                            {post.state === 1 && "正常"}
                            {post.state === -1 && "已禁用"}
                          </MDTypography>
                        </Grid>
                      </Grid>
                      {/* Name */}
                      <Grid container spaing={2} mt={2}>
                        <Grid item sm={3}>
                          <MDTypography variant="caption" fontWeight="regular" color="text">
                            社区名称:&nbsp;&nbsp;&nbsp;
                          </MDTypography>
                        </Grid>
                        <Grid item sm={9}>
                          <MDTypography variant="caption" fontWeight="medium" color="text">
                            {post.community_name}
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
                            {moment(post.create_time).format("YYYY-MM-DD")}
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
                            {post.state === 1 && "正常"}
                            {post.state === -1 && "已禁用"}
                          </MDTypography>
                        </Grid>
                      </Grid>
                    </Grid>
                    {/*  */}
                    <Grid item sm={4}>
                      {/* Name */}
                      <Grid container spaing={2} mt={2}>
                        <Grid item sm={5}>
                          <MDTypography variant="caption" fontWeight="regular" color="text">
                            转发引用帖子ID:&nbsp;&nbsp;&nbsp;
                          </MDTypography>
                        </Grid>
                        <Grid item sm={7}>
                          <MDTypography variant="caption" fontWeight="medium" color="text">
                            {post.parent_id === 0 && post.parent_id}
                            {post.parent_id !== 0 && (
                              <Link to={`/post/details?id=${post.parent_id}`}>
                                {post.parent_id}
                              </Link>
                            )}
                          </MDTypography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/*  */}
                  {/* Post Content */}
                  <Grid container spaing={2} mb={3}>
                    <Grid item sm={1}>
                      <MDTypography variant="caption" fontWeight="regular" color="text">
                        内容:&nbsp;&nbsp;&nbsp;
                      </MDTypography>
                    </Grid>
                    <Grid item sm={9}>
                      <MDTypography variant="caption" fontWeight="medium" color="text">
                        {post.content}
                      </MDTypography>
                    </Grid>
                  </Grid>
                  {/*  */}
                  <Grid container spacing={3} mb={3}>
                    {/* UserId */}
                    <Grid item sm={1}>
                      <MDTypography variant="caption" fontWeight="medium" color="text">
                        图片或视频:&nbsp;&nbsp;&nbsp;
                      </MDTypography>
                    </Grid>
                    {/* Post Image */}
                    <Grid item sm={11}>
                      <Grid container spacing={2}>
                        {post.resource_arr.map((resource) => (
                          <Grid item sm={2}>
                            <MDBox
                              component="img"
                              src={resource.url}
                              alt="Product Image"
                              shadow="lg"
                              width="100%"
                              height="100%"
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                </MDBox>
              </MDBox>
            </MDBox>
          )}
        </Card>
      </MDBox>
    </DashboardLayout>
  );
}

export default UserList;
