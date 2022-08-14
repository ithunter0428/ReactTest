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
import StatusCell from "layouts/verification/studentcard/list/components/StatusCell";

import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

const dataTableData = {
  columns: [
    { Header: "用户ID", accessor: "id", width: "20%", Cell: ({ value }) => <IdCell id={value} /> },
    {
      Header: "手机号",
      accessor: "phone",
      width: "20%",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    {
      Header: "姓名",
      accessor: "name",
      width: "20%",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    {
      Header: "学生卡照片",
      accessor: "verified_status",
      width: "20%",
      Cell: ({ value }) => {
        let status;

        if (value === "verified") {
          status = <StatusCell icon="done" color="success" status="通过" />;
        } else {
          status = <StatusCell icon="close" color="error" status="通过" />;
        }

        return status;
      },
    },
    {
      Header: "",
      accessor: "action",
      width: "20%",
      Cell: () => (
        <MDBox mt={2} style={{ width: 180 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <MDBox mb={1}>
                <MDButton variant="outlined" color="dark" size="small" fullWidth>
                  通过
                </MDButton>
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6}>
              <MDBox mb={1}>
                <MDButton variant="outlined" color="dark" size="small" fullWidth>
                  不通过
                </MDButton>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      ),
    },
  ],

  rows: [
    {
      id: "#10421",
      phone: "156890234",
      reg_time: "1 Nov, 10:20 AM",
      satus: "blocked",
      verified_status: "verified",
      name: "Orlando Imieto",
      filled: "filled",
    },
    {
      id: "#10421",
      phone: "156890234",
      reg_time: "1 Nov, 10:20 AM",
      satus: "blocked",
      verified_status: "verified",
      name: "Orlando Imieto",
      filled: "filled",
    },
    {
      id: "#10421",
      phone: "156890234",
      reg_time: "1 Nov, 10:20 AM",
      satus: "blocked",
      verified_status: "verified",
      name: "Orlando Imieto",
      filled: "filled",
    },
    {
      id: "#10421",
      phone: "156890234",
      reg_time: "1 Nov, 10:20 AM",
      satus: "blocked",
      verified_status: "verified",
      name: "Orlando Imieto",
      filled: "filled",
    },
    {
      id: "#10421",
      phone: "156890234",
      reg_time: "1 Nov, 10:20 AM",
      satus: "blocked",
      verified_status: "verified",
      name: "Orlando Imieto",
      filled: "filled",
    },
    {
      id: "#10421",
      phone: "156890234",
      reg_time: "1 Nov, 10:20 AM",
      satus: "blocked",
      verified_status: "verified",
      name: "Orlando Imieto",
      filled: "filled",
    },
  ],
};

export default dataTableData;
