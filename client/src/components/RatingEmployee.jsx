import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import Typography from "@mui/material/Typography";
import BarChartIcon from "@mui/icons-material/BarChart";

function RatingEmployee() {
  const [behavior, setBehavior] = useState(null);
  const [quality, setQuality] = useState(null);
  const [dicipline, setDicipine] = useState(null);

  const style = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "0.7rem",
    width: "14rem",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "30%",
        p: 4,
      }}
    >
      <h2>
        Rate
        <BarChartIcon fontSize="small" />
      </h2>
      <Box sx={style}>
        <Typography>Behavior</Typography>
        <Rating
          sx={{ paddingY: 1 }}
          size="medium"
          name="simple-controlled"
          value={behavior}
          onChange={(event, newValue) => {
            setBehavior(newValue);
          }}
        />
      </Box>
      <Box sx={style}>
        <Typography>Discipline</Typography>
        <Rating
          sx={{ paddingY: 1 }}
          size="medium"
          name="simple-controlled"
          value={dicipline}
          onChange={(event, newValue) => {
            setDicipine(newValue);
          }}
        />
      </Box>
      <Box sx={style}>
        <Typography>Quality</Typography>
        <Rating
          aria-label="quality"
          sx={{ paddingY: 1 }}
          size="medium"
          name="simple-controlled"
          value={quality}
          onChange={(event, newValue) => {
            setQuality(newValue);
          }}
        />
      </Box>
      <DatePicker label="Date Picker" format="YYYY/MM/DD" sx={{ mt: 1 }} />
      <Button sx={{ width: "6rem", mt: 1 }} color="success" variant="contained">
        Register
      </Button>
    </Box>
  );
}

export default RatingEmployee;
