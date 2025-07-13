import { LineChart } from "@mui/x-charts";
import { useState } from "react";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
} from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { getRates } from "../services/rateService";

function RateChart() {
  const [RadioValue, setRadioValue] = useState("total");
  const [monthValue, setMonthValue] = useState(1);
  const [yearValue, setYearValue] = useState(2025);

  const [totalRates, setTotalRates] = useState([]);
  const [dates, setDates] = useState([]);

  async function getTotalRate() {
    const res = await getRates(1);
    const totalArray = [];
    const datesArray = [];
    console.log(res);
    if (res !== []) {
      res.forEach((item) => {
        const average = (
          (item.rate.behavior + item.rate.quality + item.rate.dicipline) /
          3
        ).toFixed(1);
        totalArray.push(average);
        datesArray.push(item.date);
      });
    }

    setDates(datesArray);
    setTotalRates(totalArray);
  }

  function handleMonthChange(e) {
    setMonthValue(e.target.value);
  }

  function handleYearChange(e) {
    setYearValue(e.target.value);
  }

  function handleRadioChange(e) {
    setRadioValue(e.target.value);
    getTotalRate();
  }

  const uData = [3, 4, 4];
  const xLabels = ["january", "september", "july"];

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

      <LineChart
        series={[{ data: totalRates, label: "employee 1" }]}
        xAxis={[{ scaleType: "point", data: dates }]}
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
    </div>
  );
}

export default RateChart;
