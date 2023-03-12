import React from "react";
import Button from "@mui/material/Button";

interface Iprops {
  name: string;
}
export default function Ibutton(props: Iprops) {
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: "84px",
      }}
    >
      {props.name}
    </Button>
  );
}
