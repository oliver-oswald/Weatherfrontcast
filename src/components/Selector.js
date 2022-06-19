import { Link } from "@mui/material";
import { Divider } from "@mui/material";

const Selector = (props) => {

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
        sx={Object.assign({}, style.base, props.currentMenu === "t" && style.selected)}
        underline="none"
        onClick={() => {
          props.setCurrentMenu("t");
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
        sx={Object.assign({}, style.base, props.currentMenu === "n" && style.selected)}
        underline="none"
        onClick={() => {
          props.setCurrentMenu("n");
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
        sx={Object.assign({}, style.base, props.currentMenu === "w" && style.selected)}
        underline="none"
        onClick={() => {
          props.setCurrentMenu("w");
        }}
      >
        Wind
      </Link>
    </div>
  );
};

export default Selector;
