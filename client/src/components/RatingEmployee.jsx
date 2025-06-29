import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

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
      <Rating
        sx={{ paddingY: 2 }}
        size="large"
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <DatePicker label="Date Picker" format="YYYY/MM/DD" />
      <Button
        sx={{ width: "6rem", marginTop: "1rem" }}
        color="success"
        variant="contained"
      >
        Register
      </Button>
    </Box>
  );
}

export default RatingEmployee;
