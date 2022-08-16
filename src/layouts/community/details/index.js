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
// API
import { getDetail } from "api/community";

function CommunityDetails() {
  const navigate = useNavigate();
  const location = useLocation();

  // State
  const [community, setCommunity] = useState({});
  const [loaded, setLoaded] = useState(false);

  // Load Data from API
  const getData = async () => {
    const id = location.search.replace("?id=", "");
    const res = await getDetail(id);
    console.log(res);
    setCommunity(res.msg);
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
                        {community.community_id}
                      </MDTypography>
                    </Grid>
                  </Grid>
                  {/*  */}
                  <Grid container spacing={3} mb={3}>
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
                            src={community.img_url}
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
                            {community.name}
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
                            {community.state === 1 && "正常"}
                            {community.state === -1 && "已禁用"}
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
                            {community.description}
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
                            {community.creator}
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
                            {moment(community.create_time).format("YYYY-MM-DD HH:MM:SS")}
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
                  <UserTable communityName={community.name} />
                </MDBox>
              </MDBox>
            </MDBox>
          </Card>
        </MDBox>
      )}
    </DashboardLayout>
  );
}

export default CommunityDetails;
