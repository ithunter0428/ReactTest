import { forwardRef } from "react";
import PropTypes from "prop-types";
import { Snackbar, Alert } from "@mui/material";

const AlertMessage = forwardRef(({ open, setOpen, severity, message }, ref) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      ref={ref}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
});

AlertMessage.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  severity: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default AlertMessage;
