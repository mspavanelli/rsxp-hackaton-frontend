import React, { useState } from "react";

import { Container, ToggleButton } from "./styles";

const CodeConsole = () => {
  const [open, setOpen] = useState(true);

  return (
    <Container open={open}>
      <ToggleButton onClick={() => setOpen(!open)}>Open</ToggleButton>
      <h2>CodeConsole</h2>
    </Container>
  );
};

export default CodeConsole;
