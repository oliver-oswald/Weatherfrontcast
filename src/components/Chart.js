import { Line, Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Chart from "chart.js/auto";
import { BookmarkOutlined } from "@mui/icons-material";

const WeatherChart = (props) => {
  return <>{selectedChart(props)}</>;
};

const selectedChart = (props) => {
  switch (props.currentMenu) {
    case "t":
      return <TemperatureChart data={props.data} labels={props.labels} />;
    case "n":
      return <RainChart data={props.data} labels={props.labels} />;
    case "w":
      return <WindChart />;
    default:
      return <></>;
  }
};

const TemperatureChart = (props) => {
  return (
    <Line
      data={{
        labels: props.labels,
        datasets: [
          {
            label: "Temperature",
            data: props.data,
            fill: true,
            backgroundColor: ["rgba(255, 204, 0, 0.2)"],
            borderColor: ["rgb(255, 204, 0)"],
            borderWidth: 1,
            tension: 0.2,
          },
        ],
      }}
      plugins={[ChartDataLabels]}
          options={{
              responsive: true,
    maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
              },
              datalabels: {
                  display: true,
                  color: "white",
                  font: {
                      size: 10,
                      weight: "bold",
                  },
                  align: "end",
                  offset: 10,
                },
        },
        elements: {
          point: {
            radius: 0,
          },
        },

        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        },
      }}
    />
  );
};
const RainChart = (props) => {
    return (
      <></>
  );
};
const WindChart = (props) => {
  return <></>;
};

export default WeatherChart;
