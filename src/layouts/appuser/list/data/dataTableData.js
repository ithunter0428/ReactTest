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
import moment from "moment";

import IdCell from "layouts/appuser/list/components/IdCell";
import DefaultCell from "layouts/appuser/list/components/DefaultCell";
import StatusCell from "layouts/appuser/list/components/StatusCell";

import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

const dataTableData = (data, handleState) => {
  const tableData = {
    columns: [
      {
        Header: "用户ID",
        accessor: "app_user_id",
        Cell: ({ value }) => <IdCell id={value.toString()} />,
      },
      {
        Header: "手机号",
        accessor: "phone",
        Cell: ({ value }) => <DefaultCell value={value.toString()} />,
      },
      {
        Header: "姓名",
        accessor: "name",
        Cell: ({ value }) => <DefaultCell value={value.toString()} />,
      },
      {
        Header: "学生卡验证状态",
        accessor: "verify_state",
        Cell: (props) => {
          let status;
          if (props.value > 0) {
            status = <StatusCell icon="done" color="success" status="通过" />;
          } else {
            status = <StatusCell icon="close" color="error" status="不通过" />;
          }

          return status;
        },
      },
      {
        Header: "是否完善信息",
        accessor: "is_perfect_info",
        Cell: (props) => {
          let status;
          if (props.value === 1) {
            status = <StatusCell icon="done" color="success" status="是" />;
          } else {
            status = <StatusCell icon="close" color="error" status="否" />;
          }

          return status;
        },
      },
      {
        Header: "状态 （正常 | 已禁用）",
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
        Header: "注册时间",
        accessor: "create_time",
        Cell: ({ value }) => <DefaultCell value={moment(value).format("YYYY-MM-DD HH:MM")} />,
      },
      {
        Header: "",
        accessor: "action",
        Cell: ({ row }) => (
          <MDBox mt={2} style={{ width: 200 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={5}>
                <MDBox mb={1}>
                  <Link to={`/user/details?id=${row.original.app_user_id}`}>
                    <MDButton variant="outlined" color="dark" size="small">
                      详情
                    </MDButton>
                  </Link>
                </MDBox>
              </Grid>
              <Grid item xs={12} sm={7}>
                <MDBox mb={1}>
                  {row.original.state === 1 && (
                    <MDButton
                      variant="outlined"
                      color="dark"
                      size="small"
                      onClick={() => handleState(row.original.app_user_id, -1)}
                    >
                      <Icon color="dark">block</Icon>&nbsp;禁用
                    </MDButton>
                  )}
                  {row.original.state !== 1 && (
                    <MDButton
                      variant="outlined"
                      color="dark"
                      size="small"
                      onClick={() => handleState(row.original.app_user_id, 1)}
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
