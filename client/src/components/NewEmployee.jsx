import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import Box from "@mui/material/Box";
import { getAllEmployees, AddNewEmployee } from "../services/employeeService";
import Message from "./Message";

function NewEmployee({ setEmployees }) {
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [job, setJob] = useState("");
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");
  const [msgOpen, setMsgOpen] = useState(false);

  const employee = {
    fullName: `${firstName} ${lastName}`,
    job: job,
  };

  async function handleAddEmployee() {
    try {
      const res = await AddNewEmployee(employee);
      const updatedList = await getAllEmployees();
      setOpen(false);
      setEmployees(updatedList);
      setMessage("Employee Added Successfully!");
      setSeverity("success");
    } catch (error) {
      setMessage("Somthing went wrong!");
      setSeverity("success");
    }
    setMsgOpen(true);
  }

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

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "1.5rem",
            gap: "1rem",
          }}
        >
          <TextField
            value={firstName}
            required
            label="First Name"
            id="firstName"
            variant="outlined"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            value={lastName}
            required
            label="Last Name"
            id="lastName"
            variant="outlined"
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            value={job}
            required
            label="Job"
            id="job"
            variant="outlined"
            onChange={(e) => setJob(e.target.value)}
          />
          <DialogActions>
            <Button onClick={handleClose}>CANCEL</Button>
            <Button onClick={handleAddEmployee}>ADD</Button>
          </DialogActions>
        </Box>
      </Dialog>
      <Message
        message={message}
        open={msgOpen}
        severity={severity}
        duration={3000}
        onClose={() => {
          setMsgOpen(false);
        }}
      />
    </div>
  );
}

export default NewEmployee;
