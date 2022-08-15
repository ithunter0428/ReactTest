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

import IdCell from "layouts/verification/studentcard/list/components/IdCell";
import DefaultCell from "layouts/verification/studentcard/list/components/DefaultCell";

import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

const dataTableData = {
  columns: [
    {
      Header: "用户ID",
      accessor: "to_user_id",
      width: "20%",
      Cell: ({ value }) => <IdCell id={value} />,
    },
    {
      Header: "手机号",
      accessor: "phone",
      width: "20%",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    {
      Header: "姓名",
      accessor: "name",
      width: "20%",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    {
      Header: "学生卡照片",
      accessor: "student_card_img_url",
      width: "20%",
      Cell: ({ value }) => (
        <MDBox component="img" src={value} alt="Product Image" shadow="lg" width="30px" />
      ),
    },
    {
      Header: "",
      accessor: "action",
      width: "20%",
      Cell: () => (
        <MDBox mt={2} style={{ width: 200 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <MDBox mb={1}>
                <MDButton variant="outlined" color="dark" size="small" fullWidth>
                  <Icon color="gray">block</Icon>&nbsp;通过
                </MDButton>
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={6}>
              <MDBox mb={1}>
                <MDButton variant="outlined" color="dark" size="small" fullWidth>
                  <Icon color="success">check</Icon>&nbsp;不通过
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
      to_user_id: 5,
      phone: "15827063625",
      name: "杨总",
      student_card_img_url:
        "https://banqu-v2.oss-accelerate.aliyuncs.com/banqu-android/1657442446279.jpg",
    },
    {
      to_user_id: 8,
      phone: "13520663827",
      name: "黄浩彬",
      student_card_img_url:
        "https://banqu-v2.oss-accelerate.aliyuncs.com/banquios/avatar/1657904527000.png",
    },
    {
      to_user_id: 9,
      phone: "13001914898",
      name: "韩思泓",
      student_card_img_url:
        "https://banqu-v2.oss-accelerate.aliyuncs.com/banquios/avatar/1658977313000.png",
    },
    {
      to_user_id: 13,
      phone: "13911936763",
      name: "李嘉弘",
      student_card_img_url:
        "https://banqu-v2.oss-accelerate.aliyuncs.com/banquios/avatar/1659672242000.png",
    },
    {
      to_user_id: 16,
      phone: "13601455622",
      name: "黄恒智",
      student_card_img_url:
        "https://banqu-v2.oss-accelerate.aliyuncs.com/banquios/avatar/1657935257000.png",
    },
  ],
};

export default dataTableData;
