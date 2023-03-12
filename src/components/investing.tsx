import React from "react";
import "../style/investing.scss";
import Typography from "@mui/material/Typography";
import Ibutton from "./button";
import { Button } from "@mui/material";
export default function Investing() {
  return (
    <div className="container-investing">
      <div className="box-invest">
        <Typography className="box-invest-text">
          It’s Time to Start Investing in Yourself in Learning
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            width: "144px",
            marginBottom: "40px",
            marginTop: "40px",
            textTransform: "capitalize",
          }}
        >
          Get started
        </Button>
      </div>
      <div className="footer">
        <div className="elearn">
          <Typography className="header">E learn</Typography>
          <Typography className="subheader">About</Typography>
          <Typography className="subheader">What The Learner</Typography>
          <Typography className="subheader">Leadership</Typography>
          <Typography className="subheader">Careers</Typography>
          <Typography className="subheader">Catalog</Typography>
          <Typography className="subheader">For Inspiration</Typography>
        </div>
        <div className="elearn">
          <Typography className="header">Courses</Typography>
          <Typography className="subheader">Classroom Courses</Typography>
          <Typography className="subheader">
            Virtual Classroom Courses
          </Typography>
          <Typography className="subheader">E-learning Courses</Typography>
          <Typography className="subheader">Video Courses</Typography>
          <Typography className="subheader">Online Courses</Typography>
        </div>
        <div className="elearn">
          <Typography className="header">Community</Typography>
          <Typography className="subheader">Learners</Typography>
          <Typography className="subheader">Competitor</Typography>
          <Typography className="subheader">Transaction</Typography>
          <Typography className="subheader">Blog</Typography>
          <Typography className="subheader">Teaching Center</Typography>
        </div>
        <div className="elearn">
          <Typography className="header">Quick Links</Typography>
          <Typography className="subheader">Home</Typography>
          <Typography className="subheader">Professional Education</Typography>
          <Typography className="subheader">Courses</Typography>
          <Typography className="subheader">Admissions</Typography>
          <Typography className="subheader">Testimonial</Typography>
          <Typography className="subheader">Programs</Typography>
        </div>
        <div className="elearn">
          <Typography className="header">More</Typography>
          <Typography className="subheader">Process</Typography>
          <Typography className="subheader">Impression</Typography>
          <Typography className="subheader">Team</Typography>
          <Typography className="subheader">Privacy</Typography>
          <Typography className="subheader">Help</Typography>
          <Typography className="subheader">Contact</Typography>
        </div>
      </div>
    </div>
  );
}
