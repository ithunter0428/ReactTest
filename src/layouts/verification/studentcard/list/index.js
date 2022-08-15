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

import { useEffect, useState } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
// import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

import { getList, setState } from "api/studentcard";
// Data
import dataTableData from "layouts/verification/studentcard/list/data/dataTableData";

function StudentCardList() {
  const [key, setKey] = useState("");
  const [pageNum, setPageNum] = useState(0);
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  // Load Data
  const getTableData = async (pageN, pageS, k) => {
    const res = await getList(pageN, pageS, k);
    setData(res.msg.data);
    setTotalCount(res.msg.total_count);
    return res;
  };

  useEffect(() => {
    getTableData(pageNum, pageSize, key);
    // setPageNum()
  }, [pageNum]);

  const handleSearch = () => {
    setPageNum(0);
    getTableData(0, pageSize, key);
  };

  const handlePageChange = (page) => {
    setPageNum(page);
    getTableData(page, pageSize, key);
  };

  // When Page Size is changed
  const handlePageSizeChange = (size) => {
    setPageNum(0);
    setPageSize(size);
    getTableData(0, size, key);
  };
  // Call API for verification
  const handleState = async (id, state) => {
    const res = await setState(id, state);
    if (res.res_code === 1) alert("ok");
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
                        label="捜名称或手机号"
                        placeholder="捜名称或手机号"
                        variant="outlined"
                        text={key}
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
          <DataTable
            table={dataTableData(data, handleState)}
            activePage={pageNum}
            totalCount={totalCount}
            onPageSizeChange={handlePageSizeChange}
            onPageChange={handlePageChange}
          />
          {/* Dialog */}
          <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Success</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Your password is changed successfully.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <MDButton onClick={handleDelete}>OK</MDButton>
            </DialogActions>
          </Dialog>
        </Card>
      </MDBox>
    </DashboardLayout>
  );
}

export default StudentCardList;
