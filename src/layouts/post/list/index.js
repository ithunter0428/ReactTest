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
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Autocomplete from "@mui/material/Autocomplete";

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
import dataTableData from "layouts/post/list/data/dataTableData";
import { getList } from "api/post";

function UserList() {
  const [key, setKey] = useState("");
  const [pageNum, setPageNum] = useState(0);
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [status, setStatus] = useState(0);
  // Load Data
  const getTableData = async (pageN, pageS, k, stat) => {
    const res = await getList(pageN, pageS, k, stat);
    setData(res.msg.data);
    setTotalCount(res.msg.total_count);
    return res;
  };

  useEffect(() => {
    getTableData(pageNum, pageSize, key, status);
    // setPageNum()
  }, [pageNum]);

  const handleSearch = () => {
    setPageNum(0);
    getTableData(0, pageSize, key, status);
  };

  const handlePageChange = (page) => {
    setPageNum(page);
    getTableData(page, pageSize, key, status);
  };

  // When Page Size is changed
  const handlePageSizeChange = (size) => {
    setPageNum(0);
    setPageSize(size);
    getTableData(0, size, key, status);
  };

  // When State change
  const handleStateChange = (event, str) => {
    if (str === "全部") setStatus(0);
    if (str === "正常") setStatus(1);
    if (str === "已禁用") setStatus(-1);
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
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                        fullWidth
                      />
                    </MDBox>
                  </Grid>
                  {/* Filter */}
                  <Grid item xs={12} sm={2} ml={3} sx={{ mt: 1 }}>
                    <Autocomplete
                      defaultValue="全部"
                      options={["全部", "日常", "招募", "看法", "活动", "项目", "转发"]}
                      onChange={handleStateChange}
                      renderInput={(params) => <MDInput {...params} variant="standard" />}
                    />
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
            table={dataTableData(data)}
            activePage={pageNum}
            totalCount={totalCount}
            onPageChange={handlePageChange}
            onPageSizeChange={handlePageSizeChange}
          />
        </Card>
      </MDBox>
    </DashboardLayout>
  );
}

export default UserList;
