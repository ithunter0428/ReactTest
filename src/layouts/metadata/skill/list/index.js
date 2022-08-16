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

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// import Autocomplete from "@mui/material/Autocomplete";
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

// Data
import dataTableData from "layouts/metadata/skill/list/data/dataTableData";

import { getList, del } from "api/skill";
import DeleteConfirmDlg from "components/DeleteConfirmDlg";
import AlertMessage from "components/AlertMessage";

function UserList() {
  const [key, setKey] = useState("");
  const [pageNum, setPageNum] = useState(0);
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [dlgOpen, setDlgOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const [curRow, setCurRow] = useState(-1);

  const getTableData = async (pageN, pageS, k) => {
    const result = await getList(pageN, pageS, k);
    if (result.res_code < 0) {
      setAlertSeverity("error");
      setAlertMessage(result.msg);
      setAlertOpen(true);
      return [];
    }
    setData(result.msg.data);
    setTotalCount(result.msg.total_count);
    return data;
  };

  useEffect(() => {
    getTableData(pageNum, pageSize, key);
  }, [pageNum]);

  const handleSearch = () => {
    setPageNum(0);
    getTableData(0, pageSize, key);
  };

  const handlePageChange = (page) => {
    setPageNum(page);
    getTableData(page, pageSize, key);
  };

  const handlePageSizeChange = (size) => {
    setPageNum(0);
    setPageSize(size);
    getTableData(0, size, key);
  };

  const deleteRow = (id) => {
    setCurRow(id);
    setDlgOpen(true);
  };

  const handleDelete = async () => {
    const result = await del(curRow);
    if (result.res_code < 0) {
      setAlertSeverity("error");
      setAlertMessage(result.msg);
    } else {
      setAlertSeverity("success");
      setAlertMessage("Successfully deleted");
      getTableData(pageNum, pageSize, key);
    }
    setAlertOpen(true);
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
                  {/* Filter */}
                  {/* <Grid item xs={12} sm={2} ml={3} sx={{ mt: 1 }}>
                    <Autocomplete
                      defaultValue="全部"
                      options={["全部"]}
                      renderInput={(params) => <MDInput {...params} variant="standard" />}
                    />
                  </Grid> */}
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
            <Link to="/metadata/skill/addOrUpdate">
              <MDButton variant="gradient" color="success">
                <Icon>add</Icon>&nbsp; 新增技能
              </MDButton>
            </Link>
          </Grid>
          <DataTable
            table={dataTableData(data, deleteRow)}
            activePage={pageNum}
            totalCount={totalCount}
            onPageSizeChange={handlePageSizeChange}
            onPageChange={handlePageChange}
          />
          <DeleteConfirmDlg open={dlgOpen} setOpen={setDlgOpen} onDelete={handleDelete} />
          <AlertMessage
            open={alertOpen}
            setOpen={setAlertOpen}
            severity={alertSeverity}
            message={alertMessage}
          />
        </Card>
      </MDBox>
    </DashboardLayout>
  );
}

export default UserList;
