// Additional Routes which not be showed in SideBar.
import SignInBasic from "layouts/authentication/sign-in/basic";
import AppUserDetails from "layouts/appuser/details";
import CommunityDetails from "layouts/community/details";
import PostDetails from "layouts/post/details";
import NewAdminUser from "layouts/adminuser/new";

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
];

export default routes;
