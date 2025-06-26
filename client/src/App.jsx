import "./app.css";
import EmployeesList from "./components/employeesList";
function App() {
  return (
    <div className="background">
      <h1>Rate & Analyze</h1>
      <div className="container">
        <EmployeesList />
      </div>
    </div>
  );
}
export default App;
