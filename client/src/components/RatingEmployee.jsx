import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import Typography from "@mui/material/Typography";

function RatingEmployee() {
  const [value, setValue] = useState(null);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "30%",
        p: 4,
      }}
    >
      <h2>Rate:</h2>
      <Typography>behavior:</Typography>
      <Rating
        sx={{ paddingY: 1 }}
        size="medium"
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography>Discipline:</Typography>
      <Rating
        sx={{ paddingY: 1 }}
        size="medium"
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography>Quality:</Typography>
      <Rating
        aria-label="quality"
        sx={{ paddingY: 1 }}
        size="medium"
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <DatePicker label="Date Picker" format="YYYY/MM/DD" sx={{ mt: 1 }} />
      <Button sx={{ width: "6rem", mt: 1 }} color="success" variant="contained">
        Register
      </Button>
    </Box>
  );
}

export default RatingEmployee;
