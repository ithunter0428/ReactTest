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

import IdCell from "layouts/adminuser/list/components/IdCell";
import DefaultCell from "layouts/adminuser/list/components/DefaultCell";
import StatusCell from "layouts/adminuser/list/components/StatusCell";

import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

const dataTableData = (data, handleState, handlePwd) => {
  const tableData = {
    columns: [
      {
        Header: "后台用户",
        width: "15%",
        accessor: "tools_user_id",
        Cell: ({ value }) => <IdCell id={value.toString()} />,
      },
      {
        Header: "用户名",
        width: "20%",
        accessor: "username",
        Cell: ({ value }) => <DefaultCell value={value.toString()} />,
      },
      {
        Header: "权限",
        width: "20%",
        accessor: "role_id",
        Cell: ({ value }) => <DefaultCell value={value.toString()} />,
      },
      {
        Header: "状态",
        width: "20%",
        accessor: "state",
        Cell: ({ value }) => {
          let status;

          if (value === 1) {
            status = <StatusCell icon="done" color="success" status="正常" />;
          } else {
            status = <StatusCell icon="close" color="error" status="已禁用" />;
          }
          return status;
        },
      },
      {
        Header: "",
        accessor: "action",
        width: "25%",
        Cell: ({ row }) => (
          <MDBox mt={2} style={{ width: 200 }}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={6}>
                <MDBox mb={1}>
                  <MDButton
                    variant="outlined"
                    color="dark"
                    size="small"
                    onClick={() => handlePwd(row.original.tools_user_id)}
                  >
                    重置密码
                  </MDButton>
                </MDBox>
              </Grid>
              <Grid item xs={12} sm={6}>
                <MDBox mb={1}>
                  {row.original.state === 1 && (
                    <MDButton
                      variant="outlined"
                      color="dark"
                      size="small"
                      onClick={() => handleState(row.original.tools_user_id, -1)}
                    >
                      <Icon color="dark">block</Icon>&nbsp;禁用
                    </MDButton>
                  )}
                  {row.original.state !== 1 && (
                    <MDButton
                      variant="outlined"
                      color="dark"
                      size="small"
                      onClick={() => handleState(row.original.tools_user_id, 1)}
                    >
                      <Icon color="info">check</Icon>&nbsp;启用
                    </MDButton>
                  )}
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
