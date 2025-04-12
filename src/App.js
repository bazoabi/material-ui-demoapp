import logo from "./logo.svg";
import "./App.css";
import { ColorButtons, LetterAvatars, IconButtons } from "./Material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { useState } from "react";

import Chip from "@mui/material/Chip";

import Container from "@mui/material/Container";

import BasicGrid from "./Grid";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

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

function ContinuousSlider() {
  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ alignItems: "center", mb: 1 }}>
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
      </Stack>
      {/* <Slider disabled defaultValue={30} aria-label="Disabled slider" /> */}
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Container maxWidth="sm">
          <ColorButtons />
          <LetterAvatars />
          <Checkbox {...label} defaultChecked />
          <ContinuousSlider />
          <Stack direction="row" spacing={1}>
            <Chip label="primary" color="primary" />
            <Chip label="success" color="success" />
          </Stack>
          <BasicGrid />
          <IconButtons />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
