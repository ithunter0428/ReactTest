// Material Dashboard
import Dashboard from "layouts/dashboards";
import SignInBasic from "layouts/authentication/sign-in/basic";
import AppUserList from "layouts/appuser/list";
import CardVerificationList from "layouts/verification/studentcard/list";
import CommunityList from "layouts/community/list";
import PostList from "layouts/post/list";
import AdminUserList from "layouts/adminuser/list";
import SchoolManagement from "layouts/metadata/school/list";
import DegreeManagement from "layouts/metadata/degree/list";
import MajorManagement from "layouts/metadata/major/list";
import SkillManagement from "layouts/metadata/skill/list";
import HobbyManagement from "layouts/metadata/hobby/list";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "统计分析",
    key: "mainpage",
    route: "/mainpage",
    component: <Dashboard />,
    icon: <Icon fontSize="medium">dashboard</Icon>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "审核管理",
    key: "verification",
    icon: <Icon fontSize="medium">domainverification</Icon>,
    collapse: [
      {
        name: "学生卡审核",
        key: "student",
        route: "/verification/student",
        component: <CardVerificationList />,
      },
    ],
  },
  {
    type: "collapse",
    name: "APP用户管理",
    key: "user",
    route: "/user",
    icon: <Icon fontSize="medium">person</Icon>,
    component: <AppUserList />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "元数据管理",
    key: "metadata",
    icon: <Icon fontSize="medium">folder</Icon>,
    route: "/metadata",
    collapse: [
      {
        name: "学校管理",
        key: "school",
        route: "/metadata/school",
        component: <SchoolManagement />,
      },
      {
        name: "学位管理",
        key: "degree",
        route: "/metadata/degree",
        component: <DegreeManagement />,
      },
      {
        name: "专业管理",
        key: "major",
        route: "/metadata/major",
        component: <MajorManagement />,
      },
      {
        name: "技能管理",
        key: "skill",
        route: "/metadata/skill",
        component: <SkillManagement />,
      },
      {
        name: "爱好管理",
        key: "hobby",
        route: "/metadata/hobby",
        component: <HobbyManagement />,
      },
    ],
  },
  {
    type: "collapse",
    name: "社区管理",
    key: "community",
    route: "/community",
    icon: <Icon fontSize="medium">people</Icon>,
    component: <CommunityList />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "帖子管理",
    key: "post",
    route: "/post",
    icon: <Icon fontSize="medium">approval</Icon>,
    component: <PostList />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "举报管理",
    key: "report",
    route: "/repoprt",
    icon: <Icon fontSize="medium">report</Icon>,
    component: <SignInBasic />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "后台用户管理",
    key: "admin",
    route: "/admin",
    icon: <Icon fontSize="medium">admin_panel_settings</Icon>,
    component: <AdminUserList />,
    noCollapse: true,
  },
];

export default routes;
