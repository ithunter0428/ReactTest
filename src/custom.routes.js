// Additional Routes which not be showed in SideBar.
import SignInBasic from "layouts/authentication/sign-in/basic";
import AppUserDetails from "layouts/appuser/details";
import CommunityDetails from "layouts/community/details";
import PostDetails from "layouts/post/details";
import NewAdminUser from "layouts/adminuser/new";
import SchoolForm from "layouts/metadata/school/new";
import SkillForm from "layouts/metadata/skill/new";
import DegreeForm from "layouts/metadata/degree/new";
import MajorForm from "layouts/metadata/major/new";
import HobbyForm from "layouts/metadata/hobby/new";

const routes = [
  // Sign IN Route
  {
    route: "/authentication/sign-in",
    component: <SignInBasic />,
    key: "sign-in",
  },
  // App User Details Route
  {
    route: "/user/details",
    component: <AppUserDetails />,
    key: "user-details",
  },
  // Community Details Route
  {
    route: "/community/details",
    component: <CommunityDetails />,
    key: "community-details",
  },
  // Post Details Route
  {
    route: "/post/details",
    component: <PostDetails />,
    key: "post-details",
  },
  // Add Admin User Route
  {
    route: "/admin/add",
    component: <NewAdminUser />,
    key: "new-admin-user",
  },
  // Add or Update School Route
  {
    route: "/metadata/school/addOrUpdate",
    component: <SchoolForm />,
    key: "school-add-update",
  },
  // Add or Update Degree Route
  {
    route: "/metadata/degree/addOrUpdate",
    component: <DegreeForm />,
    key: "degree-add-update",
  },
  // Add or Update Major Route
  {
    route: "/metadata/major/addOrUpdate",
    component: <MajorForm />,
    key: "major-add-update",
  },
  // Add or Update Skill Route
  {
    route: "/metadata/skill/addOrUpdate",
    component: <SkillForm />,
    key: "skill-add-update",
  },
  // Add or Update Hobby Route
  {
    route: "/metadata/hobby/addOrUpdate",
    component: <HobbyForm />,
    key: "hobby-add-update",
  },
];

export default routes;
