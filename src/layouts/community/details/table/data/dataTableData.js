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
import StatusCell from "layouts/community/details/table/components/StatusCell";

const dataTableData = {
  columns: [
    { Header: "用户ID", accessor: "id", width: "15%", Cell: ({ value }) => <IdCell id={value} /> },
    {
      Header: "姓名",
      accessor: "icon",
      width: "20%",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    {
      Header: "手机号",
      accessor: "name",
      width: "15%",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    {
      Header: "加入社区时间",
      accessor: "verified_status",
      width: "15%",
      Cell: ({ value }) => {
        let status;

        if (value === "verified") {
          status = <StatusCell icon="done" color="success" status="Verified" />;
        } else {
          status = <StatusCell icon="close" color="error" status="Unverified" />;
        }

        return status;
      },
    },
  ],

  rows: [
    {
      id: "#10421",
      phone: "156890234",
      reg_time: "1 Nov, 10:20 AM",
      satus: "blocked",
      verified_status: "verified",
      name: "Orlando Imieto",
      filled: "filled",
    },
    {
      id: "#10421",
      phone: "156890234",
      reg_time: "1 Nov, 10:20 AM",
      satus: "blocked",
      verified_status: "verified",
      name: "Orlando Imieto",
      filled: "filled",
    },
    {
      id: "#10421",
      phone: "156890234",
      reg_time: "1 Nov, 10:20 AM",
      satus: "blocked",
      verified_status: "verified",
      name: "Orlando Imieto",
      filled: "filled",
    },
    {
      id: "#10421",
      phone: "156890234",
      reg_time: "1 Nov, 10:20 AM",
      satus: "blocked",
      verified_status: "verified",
      name: "Orlando Imieto",
      filled: "filled",
    },
    {
      id: "#10421",
      phone: "156890234",
      reg_time: "1 Nov, 10:20 AM",
      satus: "blocked",
      verified_status: "verified",
      name: "Orlando Imieto",
      filled: "filled",
    },
    {
      id: "#10421",
      phone: "156890234",
      reg_time: "1 Nov, 10:20 AM",
      satus: "blocked",
      verified_status: "verified",
      name: "Orlando Imieto",
      filled: "filled",
    },
  ],
};

export default dataTableData;
