import React from "react";
import bg_process from "../assets/bg-process.png";
import process from "../assets/process.png";
import "../style/process.scss";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

export default function Process() {
  return (
    <div className="container-process">
      <div
        className="left"
        style={{
          backgroundImage: `url(${bg_process})`,
          backgroundRepeat: "no-repeat",
          // backgroundPosition: "center",
        }}
      >
        <img src={process} alt="process" />
      </div>
      <div className="right1">
        <div className="right">
          <Typography className="right-text-header">
            Our Process is Build Around Quality & Make it Perfect
          </Typography>
          <Typography className="right-text-subheader">
            Anenim Njilam tempor sapier gravida done porta and b adrdit ipsum
            enim justo integer actor imeer congue magna and purus pretlium
            insuss igula nurtrum luctue unrice.
          </Typography>
          <Typography className="right-text-subheader">
            Anenim Njilam tempor sapier gravida done porta and b adrdit ipsum
            enim justo integer actor imeer congue magna
          </Typography>
          <div className="Ibutton">
            <Button
              variant="contained"
              className="button-more"
              sx={{
                background: "#E64936",
                borderRadius: "84px",
                textTransform: "capitalize",
                marginTop: "25px",
              }}
            >
              Discover More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
