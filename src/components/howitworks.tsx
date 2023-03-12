import React from "react";
import "../style/how.scss";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import biru from "../assets/how/biru.png";
import eclipe from "../assets/how/eclipe.png";
import book from "../assets/how/book.png";
import certificate from "../assets/how/certificate.png";

export default function Howitworks() {
  return (
    <div className="container-how">
      <div className="container-up">
        <Typography className="container-text">How it work</Typography>
      </div>
      <div className="container-down">
        <Box className="container-box">
          <Paper
            className="container-down-paper-one"
            sx={{ background: "#27424D" }}
          >
            <img src={biru} alt="blue" />
            <Typography className="container-paper-text">
              Set Your Plan
            </Typography>
            <Typography className="container-paper-subtext">
              Lorem Ipsum has been the industry's standard dummy text ever
            </Typography>
          </Paper>

          <Paper
            className="container-down-paper-one"
            sx={{ background: "#1F968E" }}
          >
            <img src={eclipe} alt="blue" />
            <Typography className="container-paper-text">
              Find Your Course
            </Typography>
            <Typography className="container-paper-subtext">
              Lorem Ipsum has been the industry's standard dummy text ever
            </Typography>
          </Paper>
          <Paper
            className="container-down-paper-one"
            sx={{ background: "#9B7200" }}
          >
            <img src={book} alt="blue" />
            <Typography className="container-paper-text">
              Book Your Seat
            </Typography>
            <Typography className="container-paper-subtext">
              Lorem Ipsum has been the industry's standard dummy text ever
            </Typography>
          </Paper>
          <Paper
            className="container-down-paper-one"
            sx={{ background: "#A93D33" }}
          >
            <img src={certificate} alt="blue" />
            <Typography className="container-paper-text">
              Get Certificate
            </Typography>
            <Typography className="container-paper-subtext">
              Lorem Ipsum has been the industry's standard dummy text ever
            </Typography>
          </Paper>
        </Box>
      </div>
    </div>
  );
}
