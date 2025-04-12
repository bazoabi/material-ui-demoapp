import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Switch from "@mui/material/Switch";
import Collapse from "@mui/material/Collapse";

export default function AccordionExpandIcon() {
  const [checked, setChecked] = React.useState(true);

  function ControlledSwitches() {
    const handleChange = (event) => {
      //   setChecked(event.target.checked);
      setChecked((c) => !c); // use the inner function call to change the checked value instead of reading the event.target.checked to avoid mutiple switch hits same time
    };

    return (
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
    );
  }

  function InnerContainerText() {
    return (
      <div
        style={{
          background: "orange",
          width: "100%",
          height: "200px",
          color: "white",
        }}
      >
        text text
      </div>
    );
  }

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ControlledSwitches />
        </AccordionDetails>
      </Accordion>

      <Collapse in={checked} collapsedSize={40}>
        <InnerContainerText />
      </Collapse>
    </div>
  );
}
