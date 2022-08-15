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
import { useLocation } from "react-router-dom";
// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
// import MDTypography from "components/MDTypography";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Material Dashboard 2 PRO React examples
import DataTable from "examples/Tables/DataTable";

// Data
import dataTableData from "layouts/community/details/table/data/dataTableData";
// API
import { getUserList } from "api/community";

function CommunityUserList({ communityName }) {
  // Location
  const location = useLocation();
  // State
  const [key, setKey] = useState("");
  const [pageNum, setPageNum] = useState(0);
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  // Load Data
  const getTableData = async (pageN, pageS, k) => {
    const id = location.search.replace("?id=", "");
    const res = await getUserList(pageN, pageS, k, id);
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
      <DataTable
        table={dataTableData(data, communityName)}
        activePage={pageNum}
        totalCount={totalCount}
        onPageSizeChange={handlePageSizeChange}
        onPageChange={handlePageChange}
      />
    </MDBox>
  );
}
// Setting default values for the props of DataTable
CommunityUserList.defaultProps = {
  communityName: "",
};

// Typechecking props for the DataTable
CommunityUserList.propTypes = {
  communityName: PropTypes.string,
};

export default CommunityUserList;
