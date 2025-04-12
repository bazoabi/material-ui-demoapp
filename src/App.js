import logo from "./logo.svg";
import "./App.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import Material from "./Material";
import AccordionExpandIcon from "./Accordion";
import Container from "@mui/material/Container";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Container maxWidth="md">
          <AccordionExpandIcon />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
