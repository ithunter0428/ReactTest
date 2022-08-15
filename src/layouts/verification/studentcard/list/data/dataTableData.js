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

/* eslint-disable react/prop-types */
// ProductsList page components

import IdCell from "layouts/verification/studentcard/list/components/IdCell";
import DefaultCell from "layouts/verification/studentcard/list/components/DefaultCell";

import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

const dataTableData = (data) => {
  const tableData = {
    columns: [
      {
        Header: "用户ID",
        accessor: "to_user_id",
        width: "20%",
        Cell: ({ value }) => <IdCell id={value.toString()} />,
      },
      {
        Header: "手机号",
        accessor: "phone",
        width: "20%",
        Cell: ({ value }) => <DefaultCell value={value.toString()} />,
      },
      {
        Header: "姓名",
        accessor: "name",
        width: "20%",
        Cell: ({ value }) => <DefaultCell value={value.toString()} />,
      },
      {
        Header: "学生卡照片",
        accessor: "student_card_img_url",
        width: "20%",
        Cell: ({ value }) => (
          <MDBox component="img" src={value} alt="Product Image" shadow="lg" width="30px" />
        ),
      },
      {
        Header: "",
        accessor: "action",
        width: "20%",
        Cell: () => (
          <MDBox mt={2} style={{ width: 200 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <MDBox mb={1}>
                  <MDButton variant="outlined" color="dark" size="small" fullWidth>
                    <Icon color="gray">block</Icon>&nbsp;通过
                  </MDButton>
                </MDBox>
              </Grid>
              <Grid item xs={12} sm={6}>
                <MDBox mb={1}>
                  <MDButton variant="outlined" color="dark" size="small" fullWidth>
                    <Icon color="success">check</Icon>&nbsp;不通过
                  </MDButton>
                </MDBox>
              </Grid>
            </Grid>
          </MDBox>
        ),
      },
    ],
    rows: data,
  };
  return tableData;
};

export default dataTableData;
