import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MDButton from "components/MDButton";
import { forwardRef } from "react";
import PropTypes from "prop-types";

const DeleteConfirmDlg = forwardRef(({ open, setOpen, onDelete }, ref) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    setOpen(false);
    onDelete();
  };

  return (
    <Dialog
      open={open}
      ref={ref}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Confirm</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Do you really want to delete this data?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <MDButton autoFocus onClick={handleClose}>
          No
        </MDButton>
        <MDButton onClick={handleDelete}>Yes</MDButton>
      </DialogActions>
    </Dialog>
  );
});

DeleteConfirmDlg.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteConfirmDlg;
