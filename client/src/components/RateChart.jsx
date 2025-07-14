import { LineChart } from "@mui/x-charts";
import { BarChart } from "@mui/x-charts";
import { useEffect, useState } from "react";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
} from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { getTotalRates, getOneMonthRates } from "../services/rateService";

function RateChart({ empId }) {
  const [RadioValue, setRadioValue] = useState("total");
  const [monthValue, setMonthValue] = useState(1);
  const [yearValue, setYearValue] = useState(2025);
  const [totalDates, setTotalDates] = useState([]);
  const [singleDates, setSingleDates] = useState([]);
  const [totalRates, setTotalRates] = useState([]);
  const [singleRates, setSingleRates] = useState({
    behavior: [],
    dicipline: [],
    quality: [],
  });

  useEffect(() => {
    handleTotalRates(empId);
  }, []);

  async function handleTotalRates(empId) {
    const res = await getTotalRates(empId);
    const ratesArray = [];
    const datesArray = [];
    console.log(res);
    if (res && res.length > 0) {
      res.forEach((item) => {
        const average = (
          (item.rate.behavior + item.rate.dicipline + item.rate.quality) /
          3
        ).toFixed(1);
        ratesArray.push(average);
        datesArray.push(item.date);
      });
    }
    setTotalDates(datesArray);
    setTotalRates(ratesArray);
  }

  async function handleOneMonthRates(empId, year, month) {
    const res = await getOneMonthRates(empId, year, month);
    const ratesArray = {
      behavior: [],
      dicipline: [],
      quality: [],
    };
    const datesArray = [];

    if (res && res.length > 0) {
      res.forEach((item) => {
        ratesArray.behavior.push(item.rate.behavior),
          ratesArray.dicipline.push(item.rate.dicipline),
          ratesArray.quality.push(item.rate.quality),
          datesArray.push(item.date);
      });
    }
    setSingleRates(ratesArray);
    setSingleDates(datesArray);
  }

  function handleMonthChange(e) {
    const month = e.target.value;
    setMonthValue(e.target.value);
    handleOneMonthRates(empId, yearValue, month);
  }

  function handleYearChange(e) {
    const year = e.target.value;
    setYearValue(e.target.value);
    handleOneMonthRates(empId, year, monthValue);
  }

  function handleRadioChange(e) {
    setRadioValue(e.target.value);
    if (e.target.value === "total") {
      handleTotalRates(empId);
    } else {
      handleOneMonthRates(empId, yearValue, monthValue);
    }
  }

  return (
    <div>
      <FormControl sx={{ padding: "1rem" }}>
        <FormLabel>Choose one below:</FormLabel>
        <RadioGroup value={RadioValue} onChange={handleRadioChange}>
          <FormControlLabel value="total" control={<Radio />} label="Total" />
          <FormControlLabel
            value="single"
            control={<Radio />}
            label="One Month of a Year (detailed)"
          ></FormControlLabel>
        </RadioGroup>

        <Select
          sx={{ marginTop: "0.5rem" }}
          size="small"
          value={monthValue}
          onChange={handleMonthChange}
          disabled={RadioValue !== "single"}
        >
          <MenuItem value="1">January</MenuItem>
          <MenuItem value="2">February</MenuItem>
          <MenuItem value="3">March</MenuItem>
          <MenuItem value="4">April</MenuItem>
          <MenuItem value="5">May</MenuItem>
          <MenuItem value="6">June</MenuItem>
          <MenuItem value="7">July</MenuItem>
          <MenuItem value="8">August</MenuItem>
          <MenuItem value="9">September</MenuItem>
          <MenuItem value="10">October</MenuItem>
          <MenuItem value="11">November</MenuItem>
          <MenuItem value="12">December</MenuItem>
        </Select>
        <FormControl>
          <Select
            sx={{ marginTop: "0.5rem" }}
            size="small"
            value={yearValue}
            onChange={handleYearChange}
            disabled={RadioValue !== "single"}
            defaultValue={2025}
          >
            <MenuItem value="2025">2025</MenuItem>
            <MenuItem value="2024">2024</MenuItem>
            <MenuItem value="2023">2023</MenuItem>
          </Select>
        </FormControl>
      </FormControl>
      {RadioValue === "total" ? (
        <LineChart
          series={[{ data: totalRates, label: "employee 1" }]}
          xAxis={[{ scaleType: "point", data: totalDates }]}
          yAxis={[
            {
              min: 0,
              max: 5,
              label: "rate",
            },
          ]}
          height={300}
          sx={{ p: 2 }}
        />
      ) : (
        <BarChart
          xAxis={[{ data: singleDates }]}
          series={[
            { data: singleRates.behavior, label: "behavior" },
            { data: singleRates.dicipline, label: "dicipline" },
            { data: singleRates.quality, label: "quality" },
          ]}
          yAxis={[
            {
              min: 0,
              max: 5,
              label: "rate",
            },
          ]}
          height={300}
          sx={{ p: 2 }}
        />
      )}
    </div>
  );
}

export default RateChart;
