import React from "react";
import "../style/features.scss";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import product1 from "../assets/features/product1.png";
import produk2 from "../assets/features/produk2.png";
import produk3 from "../assets/features/produk3.png";
import john from "../assets/features/john.png";
import { Grid } from "@mui/material";
import play from "../assets/features/play.png";
import eye from "../assets/features/eye.png";

import StarIcon from "@mui/icons-material/Star";

interface Iprops {
  name: string;
  image: any;
  angka: number;
  jobdesk: string;
}
const ICard = (props: Iprops) => {
  return (
    <div className="container-features-card">
      <Card
        sx={{
          padding: "16px 16px 16px 16px",
        }}
        className="card-product"
      >
        <CardMedia
          component="img"
          alt="man"
          height="140"
          image={props.image}
          className="card-image"
          sx={{
            borderRadius: "8px",
            marginBottom: "8px",
          }}
        />
        <div
          className="icon"
          style={{
            width: "90px",
            height: "30px",
            backgroundColor: "white",
            position: "relative",
            top: "-233px",
            left: "12px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <StarIcon
              sx={{
                color: "#F2994A",
              }}
            />
            <Typography className="icon-angka">4.7</Typography>
            <Typography className="icon-text">(1k+)</Typography>
          </div>
        </div>
        <Typography className="card-content-header">{props.jobdesk}</Typography>
        <div className="card-name">
          <div className="card-name-double">
            <img src={john} alt="john" />
            <Typography
              sx={{
                fontFamily: "Sora",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "113%",
                color: "#4F4F4F",
              }}
            >
              {props.name}
            </Typography>
          </div>
          <div>
            <Button className="button-card">
              <span
                style={{
                  fontSize: "13px",
                  marginRight: "6px",
                  // width: "73px",
                }}
              >
                $
              </span>
              {props.angka}
            </Button>
          </div>
        </div>
        <div className="footer-card">
          <div className="left">
            <img src={eye} alt="eye" className="footer-image" />
            <Typography className="left-text">29.500</Typography>
          </div>
          <div className="right">
            <img src={play} alt="play" className="footer-image" />
            <Typography className="left-text">36 Lectures</Typography>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default function Features() {
  return (
    <div
      className="container-features"
      style={{
        paddingTop: "48px",
      }}
    >
      <div className="container-featues-header">
        <Typography className="features-text"> Our Features</Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 24,
          marginTop: "48px",
          flexWrap: "wrap",
        }}
      >
        <ICard
          name={"Mitchal jhon"}
          image={product1}
          angka={59}
          jobdesk="UI UX Design"
        />
        <ICard
          name={"Mitchal jhon"}
          image={produk2}
          angka={79}
          jobdesk="Digital Marketing"
        />
        <ICard
          name={"Mitchal jhon"}
          image={produk3}
          angka={99}
          jobdesk="Visual Design"
        />
      </div>
      <div className="container-features-view">
        <Button
          variant="contained"
          sx={{
            background: "#E64936",
            borderRadius: "84px",
            marginTop: "48px",
            marginBottom: "100px",
          }}
        >
          View All
        </Button>
      </div>
    </div>
  );
}
