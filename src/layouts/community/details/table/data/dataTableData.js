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

const dataTableData = (data, communityName) => {
  const tableData = {
    columns: [
      {
        Header: "用户ID",
        accessor: "user_id",
        width: "15%",
        Cell: ({ value }) => <IdCell id={value.toString()} />,
      },
      {
        Header: "姓名",
        accessor: "name",
        width: "20%",
        Cell: ({ value }) => <DefaultCell value={value.toString()} />,
      },
      {
        Header: "手机号",
        accessor: "phone",
        width: "15%",
        Cell: ({ value }) => <DefaultCell value={value.toString()} />,
      },
      {
        Header: "加入社区时间",
        width: "15%",
        Cell: () => <DefaultCell value={communityName} />,
      },
    ],

    rows: data,
  };
  return tableData;
};

export default dataTableData;
