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

import IdCell from "layouts/community/details/table/components/IdCell";
import DefaultCell from "layouts/community/details/table/components/DefaultCell";

const dataTableData = {
  columns: [
    {
      Header: "用户ID",
      accessor: "user_id",
      width: "15%",
      Cell: ({ value }) => <IdCell id={value} />,
    },
    {
      Header: "姓名",
      accessor: "name",
      width: "20%",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    {
      Header: "手机号",
      accessor: "phone",
      width: "15%",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    {
      Header: "加入社区时间",
      width: "15%",
      Cell: () => <DefaultCell value="区时间" />,
    },
  ],

  rows: [
    {
      user_id: 3,
      create_time: "2022-07-05T03:44:34.000Z",
      name: "测1",
      phone: "13300001111",
    },
    {
      user_id: 4,
      create_time: "2022-07-05T03:52:07.000Z",
      name: "测2",
      phone: "13300002222",
    },
    {
      user_id: 1,
      create_time: "2022-07-06T09:56:47.000Z",
      name: "苏玉博",
      phone: "15810018878",
    },
    {
      user_id: 5,
      create_time: "2022-07-10T08:42:31.000Z",
      name: "杨总",
      phone: "15827063625",
    },
    {
      user_id: 10,
      create_time: "2022-07-11T03:24:13.000Z",
      name: "张田勇",
      phone: "13753587467",
    },
  ],
};

export default dataTableData;
