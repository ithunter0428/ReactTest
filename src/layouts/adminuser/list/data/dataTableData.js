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

import IdCell from "layouts/adminuser/list/components/IdCell";
import DefaultCell from "layouts/adminuser/list/components/DefaultCell";
import StatusCell from "layouts/adminuser/list/components/StatusCell";

import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

const dataTableData = {
  columns: [
    {
      Header: "后台用户",
      width: "15%",
      accessor: "tools_user_id",
      Cell: ({ value }) => <IdCell id={value} />,
    },
    {
      Header: "用户名",
      width: "20%",
      accessor: "username",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    {
      Header: "权限",
      width: "20%",
      accessor: "role_id",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    {
      Header: "状态",
      width: "20%",
      accessor: "state",
      Cell: ({ value }) => {
        let status;

        if (value === 1) {
          status = <StatusCell icon="done" color="success" status="Normal" />;
        } else {
          status = <StatusCell icon="close" color="error" status="Blocked" />;
        }

        return status;
      },
    },
    {
      Header: "",
      accessor: "action",
      width: "25%",
      Cell: () => (
        <MDBox mt={2} style={{ width: 250 }}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              <MDBox mb={1}>
                <Link to="/user/details">
                  <MDButton variant="outlined" color="dark">
                    重置密码
                  </MDButton>
                </Link>
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6}>
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
      tools_user_id: 1,
      username: "sugar",
      role_id: 1,
      state: 1,
    },
    {
      tools_user_id: 2,
      username: "sugar2",
      role_id: 1,
      state: 1,
    },
    {
      tools_user_id: 3,
      username: "sugar3",
      role_id: 1,
      state: 1,
    },
  ],
};

export default dataTableData;
