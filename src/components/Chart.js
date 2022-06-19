import { Line, Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Chart from "chart.js/auto";

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
            data: props.data.temp,
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
        layout: {
          padding: {
            top: 25,
          },
        },
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
            offset: 5,
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
    <Bar
      data={{
        labels: props.labels,
        datasets: [
          {
            label: "Rain",
            data: props.data.rain,
            fill: true,
            backgroundColor: ["#1e3559"],
            borderColor: ["#8ab4f8"],
            borderWidth: {
              top: 2,
              right: 0,
              bottom: 0,
              left: 0,
            },
            barPercentage: 1.0,
            categoryPercentage: 1.0,
          },
        ],
      }}
          plugins={[ChartDataLabels]}
      options={{
        layout: {
          padding: {
            top: 25,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          datalabels: {
            display: true,
            color: "#8ab4f8",
            font: {
              size: 10,
              weight: "bold",
              },
            offset: 20,
              align: "end",
              anchor: "end",
              clamp: true,
              formatter: function
                (value) {
                    return value + " %";
                }
          },
        },
        elements: {
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
const WindChart = (props) => {
    return (
        <div height="100px">
            
      </div>
  );
};

export default WeatherChart;
