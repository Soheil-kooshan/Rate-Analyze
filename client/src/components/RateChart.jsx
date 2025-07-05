import { LineChart } from "@mui/x-charts";
import { useState } from "react";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  FormControl,
  FormLabel,
} from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

function RateChart() {
  const [RadioValue, setRadioValue] = useState("total");
  const [monthValue, setMonthValue] = useState("");

  function handleMonthChange(e) {
    setMonthValue(e.target.value);
  }

  function handleRadioChange(e) {
    setRadioValue(e.target.value);
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
            label="One Month (detailed)"
          ></FormControlLabel>
        </RadioGroup>

        <Select
          sx={{ marginTop: "0.5rem" }}
          size="small"
          value={monthValue}
          onChange={handleMonthChange}
          disabled={RadioValue !== "single"}
        >
          <MenuItem value="January">January</MenuItem>
          <MenuItem value="February">February</MenuItem>
          <MenuItem value="March">March</MenuItem>
          <MenuItem value="April">April</MenuItem>
          <MenuItem value="May">May</MenuItem>
          <MenuItem value="June">June</MenuItem>
          <MenuItem value="July">July</MenuItem>
          <MenuItem value="August">August</MenuItem>
          <MenuItem value="September">September</MenuItem>
          <MenuItem value="October">October</MenuItem>
          <MenuItem value="November">November</MenuItem>
          <MenuItem value="December">December</MenuItem>
        </Select>
      </FormControl>
      <LineChart
        series={[{ data: uData, label: "employee 1" }]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
        yAxis={[
          {
            min: 0,
            max: 5,
            label: "rate",
          },
        ]}
        height={300}
      />
    </div>
  );
}

export default RateChart;
