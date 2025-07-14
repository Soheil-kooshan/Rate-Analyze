export async function getTotalRates(empId) {
  const res = await fetch(
    `http://localhost:8080/rate/getAllRates?empId=${empId}`
  );
  return res.json();
}

export async function getOneMonthRates(empId, year, month) {
  const res = await fetch(
    `http://localhost:8080/rate/getByMonthAndYear?empId=${empId}&year=${year}&month=${month}`
  );

  return res.json();
}
