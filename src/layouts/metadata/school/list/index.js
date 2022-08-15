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
import { Link } from "react-router-dom";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
// import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// Data
import dataTableData from "layouts/metadata/school/list/data/dataTableData";

function UserList() {
  const [key, setKey] = useState("");
  // const [currentRow, setCurrentRow] = useState(-1);
  const [open, setOpen] = useState(false);
  // const [category, setCategory] = useState('全部')

  const handleSearch = () => {
    // dataTableData.rows = [];
  };

  const deleteRow = () => {
    setOpen(true);
  };

  const handleDelete = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox my={3}>
        <Card>
          <MDBox p={3} lineHeight={1}>
            <MDBox mt={1}>
              {/* Tool Bar */}
              <MDBox mt={1}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={3}>
                    {/* Search Input */}
                    <MDBox mb={2}>
                      <MDInput
                        label="搜名称"
                        placeholder="搜名称"
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
          <Grid item xs={12} md={12} sx={{ textAlign: "right" }} mb={2} mr={2}>
            <Link to="/metadata/school/addOrUpdate">
              <MDButton variant="gradient" color="success">
                <Icon>add</Icon>&nbsp; 新建学校
              </MDButton>
            </Link>
          </Grid>
          <DataTable table={dataTableData(deleteRow)} entriesPerPage={false} />
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Confirm</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Do you really want to delete this data?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <MDButton autoFocus onClick={handleClose}>
                No
              </MDButton>
              <MDButton onClick={handleDelete}>Yes</MDButton>
            </DialogActions>
          </Dialog>
        </Card>
      </MDBox>
    </DashboardLayout>
  );
}

export default UserList;
