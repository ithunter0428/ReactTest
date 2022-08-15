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
      Cell: ({ value }) => {
        let status;

        if (value === "unblocked") {
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
