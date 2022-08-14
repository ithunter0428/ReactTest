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

import IdCell from "layouts/metadata/hobby/list/components/IdCell";
import DefaultCell from "layouts/metadata/hobby/list/components/DefaultCell";
import CustomerCell from "layouts/metadata/hobby/list/components/CustomerCell";

import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

const dataTableData = {
  columns: [
    {
      Header: "爱好ID",
      accessor: "hobby_id",
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
                <Link to={`/metadata/hobby/addOrUpdate?id=${row.original.hobby_id}`}>
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
      hobby_id: 1,
      name: "3D打印",
      img_url: "http://oss.ban-qu.com/hobby/flaticon%203D%20printing%20logo.png",
      en_name: "3D printing",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      hobby_id: 2,
      name: "杂技瑜伽",
      img_url: "http://oss.ban-qu.com/hobby/flaticon%20Acro%20yoga%20logo.png",
      en_name: "Acro yoga",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      hobby_id: 3,
      name: "演戏",
      img_url: "http://oss.ban-qu.com/hobby/flaticon%20Acting%20logo.png",
      en_name: "Acting",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      hobby_id: 4,
      name: "可动人偶",
      img_url: "http://oss.ban-qu.com/hobby/flaticon%20Action%20figure%20logo.png",
      en_name: "Action figure",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      hobby_id: 5,
      name: "航天",
      img_url: "http://oss.ban-qu.com/hobby/flaticon%20Aerospace%20logo.png",
      en_name: "Aerospace",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      hobby_id: 6,
      name: "合气道",
      img_url: "http://oss.ban-qu.com/hobby/flaticon%20Aikido%20logo.png",
      en_name: "Aikido",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      hobby_id: 7,
      name: "空中运动",
      img_url: "http://oss.ban-qu.com/hobby/flaticon%20Air%20sports%20logo.png",
      en_name: "Air sports",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      hobby_id: 8,
      name: "飞机定位",
      img_url: "http://oss.ban-qu.com/hobby/flaticon%20Aircraft%20spotting%20logo.png",
      en_name: "Aircraft spotting",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      hobby_id: 9,
      name: "气枪",
      img_url: "http://oss.ban-qu.com/hobby/flaticon%20Airsoft%20logo.png",
      en_name: "Airsoft",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      hobby_id: 10,
      name: "业余天文学",
      img_url: "http://oss.ban-qu.com/hobby/flaticon%20Amateur%20astronomy%20logo.png",
      en_name: "Amateur astronomy",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      hobby_id: 11,
      name: "游乐园参观",
      img_url: "http://oss.ban-qu.com/hobby/flaticon%20Amusement%20park%20visiting%20logo.png",
      en_name: "Amusement park visiting",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      hobby_id: 12,
      name: "动画片",
      img_url: "http://oss.ban-qu.com/hobby/flaticon%20Animation%20logo.png",
      en_name: "Animation",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      hobby_id: 13,
      name: "蚂蚁饲养",
      img_url: "http://oss.ban-qu.com/hobby/flaticon%20Ant-keeping%20logo.png",
      en_name: "Ant-keeping",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      hobby_id: 14,
      name: "仿古",
      img_url: "http://oss.ban-qu.com/hobby/flaticon%20Antiquing%20logo.png",
      en_name: "Antiquing",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      hobby_id: 15,
      name: "古物",
      img_url: "http://oss.ban-qu.com/hobby/flaticon%20Antiquities%20logo.png",
      en_name: "Antiquities",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      hobby_id: 16,
      name: "水族造景",
      img_url: "http://oss.ban-qu.com/hobby/flaticon%20Aqua%20scaping%20logo.png",
      en_name: "Aqua scaping",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      hobby_id: 17,
      name: "考古学",
      img_url: "http://oss.ban-qu.com/hobby/flaticon%20Archaeology%20logo.png",
      en_name: "Archaeology",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      hobby_id: 18,
      name: "射箭",
      img_url: "http://oss.ban-qu.com/hobby/flaticon%20Archery%20logo.png",
      en_name: "Archery",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      hobby_id: 19,
      name: "艺术收藏",
      img_url: "http://oss.ban-qu.com/hobby/flaticon%20Art%20collecting%20logo.png",
      en_name: "Art collecting",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
    {
      hobby_id: 20,
      name: "艺术",
      img_url: "http://oss.ban-qu.com/hobby/flaticon%20Art%20logo.png",
      en_name: "Art",
      create_user_id: 0,
      create_user_name: "系统创建",
    },
  ],
};

export default dataTableData;
