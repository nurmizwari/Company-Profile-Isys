import React from "react";
import Typography from "@mui/material/Typography";
import "../style/footer.scss";

import fbb from "../assets/fbb.png";
import ig from "../assets/ig.png";
import twitter from "../assets/twitter.png";
export default function Footer() {
  return (
    <div className="container-footer">
      <div>
        <Typography className="company">Edu.dot</Typography>
      </div>
      <div>
        <Typography className="signature">
          @2023 Learning All Rights Reserved
        </Typography>
      </div>
      <div className="social-media">
        <img src={twitter} alt="twitter" />
        <img src={fbb} alt="fbb" />
        <img src={ig} alt="ig" />
      </div>
    </div>
  );
}
