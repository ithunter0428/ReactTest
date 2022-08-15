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
import moment from "moment";

import IdCell from "layouts/appuser/list/components/IdCell";
import DefaultCell from "layouts/appuser/list/components/DefaultCell";
import StatusCell from "layouts/appuser/list/components/StatusCell";

import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

const dataTableData = {
  columns: [
    { Header: "用户ID", accessor: "app_user_id", Cell: ({ value }) => <IdCell id={value} /> },
    {
      Header: "手机号",
      accessor: "phone",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    {
      Header: "姓名",
      accessor: "name",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    {
      Header: "学生卡验证状态",
      accessor: "verify_state",
      Cell: ({ value }) => <DefaultCell value={value} />,
      //   let status;
      //   if (value === 1) {
      //     status = <StatusCell icon="done" color="success" status="Verified" />;
      //   } else {
      //     status = <StatusCell icon="close" color="error" status="Unverified" />;
      //   }

      //   return status;
      // },
    },
    {
      Header: "是否完善信息",
      accessor: "is_perfect_info",
      Cell: (props) => {
        let status;
        if (props.value === 1) {
          status = <StatusCell icon="done" color="success" status="是" />;
        } else {
          status = <StatusCell icon="close" color="error" status="否" />;
        }

        return status;
      },
    },
    {
      Header: "状态 （正常 | 已禁用）",
      accessor: "state",
      Cell: ({ value }) => {
        let status;
        if (value === 1) {
          status = <StatusCell icon="done" color="success" status="正常" />;
        } else {
          status = <StatusCell icon="close" color="error" status="已禁用" />;
        }

        return status;
      },
    },
    {
      Header: "注册时间",
      accessor: "create_time",
      Cell: ({ value }) => <DefaultCell value={moment(value).format("YYYY-MM-DD HH:MM")} />,
    },
    {
      Header: "",
      accessor: "action",
      Cell: ({ row }) => (
        <MDBox mt={2} style={{ width: 200 }}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={5}>
              <MDBox mb={1}>
                <Link to={`/user/details?id=${row.original.app_user_id}`}>
                  <MDButton variant="outlined" color="dark" size="small">
                    详情
                  </MDButton>
                </Link>
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={7}>
              <MDBox mb={1}>
                {row.original.state === 1 && (
                  <MDButton variant="outlined" color="dark" size="small">
                    <Icon color="dark">block</Icon>&nbsp;禁用
                  </MDButton>
                )}
                {row.original.state !== 1 && (
                  <MDButton variant="outlined" color="dark" size="small">
                    <Icon color="info">check</Icon>&nbsp;启用
                  </MDButton>
                )}
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      ),
    },
  ],

  rows: [
    {
      app_user_id: 1,
      phone: "15810018878",
      name: "苏玉博",
      verify_state: 2,
      is_perfect_info: 1,
      state: 1,
      create_time: "2022-06-29T09:33:07.000Z",
    },
    {
      app_user_id: 3,
      phone: "13300001111",
      name: "测1",
      verify_state: -1,
      is_perfect_info: 0,
      state: 1,
      create_time: "2022-07-04T12:59:21.000Z",
    },
    {
      app_user_id: 4,
      phone: "13300002222",
      name: "测2",
      verify_state: -1,
      is_perfect_info: 0,
      state: 1,
      create_time: "2022-07-05T03:47:45.000Z",
    },
    {
      app_user_id: 5,
      phone: "15827063625",
      name: "杨总",
      verify_state: 1,
      is_perfect_info: 1,
      state: 1,
      create_time: "2022-07-05T09:35:00.000Z",
    },
    {
      app_user_id: 6,
      phone: "13300003333",
      name: "测3",
      verify_state: -1,
      is_perfect_info: 0,
      state: 1,
      create_time: "2022-07-06T06:33:45.000Z",
    },
    {
      app_user_id: 8,
      phone: "13520663827",
      name: "黄浩彬",
      verify_state: 1,
      is_perfect_info: 1,
      state: 1,
      create_time: "2022-07-10T05:10:11.000Z",
    },
    {
      app_user_id: 9,
      phone: "13001914898",
      name: "韩思泓",
      verify_state: 1,
      is_perfect_info: 1,
      state: 1,
      create_time: "2022-07-10T06:48:18.000Z",
    },
    {
      app_user_id: 10,
      phone: "13753587467",
      name: "张田勇",
      verify_state: -1,
      is_perfect_info: 1,
      state: 1,
      create_time: "2022-07-11T03:01:06.000Z",
    },
    {
      app_user_id: 11,
      phone: "13366747125",
      name: "伍佩佩",
      verify_state: -1,
      is_perfect_info: 1,
      state: 1,
      create_time: "2022-07-11T03:04:24.000Z",
    },
    {
      app_user_id: 12,
      phone: "19174685587",
      name: "test123",
      verify_state: -1,
      is_perfect_info: 1,
      state: 1,
      create_time: "2022-07-11T03:23:27.000Z",
    },
    {
      app_user_id: 13,
      phone: "13911936763",
      name: "李嘉弘",
      verify_state: 1,
      is_perfect_info: 1,
      state: 1,
      create_time: "2022-07-11T03:27:37.000Z",
    },
    {
      app_user_id: 14,
      phone: "17742872671",
      name: "彭湉睿",
      verify_state: -1,
      is_perfect_info: 1,
      state: 1,
      create_time: "2022-07-11T03:30:35.000Z",
    },
    {
      app_user_id: 15,
      phone: "18883710422",
      name: "蒋仁杰",
      verify_state: -1,
      is_perfect_info: 1,
      state: 1,
      create_time: "2022-07-11T03:32:57.000Z",
    },
    {
      app_user_id: 16,
      phone: "13601455622",
      name: "黄恒智",
      verify_state: 1,
      is_perfect_info: 1,
      state: 1,
      create_time: "2022-07-11T03:33:13.000Z",
    },
    {
      app_user_id: 17,
      phone: "13173690821",
      name: "李泓辰",
      verify_state: 1,
      is_perfect_info: 1,
      state: 1,
      create_time: "2022-07-11T03:33:30.000Z",
    },
    {
      app_user_id: 18,
      phone: "15589818012",
      name: "赵裕泓",
      verify_state: -1,
      is_perfect_info: 1,
      state: 1,
      create_time: "2022-07-11T03:34:16.000Z",
    },
    {
      app_user_id: 19,
      phone: "15589562076",
      name: "杨晁采",
      verify_state: 1,
      is_perfect_info: 1,
      state: 1,
      create_time: "2022-07-11T03:50:54.000Z",
    },
    {
      app_user_id: 20,
      phone: "13366747123",
      name: "ttt",
      verify_state: -1,
      is_perfect_info: 1,
      state: 1,
      create_time: "2022-07-11T04:04:04.000Z",
    },
    {
      app_user_id: 21,
      phone: "17634136279",
      name: "",
      verify_state: -1,
      is_perfect_info: 0,
      state: 1,
      create_time: "2022-07-11T04:06:23.000Z",
    },
    {
      app_user_id: 22,
      phone: "18600294854",
      name: "于思楠",
      verify_state: 1,
      is_perfect_info: 1,
      state: 1,
      create_time: "2022-07-12T07:27:49.000Z",
    },
  ],
};

export default dataTableData;
