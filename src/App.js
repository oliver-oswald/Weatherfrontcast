import Box from "@mui/material/Box";
import "./App.css";
import { Container } from "@mui/system";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import CurrentView from "./components/CurrentView";
import Zone from "./components/Zone";

const App = () => {
  return (
    <Container maxWidth="lg" sx={{ height: "100%", width: "100%" }}>
      <Box sx={{ height: "100%" }} align="center">
        <Typography variant="h4" component="h1" gutterBottom sx={{ py: 10 }}>
          Weather Backcast
        </Typography>
        <Paper sx={{ my: 2, p: 2, display: 'flex' }} elevation={6}>
          <CurrentView variant="sunny" >{{ celsius: 33, niederschlag: 0, luftfeuchte: 27, wind: 11 }}</CurrentView>
          <Zone>{{city: "schaffhausen", day:"samstag", hour:"18", description:"sonnig"}}</Zone>
        </Paper>
      </Box>
    </Container>
  );
};

export default App;
