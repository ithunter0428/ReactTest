// Material Dashboard
import SignInBasic from "layouts/authentication/sign-in/basic";
import AppUserDetails from "layouts/appuser/details";

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
];

export default routes;
