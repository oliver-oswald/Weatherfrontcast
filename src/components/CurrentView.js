import { Divider, Link, Typography } from "@mui/material";
import  {useState, useEffect}  from 'react';
import Image from "./Image"

const CurrentView = (props) => {
  const [isCelsius, setIsCelsius] = useState(true);
  const [celsius, setCelsius] = useState(props.children.celsius);
  const [wind, setWind] = useState(props.children.wind);

  useEffect(() => {
    if (isCelsius) {
      setCelsius(props.children.celsius);
      setWind(props.children.wind);
    } else {
      setCelsius(Math.round((props.children.celsius * 9) / 5 + 32));
      setWind(Math.round(props.children.wind * 1.60934));
    }
  }, [isCelsius, props.children.celsius, props.children.wind]);

  return (
    <>
      <div style={{ display: "flex" }}>
        {Image(props.variant)}
        <Typography variant="h2" sx={{ fontWeight: "400" }}>
          {celsius}
        </Typography>
        <div
          style={{
            display: "flex",
            marginBottom: "auto",
            paddingLeft: "10px",
            transform: "translateY(10px)",
          }}
        >
          <Link
            component="button"
            variant="body2"
            sx={isCelsius ? { color: "#e8eaed", cursor: "default" } : { color: "#9aa0a6" }}
            underline="none"
            onClick={() => {
              setIsCelsius(true);
            }}
          >
            °C
          </Link>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              margin: "0 3px",
            }}
          />
          <Link
            component="button"
            variant="body2"
            sx={isCelsius ? { color: "#9aa0a6" } : { color: "#e8eaed", cursor: "default" }}
            underline="none"
            onClick={() => {
              setIsCelsius(false);
            }}
          >
            °F
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "10px",
            margin: "auto",
            width: "200%",
          }}
        >
          <Typography
            variant="text"
            style={{ fontSize: "70%", color: "#9aa0a6" }}
          >
            Niederschlag: {props.children.niederschlag}%
          </Typography>
          <Typography
            variant="text"
            style={{ fontSize: "70%", color: "#9aa0a6" }}
          >
            Luftfeuchte: {props.children.luftfeuchte}%
          </Typography>
          <Typography
            variant="text"
            style={{ fontSize: "70%", color: "#9aa0a6" }}
          >
            Wind: {wind} {isCelsius ? "km/h" : "mph"}
          </Typography>
        </div>
      </div>
    </>
  );
};


 
export default CurrentView;