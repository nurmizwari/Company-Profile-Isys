import React from "react";
import Typography from "@mui/material/Typography";
import "../style/students.scss";
import Button from "@mui/material/Button";
import Ibutton from "./button";
import student from "../assets/students.png";
export default function Students() {
  return (
    <div className="container-students">
      <div className="container-up">
        <Typography className="text-header">What Our Studenrs say</Typography>
        <Ibutton name="Discover more" />
      </div>
      <div className="container-down">
        <img src={student} alt="students testimony" className="img" />
        <img src={student} alt="students testimony" className="img" />
        <img src={student} alt="students testimony" className="img" />
      </div>
    </div>
  );
}
