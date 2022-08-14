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

import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

import MDBox from "components/MDBox";
import MDAvatar from "components/MDAvatar";
import MDButton from "components/MDButton";

const dataTableData = {
  columns: [
    {
      Header: "社区ID",
      accessor: "community_id",
      width: "15%",
      Cell: ({ value }) => <IdCell id={value} />,
    },
    {
      Header: "图标",
      accessor: "img_url",
      width: "20%",
      Cell: ({ value }) => <MDAvatar src={value} alt="Project Image" size="sm" />,
    },
    {
      Header: "名称",
      accessor: "name",
      width: "15%",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    {
      Header: "人数",
      accessor: "user_count",
      width: "15%",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    {
      Header: "创建人",
      accessor: "creator",
      width: "15%",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    {
      Header: "",
      accessor: "action",
      width: "20%",
      Cell: ({ row }) => (
        <MDBox mt={2} style={{ width: 200 }}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={5}>
              <MDBox mb={1}>
                <Link to={`/community/details?id=${row.original.community_id}`}>
                  <MDButton variant="outlined" color="dark" size="small">
                    详情
                  </MDButton>
                </Link>
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={7}>
              <MDBox mb={1}>
                {row.original.state === 1 && (
                  <MDButton variant="outlined" color="dark" size="small">
                    <Icon color="dark">block</Icon>&nbsp;启用
                  </MDButton>
                )}
                {row.original.state !== 1 && (
                  <MDButton variant="outlined" color="dark" size="small">
                    <Icon color="info">check</Icon>&nbsp;禁用
                  </MDButton>
                )}
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      ),
    },
  ],

  rows: [
    {
      community_id: 3,
      name: "苏测社区1",
      img_url: "",
      state: 1,
      creator: "苏玉博",
      user_count: 8,
    },
    {
      community_id: 5,
      name: "天下足球⚽️",
      img_url: "https://banqu-v2.oss-accelerate.aliyuncs.com/banquios/community/1659449744000.png",
      state: 1,
      creator: "于思楠",
      user_count: 5,
    },
    {
      community_id: 9,
      name: "尽享美食",
      img_url: "https://banqu-v2.oss-accelerate.aliyuncs.com/banquios/community/1659449666000.png",
      state: 1,
      creator: "于思楠",
      user_count: 6,
    },
    {
      community_id: 10,
      name: "苏测3",
      img_url: "",
      state: 1,
      creator: "苏玉博",
      user_count: 2,
    },
    {
      community_id: 11,
      name: "苏测4",
      img_url: "",
      state: 1,
      creator: "苏玉博",
      user_count: 3,
    },
  ],
};

export default dataTableData;
