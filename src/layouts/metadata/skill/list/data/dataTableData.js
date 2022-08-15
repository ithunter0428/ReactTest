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

const dataTableData = {
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
      skill_id: 1,
      name: "分析能力",
      img_url: "http://oss.ban-qu.com/Analytical%20Skills%20icon.png",
      en_name: "Analytical Skills ",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      skill_id: 2,
      name: "数据库设计",
      img_url: "http://oss.ban-qu.com/Database%20Design%20icon.png",
      en_name: "Database Design",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      skill_id: 3,
      name: "数据库管理",
      img_url: "http://oss.ban-qu.com/Database%20Management%20icon.png",
      en_name: "Database Management",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      skill_id: 4,
      name: "算法",
      img_url: "http://oss.ban-qu.com/Algorithms%20icon.png",
      en_name: "Algorithms",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      skill_id: 5,
      name: "大数据",
      img_url: "http://oss.ban-qu.com/Big%20Data%20icon.png",
      en_name: "Big Data",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      skill_id: 6,
      name: "编译统计",
      img_url: "http://oss.ban-qu.com/Compiling%20Statistics%20icon.png",
      en_name: "Compiling Statistics",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      skill_id: 7,
      name: "计算",
      img_url: "http://oss.ban-qu.com/Calculating%20icon.png",
      en_name: "Calculating",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      skill_id: 8,
      name: "数据挖掘",
      img_url: "http://oss.ban-qu.com/Data%20Mining%20icon.png",
      en_name: "Data Mining",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      skill_id: 9,
      name: "造型",
      img_url: "http://oss.ban-qu.com/Modeling%20icon.png",
      en_name: "Modeling",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      skill_id: 10,
      name: "数据分析",
      img_url: "http://oss.ban-qu.com/Data%20Analytics%20icon.png",
      en_name: "Data Analytics",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      skill_id: 11,
      name: "统计分析",
      img_url: "http://oss.ban-qu.com/Statistical%20Analysis%20icon.png",
      en_name: "Statistical Analysis",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      skill_id: 12,
      name: "修改",
      img_url: "http://oss.ban-qu.com/Modification%20icon.png",
      en_name: "Modification",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      skill_id: 13,
      name: "应用",
      img_url: "http://oss.ban-qu.com/Applications%20icon.png",
      en_name: "Applications",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      skill_id: 14,
      name: "定量研究",
      img_url: "http://oss.ban-qu.com/Quantitative%20Research%20icon.png",
      en_name: "Quantitative Research",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      skill_id: 15,
      name: "定量报告",
      img_url: "http://oss.ban-qu.com/Quantitative%20Reports%20icon.png",
      en_name: "Quantitative Reports",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      skill_id: 16,
      name: "文档",
      img_url: "http://oss.ban-qu.com/Documentation%20icon.png",
      en_name: "Documentation",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      skill_id: 17,
      name: "调试",
      img_url: "http://oss.ban-qu.com/Debugging%20icon.png",
      en_name: "Debugging",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      skill_id: 18,
      name: "发展",
      img_url: "http://oss.ban-qu.com/Development%20icon.png",
      en_name: "Development",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      skill_id: 19,
      name: "配置",
      img_url: "http://oss.ban-qu.com/Configuration%20icon.png",
      en_name: "Configuration",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      skill_id: 20,
      name: "客户支持",
      img_url: "http://oss.ban-qu.com/Customer%20Support%20icon.png",
      en_name: "Customer Support",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
  ],
};

export default dataTableData;
