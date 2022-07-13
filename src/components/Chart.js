import { Line, Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Typography from "@mui/material/Typography"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Chart from 'chart.js/auto';

const WeatherChart = (props) => {
  return <>{selectedChart(props)}</>;
};

const selectedChart = (props) => {
  switch (props.currentMenu) {
    case "t":
      return <TemperatureChart data={props.data.temp} labels={props.labels} />;
    case "n":
      return <RainChart data={props.data.rain} labels={props.labels} />;
    case "w":
          return <WindChart data={props.data.wind} labels={props.labels} />;
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
            data: props.data,
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
            offset: 10,
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
    let data = [];
    for (let i = 0; i < props.data.length; i++) {
        data.push({...props.data[i], label:props.labels[i]})
    }
    return (
        <div height="100px" style={{display: 'flex', flexDirection: "row", justifyContent: 'space-around', marginTop: '20px', marginBottom: "14.5git px"}}>
            {data.map((item, index) => {
                return (
                    <div key={index} style={{padding: "0 20px", display: "flex", flexDirection: "column", gap: "20px"}} >
                        <Card speed={item.speed} direction={item.direction} label={ item.label } />
                    </div>
                );
            }
            )}
      </div>
  );
};

const Card = (props) => {
    return (
      <>
        <Typography
          variant="text"
          style={{ fontSize: "90%", color: "#9aa0a6" }}
        >
            {props.speed} km/h
            </Typography>
            <div style={{margin: "auto"}}>
                <ArrowForwardIcon sx={{transform: "rotate(-90deg) rotate(" + props.direction + "deg)", fontSize: props.speed*2+10}}/>
            </div>
        <Typography
          variant="text"
          style={{ fontSize: "90%", color: "#9aa0a6", textAlign: "center" }}
        >
            {props.label}
            </Typography>
      </>
    );
}


export default WeatherChart;
