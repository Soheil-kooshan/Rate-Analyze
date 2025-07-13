export async function getRates(empId) {
  const res = await fetch(
    `http://localhost:8080/rate/getAllRates?empId=${empId}`
  );
  return res.json();
}
