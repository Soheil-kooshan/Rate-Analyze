import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

function NewEmployee() {
  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        New Employee
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <TextField
          required
          label="First Name"
          id="firstName"
          variant="outlined"
        />
        <TextField
          required
          label="Last Name"
          id="lastName"
          variant="outlined"
        />
        <TextField required label="Job" id="job" variant="outlined" />
        <DialogActions>
          <Button onClick={handleClose}>CANCEL</Button>
          <Button type="submit">ADD</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default NewEmployee;
