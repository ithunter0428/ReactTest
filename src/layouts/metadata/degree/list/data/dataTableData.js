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

import IdCell from "layouts/metadata/school/list/components/IdCell";
import DefaultCell from "layouts/metadata/school/list/components/DefaultCell";

import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

const dataTableData = {
  columns: [
    { Header: "专业ID", accessor: "degree_id", Cell: ({ value }) => <IdCell id={value} /> },
    {
      Header: "中文名称",
      accessor: "name",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    {
      Header: "英文名称",
      accessor: "en_name",
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
                <Link to="/metadata/school/addOrUpdate/">
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
      degree_id: 1,
      name: "学术学位博士",
      en_name: "Academic PhD",
    },
    {
      degree_id: 2,
      name: "本科生",
      en_name: "Undergraduates",
    },
    {
      degree_id: 3,
      name: "学术学位硕士",
      en_name: "Academic Master",
    },
    {
      degree_id: 4,
      name: "专业学位博士",
      en_name: "Professional PhD",
    },
    {
      degree_id: 5,
      name: "专业学位硕士",
      en_name: "Professional Master",
    },
    {
      degree_id: 6,
      name: "专业博士",
      en_name: "Professional Doctorate",
    },
  ],
};

export default dataTableData;
