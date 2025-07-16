export async function getAllEmployees() {
  const res = await fetch("http://localhost:8080/employee/getEmployees");

  return res.json();
}

export async function addNewEmployee(employee) {
  const res = await fetch("http://localhost:8080/employee/AddEmployee", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });

  return res.json();
}

export async function deleteEmployee(id) {
  const res = await fetch(
    `http://localhost:8080/employee/DeleteEmployee?id=${id}`,
    { method: "DELETE" }
  );

  return res;
}
