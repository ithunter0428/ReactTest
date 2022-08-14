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

import { Link } from "react-router-dom";

import IdCell from "layouts/community/list/components/IdCell";
import DefaultCell from "layouts/community/list/components/DefaultCell";
import StatusCell from "layouts/community/list/components/StatusCell";

import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

const dataTableData = {
  columns: [
    { Header: "社区ID", accessor: "id", width: "15%", Cell: ({ value }) => <IdCell id={value} /> },
    {
      Header: "图标",
      accessor: "icon",
      width: "20%",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    {
      Header: "名称",
      accessor: "name",
      width: "15%",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    {
      Header: "人数",
      accessor: "verified_status",
      width: "15%",
      Cell: ({ value }) => {
        let status;

        if (value === "verified") {
          status = <StatusCell icon="done" color="success" status="Verified" />;
        } else {
          status = <StatusCell icon="close" color="error" status="Unverified" />;
        }

        return status;
      },
    },
    {
      Header: "创建人",
      accessor: "filled",
      width: "15%",
      Cell: ({ value }) => {
        let status;

        if (value === "filled") {
          status = <StatusCell icon="done" color="success" status="Filled" />;
        } else {
          status = <StatusCell icon="close" color="error" status="Not" />;
        }

        return status;
      },
    },
    {
      Header: "",
      accessor: "action",
      width: "20%",
      Cell: () => (
        <MDBox mt={2} style={{ width: 200 }}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={5}>
              <MDBox mb={1}>
                <Link to="/community/details">
                  <MDButton variant="outlined" color="dark">
                    详情
                  </MDButton>
                </Link>
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={7}>
              <MDBox mb={1}>
                <MDButton variant="outlined" color="dark">
                  启用|禁用
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
