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

import IdCell from "layouts/appuser/details/components/IdCell";
import DefaultCell from "layouts/appuser/details/components/DefaultCell";
import StatusCell from "layouts/appuser/details/components/StatusCell";

import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

const dataTableData = {
  columns: [
    { Header: "UserId", accessor: "id", Cell: ({ value }) => <IdCell id={value} /> },
    {
      Header: "phoneNumber",
      accessor: "phone",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    {
      Header: "name",
      accessor: "name",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    {
      Header: "Verify Status",
      accessor: "verified_status",
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
    {
      Header: "AllFilled",
      accessor: "filled",
      Cell: ({ value }) => {
        let status;

        if (value === "filled") {
          status = <StatusCell icon="done" color="success" status="Filled" />;
        } else {
          status = <StatusCell icon="close" color="error" status="Not" />;
        }

        return status;
      },
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: (props) => {
        let status;
        if (props.value === "unblocked") {
          status = <StatusCell icon="done" color="success" status="Unblocked" />;
        } else {
          status = <StatusCell icon="close" color="error" status="Blocked" />;
        }

        return status;
      },
    },
    {
      Header: "RegTime",
      accessor: "reg_time",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    {
      Header: "",
      accessor: "action",
      Cell: () => (
        <MDBox mt={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <MDBox mb={1}>
                <Link to="/user/details">
                  <MDButton variant="outlined" color="dark">
                    Details
                  </MDButton>
                </Link>
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={4} ml={3}>
              <MDBox mb={1}>
                <MDButton variant="outlined" color="dark">
                  Block
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
