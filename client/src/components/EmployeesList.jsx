import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Delete from "@mui/icons-material/Delete";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { getAllEmployees } from "../services/employeeService";

import "../app.css";

function EmployeesList({
  employees,
  setEmployees,
  setEmpIdForChart,
  setEmpIdForRate,
}) {
  useEffect(() => {
    async function getEmployees() {
      const employees = await getAllEmployees();
      setEmployees(employees);
    }
    getEmployees();
  }, []);

  const style = {
    py: 0,
    width: "100%",
  };

  return (
    <div>
      <List sx={style}>
        {employees.map((employee) => (
          <>
            <ListItem
              key={employee.id}
              secondaryAction={
                <ButtonGroup size="small" variant="contained">
                  <Button
                    color="success"
                    onClick={() => {
                      setEmpIdForRate(employee.id);
                      setEmpIdForChart(null);
                    }}
                  >
                    Rate
                  </Button>
                  <Button
                    onClick={() => {
                      setEmpIdForChart(employee.id);
                      setEmpIdForRate(null);
                    }}
                  >
                    View
                    <ShowChartIcon fontSize="small" />
                  </Button>
                  <Button>
                    <Delete />
                  </Button>
                </ButtonGroup>
              }
            >
              <ListItemText
                primary={
                  <Box>
                    {employee.id} {employee.fullName}{" "}
                    <Chip label={employee.job} size="small" variant="filled" />
                  </Box>
                }
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
