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
/* eslint-disable camelcase */
// ProductsList page components

import { Link } from "react-router-dom";

import IdCell from "layouts/metadata/school/list/components/IdCell";
import DefaultCell from "layouts/metadata/school/list/components/DefaultCell";
import CustomerCell from "layouts/metadata/school/list/components/CustomerCell";

import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

const dataTableData = {
  columns: [
    {
      Header: "学校ID",
      accessor: "school_id",
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
      Header: "",
      accessor: "action",
      Cell: ({ row }) => (
        <MDBox mt={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <MDBox mb={1}>
                <Link to={`/metadata/school/addOrUpdate?id=${row.original.school_id}`}>
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
      school_id: 1,
      name: "北京大学 ",
      img_url: "https://oss.ban-qu.com/university/Peking%20University%20logo.png",
      en_name: "Peking University",
    },
    {
      school_id: 2,
      name: "中国人民大学 ",
      img_url: "https://oss.ban-qu.com/university/Renmin%20University%20of%20China%20logo.png",
      en_name: "Renmin University of China",
    },
    {
      school_id: 3,
      name: "清华大学 ",
      img_url: "https://oss.ban-qu.com/university/Tsinghua%20University%20logo.png",
      en_name: "Tsinghua University",
    },
    {
      school_id: 4,
      name: "北京交通大学 ",
      img_url: "https://oss.ban-qu.com/university/Beijing%20Jiaotong%20University%20logo.png",
      en_name: "Beijing Jiaotong University",
    },
    {
      school_id: 5,
      name: "北京工业大学 ",
      img_url:
        "https://oss.ban-qu.com/university/Beijing%20University%20of%20Technology%20logo.png",
      en_name: "Beijing University of Technology",
    },
    {
      school_id: 6,
      name: "北京航空航天大学 ",
      img_url:
        "https://oss.ban-qu.com/university/Beijing%20University%20of%20Aeronautics%20and%20Astronauts%20logo.png",
      en_name: "Beijing University of Aeronautics and Astronauts",
    },
    {
      school_id: 7,
      name: "北京理工大学 ",
      img_url: "https://oss.ban-qu.com/university/Beijing%20Institute%20of%20Technology%20logo.png",
      en_name: "Beijing Institute of Technology",
    },
    {
      school_id: 8,
      name: "北京科技大学 ",
      img_url:
        "https://oss.ban-qu.com/university/University%20of%20Science%20and%20Technology%20Beijing%20logo.png",
      en_name: "University of Science and Technology Beijing",
    },
    {
      school_id: 9,
      name: "北方工业大学 ",
      img_url:
        "https://oss.ban-qu.com/university/North%20China%20University%20of%20Technology%20logo.png",
      en_name: "North China University of Technology",
    },
    {
      school_id: 10,
      name: "北京化工大学 ",
      img_url:
        "https://oss.ban-qu.com/university/Beijing%20University%20of%20Chemical%20Technology%20logo.png",
      en_name: "Beijing University of Chemical Technology",
    },
    {
      school_id: 11,
      name: "北京工商大学 ",
      img_url:
        "https://oss.ban-qu.com/university/Beijing%20Technology%20and%20Business%20University%20logo.png",
      en_name: "Beijing Technology and Business University",
    },
    {
      school_id: 12,
      name: "北京服装学院 ",
      img_url:
        "https://oss.ban-qu.com/university/Beijing%20Institute%20of%20Fashion%20Technology%20logo.png",
      en_name: "Beijing Institute of Fashion Technology",
    },
    {
      school_id: 13,
      name: "北京邮电大学 ",
      img_url:
        "https://oss.ban-qu.com/university/Beijing%20University%20of%20Posts%20and%20Telecommunications%20logo.png",
      en_name: "Beijing University of Posts and Telecommunications",
    },
    {
      school_id: 14,
      name: "北京印刷学院 ",
      img_url:
        "https://oss.ban-qu.com/university/Beijing%20Institute%20of%20Graphic%20Communication%20logo.png",
      en_name: "Beijing Institute of Graphic Communication",
    },
    {
      school_id: 15,
      name: "北京建筑大学 ",
      img_url:
        "https://oss.ban-qu.com/university/Beijing%20University%20of%20Civil%20Engineering%20and%20Architecture%20logo.png",
      en_name: "Beijing University of Civil Engineering and Architecture",
    },
    {
      school_id: 16,
      name: "北京石油化工学院 ",
      img_url:
        "https://oss.ban-qu.com/university/Beijing%20Institute%20of%20Petrochemical%20Technology%20logo.png",
      en_name: "Beijing Institute of Petrochemical Technology",
    },
    {
      school_id: 17,
      name: "北京电子科技学院 ",
      img_url:
        "https://oss.ban-qu.com/university/Beijing%20Electronic%20Science%20and%20Technology%20Institute%20logo.png",
      en_name: "Beijing Electronic Science and Technology Institute",
    },
    {
      school_id: 18,
      name: "中国农业大学 ",
      img_url: "https://oss.ban-qu.com/university/China%20Agricultural%20University%20logo.png",
      en_name: "China Agricultural University",
    },
    {
      school_id: 19,
      name: "北京农学院 ",
      img_url:
        "https://oss.ban-qu.com/university/Beijing%20University%20of%20Agriculture%20logo.png",
      en_name: "Beijing University of Agriculture",
    },
    {
      school_id: 20,
      name: "北京林业大学 ",
      img_url: "https://oss.ban-qu.com/university/Beijing%20Forestry%20University%20logo.png",
      en_name: "Beijing Forestry University",
    },
  ],
};

export default dataTableData;
