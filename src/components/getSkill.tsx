import React from "react";
import "../style/get-skill.scss";
import toga from "../assets/toga.png";
import bg from "../assets/vector-image.png";
import bintang from "../assets/bintang.png";
import google from "../assets/google.png";
import coursera from "../assets/coursera.png";
import fb from "../assets/fb.png";
import udemy from "../assets/udemy.png";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import {
  Box,
  Breadcrumbs,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

export default function GetSkill() {
  return (
    <div className="container-getskill">
      <div className="left">
        <Typography className="sub-left-text">
          Get Skills <br />
          From Our Top
          <br />
          <span style={{ color: "#E64936" }}>Class Courses</span>
        </Typography>
        <Typography className="text-sub-lorem" variant="subtitle1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </Typography>
        <div className="search">
          <FormControl
            sx={{ m: 1, width: "25ch" }}
            variant="outlined"
            className="search"
          >
            <InputLabel htmlFor="outlined-adornment-amount"></InputLabel>
            <OutlinedInput
              placeholder="Search your favorite courses"
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
              endAdornment={
                <>
                  <InputAdornment position="end">
                    {" "}
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        borderRadius: "84px",
                        backgroundColor: "#E64936",
                        textTransform: "capitalize",
                      }}
                    >
                      Search
                    </Button>
                  </InputAdornment>
                </>
              }
            />
          </FormControl>
        </div>

        <Box className="box-bintang">
          <img src={bintang} alt="bintang" />
          <Typography color="initial">Experience mentor</Typography>
        </Box>
        <Box className="box-bintang">
          <img src={bintang} alt="bintang" />
          <Typography color="initial">Quality video</Typography>
        </Box>
        <Box className="box-bintang">
          <img src={bintang} alt="bintang" />
          <Typography color="initial">Affordable prices</Typography>
        </Box>
      </div>
      <div
        className="right"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
      >
        <img src={toga} alt="toga" />

        <div className="footer-toga">
          <img src={google} alt="google" className="footer-toga-image" />
          <img src={coursera} alt="coursera" className="footer-toga-image" />
          <img src={fb} alt="fb" className="footer-toga-image" />
          <img src={udemy} alt="udemy" className="footer-toga-image" />
        </div>
      </div>
    </div>
  );
}
