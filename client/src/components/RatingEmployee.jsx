import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import Typography from "@mui/material/Typography";
import BarChartIcon from "@mui/icons-material/BarChart";
import { registerRate } from "../services/rateService";
import Message from "./Message";

function RatingEmployee({ empId }) {
  const [behavior, setBehavior] = useState(null);
  const [dicipline, setDicipine] = useState(null);
  const [quality, setQuality] = useState(null);
  const [date, setDate] = useState(null);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");
  const [msgOpen, setMsgOpen] = useState(false);

  async function handleRegister() {
    if (
      behavior !== null &&
      dicipline !== null &&
      quality !== null &&
      date !== null
    ) {
      try {
        const res = await registerRate(
          empId,
          date,
          behavior,
          dicipline,
          quality
        );
        const message = await res.text();
        setMessage(message);
        if (message.includes("Successfully")) {
          setSeverity("success");
        } else {
          setSeverity("error");
        }
      } catch (error) {
        setMessage("Something went Wrong!");
        setSeverity("error");
      }
    } else {
      setMessage("Fields can NOT be Empty!");
      setSeverity("warning");
    }

    setMsgOpen(true);
  }

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
        <Typography sx={{ fontStyle: "italic", fontSize: 12, color: "grey" }}>
          To #{empId}
        </Typography>
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
      <DatePicker
        label="Date Picker"
        format="YYYY/MM/DD"
        sx={{ mt: 1, minWidth: "10rem" }}
        value={date}
        onChange={(value) => {
          setDate(value);
        }}
      />
      <Button
        sx={{ width: "6rem", mt: 1 }}
        color="success"
        variant="contained"
        onClick={handleRegister}
      >
        Register
      </Button>
      <Message
        open={msgOpen}
        message={message}
        severity={severity}
        onClose={() => setMsgOpen(false)}
        duration={4000}
      />
    </Box>
  );
}

export default RatingEmployee;
