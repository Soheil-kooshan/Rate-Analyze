import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./app.css";
import RatingEmployee from "./components/RatingEmployee";
import EmployeesList from "./components/employeesList";
import NewEmployee from "./components/NewEmployee";
import RateChart from "./components/RateChart";
import { useState } from "react";
function App() {
  const [employees, setEmployees] = useState([]);
  const [empIdForChart, setEmpIdForChart] = useState(null);
  const [empIdForRate, setEmpIdForRate] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="background">
        <h1>Rate & Analyze</h1>
        <div className="container">
          <EmployeesList
            employees={employees}
            setEmployees={setEmployees}
            setEmpIdForChart={setEmpIdForChart}
            setEmpIdForRate={setEmpIdForRate}
          />
          <NewEmployee setEmployees={setEmployees} />
          {empIdForRate && <RatingEmployee empId={empIdForRate} />}
          {empIdForChart && <RateChart empId={empIdForChart} />}
        </div>
      </div>
    </LocalizationProvider>
  );
}
export default App;
