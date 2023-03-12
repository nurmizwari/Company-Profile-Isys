import React from "react";
import "../style/count.scss";
import Typography from "@mui/material/Typography";
export default function Count() {
  return (
    <div
      className="container-count-header"
      style={{
        background: "#27424D",
      }}
    >
      <div className="sub-count">
        <Typography className="sub-count-text">1400+</Typography>
        <Typography className="sub-count-text2">Students</Typography>
      </div>
      <div className="sub-count">
        <Typography className="sub-count-text">200+</Typography>
        <Typography className="sub-count-text2">Courses</Typography>
      </div>
      <div className="sub-count">
        <Typography className="sub-count-text">150+</Typography>
        <Typography className="sub-count-text2">Instructor</Typography>
      </div>
    </div>
  );
}
