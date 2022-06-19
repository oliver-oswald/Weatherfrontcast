import Box from "@mui/material/Box";
import "./App.css";
import { Container } from "@mui/system";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import CurrentView from "./components/CurrentView";
import Zone from "./components/Zone";
import Selector from ".//components/Selector";
import { useState } from "react";
import WeatherChart from "./components/Chart";
import WeekView from "./components/WeekView";

const App = () => {

  const [currentMenu, setCurrentMenu] = useState("w");

  return (
    <Container maxWidth="lg" sx={{ height: "100%", width: "100%" }}>
      <Box sx={{ height: "100%" }} align="center">
        <Typography variant="h4" component="h1" gutterBottom sx={{ py: 10 }}>
          Weather Backcast
        </Typography>
        <Paper
          sx={{ my: 2, p: 2, display: "flex", flexDirection: "column" }}
          elevation={6}
        >
          <div style={{ display: "flex" }}>
            <CurrentView variant="sunny">
              {{ celsius: 33, niederschlag: 0, luftfeuchte: 27, wind: 11 }}
            </CurrentView>
            <Zone>
              {{
                city: "schaffhausen",
                day: "samstag",
                hour: "18",
                description: "sonnig",
              }}
            </Zone>
          </div>
          <div style={{
            display: "flex", padding: "10px 0"  
          }}>
            <Selector currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} />
          </div>
          <div>
            <WeatherChart currentMenu={currentMenu}
              labels={["14:00","17:00","20:00","23:00","02:00","05:00","08:00","11:00"]}
              data={
                {temp: [
                Math.floor(Math.random() * 40),
                Math.floor(Math.random() * 40),
                Math.floor(Math.random() * 40),
                Math.floor(Math.random() * 40),
                Math.floor(Math.random() * 40),
                Math.floor(Math.random() * 40),
                Math.floor(Math.random() * 40),
                Math.floor(Math.random() * 40),
              ],
              rain: [
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100),
                  ],
                  wind: [
                    {
                      speed: Math.floor(Math.random() * 10),
                      direction: Math.floor(Math.random() * 360)    
                },
                    {
                      speed: Math.floor(Math.random() * 10),
                      direction: Math.floor(Math.random() * 360)    
                },
                    {
                      speed: Math.floor(Math.random() * 10),
                      direction: Math.floor(Math.random() * 360)    
                },
                    {
                      speed: Math.floor(Math.random() * 10),
                      direction: Math.floor(Math.random() * 360)    
                },
                    {
                      speed: Math.floor(Math.random() * 10),
                      direction: Math.floor(Math.random() * 360)    
                },
                    {
                      speed: Math.floor(Math.random() * 10),
                      direction: Math.floor(Math.random() * 360)    
                },
                    {
                      speed: Math.floor(Math.random() * 10),
                      direction: Math.floor(Math.random() * 360)    
                },
                    {
                      speed: Math.floor(Math.random() * 10),
                      direction: Math.floor(Math.random() * 360)    
                },
              ]
            }}
            />
          </div>
          <div>
            <WeekView data={[
              {
                variant: "sunny",
                day: "So",
                maxTemp: Math.floor(Math.random() * 20 + 10),
                minTemp: Math.floor(Math.random() * 10),
                isSelected: true,
              },
              {
                variant: "sunny",
                day: "Mo",
                maxTemp: Math.floor(Math.random() * 20 + 10),
                minTemp: Math.floor(Math.random() * 10),
              },
              {
                variant: "partly_cloudy",
                day: "Di",
                maxTemp: Math.floor(Math.random() * 20 + 10),
                minTemp: Math.floor(Math.random() * 10),
              },
              {
                variant: "cloudy",
                day: "Mi",
                maxTemp: Math.floor(Math.random() * 20 + 10),
                minTemp: Math.floor(Math.random() * 10),
              },
              {
                variant: "rain_s_cloudy",
                day: "Do",
                maxTemp: Math.floor(Math.random() * 20 + 10),
                minTemp: Math.floor(Math.random() * 10),
              },
              {
                variant: "rain",
                day: "Fr",
                maxTemp: Math.floor(Math.random() * 20 + 10),
                minTemp: Math.floor(Math.random() * 10),
              },
              {
                variant: "thunderstorms",
                day: "Sa",
                maxTemp: Math.floor(Math.random() * 20 + 10),
                minTemp: Math.floor(Math.random() * 10),
              },
              {
                variant: "snow",
                day: "So",
                maxTemp: Math.floor(Math.random() * 20 + 10),
                minTemp: Math.floor(Math.random() * 10),
              }
            ]} />
          </div>
        </Paper>
      </Box>
    </Container>
  );
};

export default App;
