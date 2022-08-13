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
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// import Autocomplete from "@mui/material/Autocomplete";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import Divider from "@mui/material/Divider";
import MDAvatar from "components/MDAvatar";
// import MDInput from "components/MDInput";
// import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import profilePicture from "assets/images/team-3.jpg";

function OrderList() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox my={3}>
        <Card>
          <MDBox p={3} lineHeight={1}>
            <MDBox mt={1}>
              <MDBox mt={1}>
                <Grid container spacing={3} mb={3}>
                  {/* UserId */}
                  <Grid item sm={1}>
                    <MDTypography variant="caption" fontWeight="regular" color="text">
                      Current Name:&nbsp;&nbsp;&nbsp;
                    </MDTypography>
                  </Grid>
                  <Grid item sm={3}>
                    <MDTypography variant="caption" fontWeight="medium">
                      Chris Lee
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
                          Current Name:&nbsp;&nbsp;&nbsp;
                        </MDTypography>
                      </Grid>
                      <Grid item sm={9}>
                        <MDAvatar src={profilePicture} alt="" size="sm" />
                      </Grid>
                    </Grid>
                    {/* Name */}
                    <Grid container spaing={2} mt={2}>
                      <Grid item sm={3}>
                        <MDTypography variant="caption" fontWeight="regular" color="text">
                          Current Name:&nbsp;&nbsp;&nbsp;
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
                          Current Name:&nbsp;&nbsp;&nbsp;
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
                          Current Name:&nbsp;&nbsp;&nbsp;
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
                          Current Name:&nbsp;&nbsp;&nbsp;
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
                          Current Name:&nbsp;&nbsp;&nbsp;
                        </MDTypography>
                      </Grid>
                      <Grid item sm={9}>
                        <MDAvatar src={profilePicture} alt="" size="sm" />
                      </Grid>
                    </Grid>
                    {/* Name */}
                    <Grid container spaing={2} mt={2}>
                      <Grid item sm={3}>
                        <MDTypography variant="caption" fontWeight="regular" color="text">
                          Current Name:&nbsp;&nbsp;&nbsp;
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
                          Current Name:&nbsp;&nbsp;&nbsp;
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
                          Current Name:&nbsp;&nbsp;&nbsp;
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
                          Current Name:&nbsp;&nbsp;&nbsp;
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
                          Current Name:&nbsp;&nbsp;&nbsp;
                        </MDTypography>
                      </Grid>
                      <Grid item sm={9}>
                        <MDAvatar src={profilePicture} alt="" size="sm" />
                      </Grid>
                    </Grid>
                    {/* Name */}
                    <Grid container spaing={2} mt={2}>
                      <Grid item sm={3}>
                        <MDTypography variant="caption" fontWeight="regular" color="text">
                          Current Name:&nbsp;&nbsp;&nbsp;
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
                          Current Name:&nbsp;&nbsp;&nbsp;
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
                          Current Name:&nbsp;&nbsp;&nbsp;
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
                          Current Name:&nbsp;&nbsp;&nbsp;
                        </MDTypography>
                      </Grid>
                      <Grid item sm={9}>
                        <MDTypography variant="caption" fontWeight="medium" color="text">
                          12345624234
                        </MDTypography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                {/*  */}
                <Divider />
                {/*  */}
                <Grid container spacing={3} mb={3}>
                  {/* UserId */}
                  <Grid item sm={1}>
                    <MDTypography variant="caption" fontWeight="regular" color="text">
                      Current Name:&nbsp;&nbsp;&nbsp;
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
                      Current Name:&nbsp;&nbsp;&nbsp;
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
                          Current Name:&nbsp;&nbsp;&nbsp;
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
                              <MDTypography variant="caption" fontWeight="regular" color="text">
                                Company Name:&nbsp;&nbsp;&nbsp;
                                <MDTypography variant="caption" fontWeight="medium">
                                  Viking Burrito
                                </MDTypography>
                              </MDTypography>
                            </MDBox>
                            <MDBox mb={1} lineHeight={0}>
                              <MDTypography variant="caption" fontWeight="regular" color="text">
                                Email Address:&nbsp;&nbsp;&nbsp;
                                <MDTypography variant="caption" fontWeight="medium">
                                  oliver@burrito.com
                                </MDTypography>
                              </MDTypography>
                            </MDBox>
                            <MDTypography variant="caption" fontWeight="regular" color="text">
                              VAT Number:&nbsp;&nbsp;&nbsp;
                              <MDTypography variant="caption" fontWeight="medium">
                                FRB1235476
                              </MDTypography>
                            </MDTypography>
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
                              <MDTypography variant="caption" fontWeight="regular" color="text">
                                Company Name:&nbsp;&nbsp;&nbsp;
                                <MDTypography variant="caption" fontWeight="medium">
                                  Viking Burrito
                                </MDTypography>
                              </MDTypography>
                            </MDBox>
                            <MDBox mb={1} lineHeight={0}>
                              <MDTypography variant="caption" fontWeight="regular" color="text">
                                Email Address:&nbsp;&nbsp;&nbsp;
                                <MDTypography variant="caption" fontWeight="medium">
                                  oliver@burrito.com
                                </MDTypography>
                              </MDTypography>
                            </MDBox>
                            <MDTypography variant="caption" fontWeight="regular" color="text">
                              VAT Number:&nbsp;&nbsp;&nbsp;
                              <MDTypography variant="caption" fontWeight="medium">
                                FRB1235476
                              </MDTypography>
                            </MDTypography>
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
                          Current Name:&nbsp;&nbsp;&nbsp;
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
                              <MDTypography variant="caption" fontWeight="regular" color="text">
                                Company Name:&nbsp;&nbsp;&nbsp;
                                <MDTypography variant="caption" fontWeight="medium">
                                  Viking Burrito
                                </MDTypography>
                              </MDTypography>
                            </MDBox>
                            <MDBox mb={1} lineHeight={0}>
                              <MDTypography variant="caption" fontWeight="regular" color="text">
                                Email Address:&nbsp;&nbsp;&nbsp;
                                <MDTypography variant="caption" fontWeight="medium">
                                  oliver@burrito.com
                                </MDTypography>
                              </MDTypography>
                            </MDBox>
                            <MDTypography variant="caption" fontWeight="regular" color="text">
                              VAT Number:&nbsp;&nbsp;&nbsp;
                              <MDTypography variant="caption" fontWeight="medium">
                                FRB1235476
                              </MDTypography>
                            </MDTypography>
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
                              <MDTypography variant="caption" fontWeight="regular" color="text">
                                Company Name:&nbsp;&nbsp;&nbsp;
                                <MDTypography variant="caption" fontWeight="medium">
                                  Viking Burrito
                                </MDTypography>
                              </MDTypography>
                            </MDBox>
                            <MDBox mb={1} lineHeight={0}>
                              <MDTypography variant="caption" fontWeight="regular" color="text">
                                Email Address:&nbsp;&nbsp;&nbsp;
                                <MDTypography variant="caption" fontWeight="medium">
                                  oliver@burrito.com
                                </MDTypography>
                              </MDTypography>
                            </MDBox>
                            <MDTypography variant="caption" fontWeight="regular" color="text">
                              VAT Number:&nbsp;&nbsp;&nbsp;
                              <MDTypography variant="caption" fontWeight="medium">
                                FRB1235476
                              </MDTypography>
                            </MDTypography>
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

export default OrderList;
