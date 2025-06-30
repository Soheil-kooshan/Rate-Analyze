import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import Box from "@mui/material/Box";

function NewEmployee() {
  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        New Employee
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Employee</DialogTitle>
        <form>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "1.5rem",
              gap: "1rem",
            }}
          >
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
          </Box>
        </form>
      </Dialog>
    </div>
  );
}

export default NewEmployee;
