import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import BasicGrid from "./Grid";
import { deepOrange, deepPurple } from "@mui/material/colors";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export function ColorButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={() => {
          alert("clicked!!!");
        }}
      >
        Primary
      </Button>
      <Button
        size="small"
        variant="contained"
        color="secondary"
        onClick={() => {
          alert("clicked!!!");
        }}
      >
        Secondary
      </Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </Stack>
  );
}

export function LetterAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar>H</Avatar>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
      <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
    </Stack>
  );
}

export function IconButtons() {
  return (
    <>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </>
  );
}

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

export default function Material() {
  return (
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
  );
}
