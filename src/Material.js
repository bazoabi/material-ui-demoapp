import Stack from "@mui/material/Stack";

import Button from "@mui/material/Button";

import Avatar from "@mui/material/Avatar";

import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

import { deepOrange, deepPurple } from "@mui/material/colors";

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
