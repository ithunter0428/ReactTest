import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from "prop-types";

function AuthProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    // If Session exist, Redirect to mainPage
    if (location.pathname === "/authentication/sign-in" && localStorage.getItem("token"))
      navigate("/mainpage");
    // If Session not exist, Redirect to Sign in
    if (!localStorage.getItem("token")) navigate("/authentication/sign-in");
  }, [location]);

  return children;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
