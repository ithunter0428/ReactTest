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

import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

const dataTableData = {
  columns: [
    {
      Header: "专业ID",
      accessor: "major_id",
      Cell: ({ value }) => <IdCell id={value.toString()} />,
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
      Header: "",
      accessor: "action",
      Cell: ({ row }) => (
        <MDBox mt={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <MDBox mb={1}>
                <Link to={`/metadata/major/addOrUpdate?id=${row.original.major_id}`}>
                  <MDButton variant="outlined" color="dark" size="small">
                    编辑
                  </MDButton>
                </Link>
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6}>
              <MDBox mb={1}>
<<<<<<< HEAD
                <MDButton variant="outlined" color="dark" size="small">
=======
                <MDButton
                  variant="outlined"
                  color="dark"
                  size="small"
                  onClick={() => deleteRow(row.original.school_id)}
                >
>>>>>>> master
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
      major_id: 3,
      name: "哲学",
      en_name: "Philosophy",
    },
    {
      major_id: 4,
      name: "逻辑学",
      en_name: "Logic",
    },
    {
      major_id: 5,
      name: "宗教学",
      en_name: "Religious Studies",
    },
    {
      major_id: 6,
      name: "伦理学",
      en_name: "Ethics",
    },
    {
      major_id: 9,
      name: "经济学",
      en_name: "Economics",
    },
    {
      major_id: 10,
      name: "经济统计学",
      en_name: "Economic Statistics",
    },
    {
      major_id: 11,
      name: "国民经济管理",
      en_name: "National Economic Management",
    },
    {
      major_id: 12,
      name: "资源与环境经济学",
      en_name: "Resource and Environmental Economics",
    },
    {
      major_id: 13,
      name: "商务经济学",
      en_name: "Business Economics",
    },
    {
      major_id: 14,
      name: "能源经济",
      en_name: "Energy Economy",
    },
    {
      major_id: 15,
      name: "劳动经济学",
      en_name: "Labor Economics",
    },
    {
      major_id: 16,
      name: "经济工程",
      en_name: "Economic Engineering",
    },
    {
      major_id: 17,
      name: "数字经济",
      en_name: "Digital Economy",
    },
    {
      major_id: 19,
      name: "财政学",
      en_name: "Public Finance",
    },
    {
      major_id: 20,
      name: "税收学",
      en_name: "Taxation",
    },
    {
      major_id: 22,
      name: "金融学",
      en_name: "Finance",
    },
    {
      major_id: 23,
      name: "金融工程",
      en_name: "Financial Engineering",
    },
    {
      major_id: 24,
      name: "保险学",
      en_name: "Insurance",
    },
    {
      major_id: 25,
      name: "投资学",
      en_name: "Investment",
    },
    {
      major_id: 26,
      name: "金融数学",
      en_name: "Financial Mathematics",
    },
  ],
};

export default dataTableData;
