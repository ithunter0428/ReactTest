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

import IdCell from "layouts/post/list/components/IdCell";
import DefaultCell from "layouts/post/list/components/DefaultCell";
import StatusCell from "layouts/post/list/components/StatusCell";

import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

// Constant
import { POST_TYPES } from "constant";

const dataTableData = (data, handleState) => {
  const dataTable = {
    columns: [
      {
        Header: "帖子ID",
        width: "10%",
        accessor: "post_id",
        Cell: ({ value }) => <IdCell id={value.toString()} />,
      },
      {
        Header: "类型",
        accessor: "type",
        width: "15%",
        Cell: ({ value }) => <DefaultCell value={POST_TYPES[value]} />,
      },
      {
        Header: "内容",
        accessor: "content",
        width: 200,
        Cell: ({ value }) => <MDBox style={{ width: 250 }}>{value}</MDBox>,
      },
      {
        Header: "图片数量",
        accessor: "resource_count",
        width: "10%",
        Cell: ({ value }) => <DefaultCell value={value.toString()} />,
      },
      {
        Header: "状态",
        accessor: "state",
        width: "10%",
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
        Header: "创建人",
        width: "15%",
        accessor: "creator",
        Cell: ({ value }) => <DefaultCell value={value} />,
      },
      {
        Header: "",
        accessor: "action",
        width: "15%",
        Cell: ({ row }) => (
          <MDBox mt={2} style={{ width: 220 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={5}>
                <MDBox mb={1}>
                  <Link to={`/post/details?id=${row.original.post_id}`}>
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
                      onClick={() => handleState(row.original.post_id, -1)}
                    >
                      <Icon color="dark">block</Icon>&nbsp;禁用
                    </MDButton>
                  )}
                  {row.original.state !== 1 && (
                    <MDButton
                      variant="outlined"
                      color="dark"
                      size="small"
                      onClick={() => handleState(row.original.post_id, 1)}
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
  return dataTable;
};

export default dataTableData;
