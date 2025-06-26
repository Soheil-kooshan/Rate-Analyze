import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Delete from "@mui/icons-material/Delete";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import "../app.css";

function EmployeesList() {
  const style = {
    py: 0,
    width: "100%",
  };

  const employees = [
    { id: 1, name: "Ali Rostami", Job: "designer" },
    { id: 2, name: "Sahand Kooshan", Job: "Tester" },
    { id: 3, name: "Iraj Pakzad", Job: "Analyst" },
    { id: 4, name: "Reza Ataei", Job: "Back-End" },
  ];

  return (
    <div>
      <List sx={style}>
        {employees.map((employee) => (
          <>
            <ListItem
              key={employee.id}
              secondaryAction={
                <ButtonGroup size="small" variant="contained">
                  <Button color="success">Rate</Button>
                  <Button>View</Button>
                  <Button>
                    <Delete />
                  </Button>
                </ButtonGroup>
              }
            >
              <ListItemText
                primary={`${employee.id}  ${employee.name} (${employee.Job})`}
              />
            </ListItem>
            <Divider variant="middle" />
          </>
        ))}
      </List>
    </div>
  );
}

export default EmployeesList;
