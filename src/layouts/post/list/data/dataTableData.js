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

import IdCell from "layouts/post/list/components/IdCell";
import DefaultCell from "layouts/post/list/components/DefaultCell";
import StatusCell from "layouts/post/list/components/StatusCell";

import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

const postTypes = ["", "日常", "招募", "看法", "活动", "项目", "转发"];

const dataTableData = {
  columns: [
    {
      Header: "帖子ID",
      width: "10%",
      accessor: "post_id",
      Cell: ({ value }) => <IdCell id={value} />,
    },
    {
      Header: "类型",
      accessor: "type",
      width: "15%",
      Cell: ({ value }) => <DefaultCell value={postTypes[value]} />,
    },
    {
      Header: "内容",
      accessor: "content",
      width: 200,
      Cell: ({ value }) => <MDBox style={{ width: 250 }}>{value}</MDBox>,
    },
    {
      Header: "图片数量",
      accessor: "resource_count",
      width: "10%",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    {
      Header: "状态",
      accessor: "state",
      width: "10%",
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
      Header: "创建人",
      width: "15%",
      accessor: "creator",
      Cell: ({ value }) => <DefaultCell value={value} />,
    },
    {
      Header: "",
      accessor: "action",
      width: "15%",
      Cell: ({ row }) => (
        <MDBox mt={2} style={{ width: 220 }}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={5}>
              <MDBox mb={1}>
                <Link to={`/post/details?id=${row.original.post_id}`}>
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
                    <Icon color="dark">block</Icon>&nbsp;启用
                  </MDButton>
                )}
                {row.original.state !== 1 && (
                  <MDButton variant="outlined" color="dark" size="small">
                    <Icon color="info">check</Icon>&nbsp;禁用
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
      post_id: 1,
      type: 1,
      content: "苏测post1",
      state: 1,
      creator: "苏玉博",
      resource_count: 1,
    },
    {
      post_id: 2,
      type: 1,
      content: "苏测post2",
      state: 1,
      creator: "苏玉博",
      resource_count: 1,
    },
    {
      post_id: 4,
      type: 1,
      content: "苏测post3",
      state: 1,
      creator: "苏玉博",
      resource_count: 1,
    },
    {
      post_id: 5,
      type: 6,
      content: "苏测post转发 type6",
      state: 1,
      creator: "苏玉博",
      resource_count: 1,
    },
    {
      post_id: 15,
      type: 3,
      content: "测试发布一下社区",
      state: 1,
      creator: "杨总",
      resource_count: 2,
    },
    {
      post_id: 37,
      type: 1,
      content:
        "前几天写了一篇文章聊了聊字节上线的一款新产品「头条号外」，后台很多读者留言说这款 App 有点像「小红书」。\n不过，头条号外和小红书在产品定位上是有本质区别的。前者是资讯内容社区，后者是兴趣种草社区。\n其实字节也有做类似小红书的产品，应该是在 2018 年的时候上线过一款叫「新草」的 App，不过一年后就下线了。\n对于兴趣种草社区产品，字节也一直没死心。\n7 月初的时候上线了一款叫「可颂」的 App，不过一个月时间不到就从应用市场下线了。\n虽然应用市场已经找不到了，但已经下载的用户还是可以用。",
      state: 1,
      creator: "黄浩彬",
      resource_count: 1,
    },
    // {
    //   post_id: 39,
    //   type: 6,
    //   content:
    //     "通知提出，各级协调劳动关系三方要充分认识做好高温天气劳动保护工作的重要性和紧迫性，加强组织领导，密切协同配合，指导和督促用人单位落实好高温天气下保障劳动者合法权益的主体责任。包括健全防暑降温工作制度，加强劳动者身体健康检查，合理调整劳动者工作时间，科学确定劳动强度；全面改善劳动条件，开展高温天气作业危害及防护等职业健康知识培训；完善劳动者高温天气作业时突发疾病应急处置预案，及时组织救治，最大限度减少高温天气作业对劳动者身体健康带来的危害，全力保障劳动者生命安全和身体健康。",
    //   state: 1,
    //   creator: "于思楠",
    //   resource_count: 0,
    // },
  ],
};

export default dataTableData;
