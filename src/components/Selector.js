import { Link } from "@mui/material";
import { Divider } from "@mui/material";
import { useState } from "react";

const Selector = (props) => {

  const [selected, setSelected] = useState("t");

  const style = {
    base: {
      color: "#bdc1c6"
    },
    selected: {
      borderBottom: "3px solid #fdd663",
      transform: "translateY(1px)",
      cursor: "default"
    }
  }

  return (
    <div style={{ display: "flex", height:"auto" }}>
      <Link
        component="button"
        variant="body2"
        sx={Object.assign({}, style.base, selected === "t" && style.selected)}
        underline="none"
        onClick={() => {
          setSelected("t");
        }}
      >
        Temperatur
      </Link>
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          margin: "0 11px",
        }}
      />
      <Link
        component="button"
        variant="body2"
        sx={Object.assign({}, style.base, selected === "n" && style.selected)}
        underline="none"
        onClick={() => {
          setSelected("n");
        }}
      >
        Niederschlag
      </Link>
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          margin: "0 11px",
        }}
      />
      <Link
        component="button"
        variant="body2"
        sx={Object.assign({}, style.base, selected === "w" && style.selected)}
        underline="none"
        onClick={() => {
          setSelected("w");
        }}
      >
        Wind
      </Link>
    </div>
  );
};

export default Selector;
