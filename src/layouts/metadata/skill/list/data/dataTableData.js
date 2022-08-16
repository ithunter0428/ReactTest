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

import IdCell from "layouts/metadata/skill/list/components/IdCell";
import DefaultCell from "layouts/metadata/skill/list/components/DefaultCell";
import CustomerCell from "layouts/metadata/skill/list/components/CustomerCell";

import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

const dataTableData = (data, deleteRow) => ({
  columns: [
    {
      Header: "技能ID",
      accessor: "skill_id",
      Cell: ({ value }) => <IdCell id={value.toString()} />,
    },
    {
      Header: "图标",
      accessor: "img_url",
      Cell: ({ value }) => <CustomerCell image={value} name="" />,
    },
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
      Header: "创建人",
      accessor: "create_user_name",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    {
      Header: "",
      accessor: "action",
      Cell: ({ row }) => (
        <MDBox mt={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <MDBox mb={1}>
                <Link to={`/metadata/skill/addOrUpdate?id=${row.original.skill_id}`}>
                  <MDButton variant="outlined" color="dark" size="small">
                    编辑
                  </MDButton>
                </Link>
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6}>
              <MDBox mb={1}>
                <MDButton
                  variant="outlined"
                  color="dark"
                  size="small"
                  onClick={() => deleteRow(row.original.skill_id)}
                >
                  删除
                </MDButton>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      ),
    },
  ],

  rows: data,
});

export default dataTableData;
