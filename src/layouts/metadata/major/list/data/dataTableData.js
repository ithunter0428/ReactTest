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

import IdCell from "layouts/metadata/major/list/components/IdCell";
import DefaultCell from "layouts/metadata/major/list/components/DefaultCell";
import StatusCell from "layouts/metadata/major/list/components/StatusCell";

import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

const dataTableData = {
  columns: [
    { Header: "用户ID", accessor: "id", Cell: ({ value }) => <IdCell id={value} /> },
    {
      Header: "手机号",
      accessor: "phone",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    {
      Header: "姓名",
      accessor: "name",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    {
      Header: "学生卡验证状态",
      accessor: "verified_status",
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
      Header: "是否完善信息",
      accessor: "filled",
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
      Header: "状态 （正常 | 已禁用）",
      accessor: "status",
      Cell: ({ value }) => {
        let status;

        if (value === "unblocked") {
          status = <StatusCell icon="done" color="success" status="Unblocked" />;
        } else {
          status = <StatusCell icon="close" color="error" status="Blocked" />;
        }

        return status;
      },
    },
    {
      Header: "注册时间",
      accessor: "reg_time",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    {
      Header: "",
      accessor: "action",
      Cell: () => (
        <MDBox mt={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <MDBox mb={1}>
                <Link to="/metadata/major/addOrUpdate">
                  <MDButton variant="outlined" color="dark">
                    编辑
                  </MDButton>
                </Link>
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6}>
              <MDBox mb={1}>
                <MDButton variant="outlined" color="dark">
                  删除
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
