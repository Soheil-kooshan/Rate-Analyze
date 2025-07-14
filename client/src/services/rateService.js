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

export async function registerRate(empId, date, behavior, dicipline, quality) {
  console.log(empId);
  const res = await fetch(`http://localhost:8080/rate/RegisterRate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      date: date,
      rate: {
        behavior: behavior,
        dicipline: dicipline,
        quality: quality,
      },
      employee: {
        id: empId,
      },
    }),
  });
  return res;
}
