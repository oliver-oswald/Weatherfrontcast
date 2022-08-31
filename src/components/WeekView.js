import { Typography } from "@mui/material";
import { useEffect } from "react";
import Image from "./Image";

const WeekView = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      {props.data.map((data, idx) => {
        return (
          <DayView
            key={idx}
            id={data.id}
            variant={data.variant}
            day={data.day}
            maxTemp={data.maxTemp}
            minTemp={data.minTemp}
            isSelected={data.isSelected}
            onClick={props.onClick}
          />
        );
      })}
    </div>
  );
};

const DayView = (props) => {
  return (
    <div
      style={Object.assign(
        {},
        {
          display: "flex",
          flexDirection: "column",
          padding: "2px 10px",
          borderRadius: "10px",
        },
        props.isSelected && { backgroundColor: "#585a5f" }
      )}
      onClick={() => props.onClick(props.id)}
    >
      <Typography
        variant="h5"
        style={{ fontSize: "15px", textAlign: "center" }}
      >
        {props.day}.
      </Typography>
      {Image(props.variant)}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <Typography variant="h5" style={{ fontSize: "12px" }}>
          {props.maxTemp}°
        </Typography>
        <Typography variant="h5" style={{ fontSize: "12px", color: "#9aa0a6" }}>
          {props.minTemp}°
        </Typography>
      </div>
    </div>
  );
};
export default WeekView;
