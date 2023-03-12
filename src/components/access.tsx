import React from "react";
import "../style/access.scss";
import access from "../assets/access.png";
import Typography from "@mui/material/Typography";
import centang from "../assets/centang.png";
import { Button } from "@mui/material";

export default function Access() {
  return (
    <div className="container-access">
      <div className="left">
        <Typography className="left-access-header">
          Access to Everything For Everyone
        </Typography>
        <Typography className="left-access-subheader">
          Online learning program designed to prepare you for a career. Courses
          include recorded video lectures, auto graded
        </Typography>
        <div className="acces-Iheader">
          <div className="left-access-Iheader">
            <img src={centang} alt="centang" />
            <Typography>World-Class</Typography>
          </div>
          <div className="left-access-Iheader">
            <img src={centang} alt="centang" />
            <Typography>Flexible</Typography>
          </div>
        </div>
        <div className="acces-Iheader">
          <div className="left-access-Iheader">
            <img src={centang} alt="centang" />
            <Typography>Affordable &nbsp;&nbsp;</Typography>
          </div>
          <div className="left-access-Iheader">
            <img src={centang} alt="centang" />
            <Typography>Job-relevant</Typography>
          </div>
        </div>
        <div className="Ibutton">
          <Button
            variant="contained"
            sx={{
              background: "#06AED5",
              borderRadius: "28px",
              textTransform: "capitalize",
              marginTop: "48px",
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
      <div className="right">
        <img src={access} alt="access" />
      </div>
    </div>
  );
}
