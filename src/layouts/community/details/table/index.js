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

import { useState } from "react";
// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
// import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import DataTable from "examples/Tables/DataTable";

// Data
import dataTableData from "layouts/community/details/table/data/dataTableData";

function UserList() {
  const [key, setKey] = useState("");
  // const [category, setCategory] = useState('全部')
  const handleSearch = () => {
    // dataTableData.rows = [];
  };
  return (
    <MDBox my={3} mr={15}>
      <MDBox p={3} lineHeight={1}>
        <MDBox mt={1}>
          {/* Tool Bar */}
          <MDBox mt={1}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={3}>
                {/* Search Input */}
                <MDBox mb={2}>
                  <MDInput
                    placeholder="捜名称或手机号"
                    variant="outlined"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    fullWidth
                  />
                </MDBox>
              </Grid>
              {/* Search Button */}
              <Grid item xs={12} sm={5} ml={3}>
                <MDBox mb={1}>
                  <MDButton variant="gradient" color="info" onClick={handleSearch}>
                    搜索
                  </MDButton>
                </MDBox>
              </Grid>
            </Grid>
          </MDBox>
        </MDBox>
      </MDBox>
      <DataTable table={dataTableData} entriesPerPage={false} />
    </MDBox>
  );
}

export default UserList;
