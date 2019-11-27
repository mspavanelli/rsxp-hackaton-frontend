import React, { useState } from "react";

import { Container, ToggleButton, Code } from "./styles";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

const CodeConsole = () => {
  const [open, setOpen] = useState(true);

  return (
    <Container open={open}>
      <ToggleButton open={open} onClick={() => setOpen(!open)}>
        <Arrow />
      </ToggleButton>
      <h2>Código</h2>
      <Code>
        <h3>{`<SCRIPT>`}</h3>
        <pre>
          {`import React, { useState } from "react";

import { Container, ToggleButton, Code } from "./styles";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

const CodeConsole = () => {
  const [open, setOpen] = useState(true);

  return (
    <Container open={open}>
      <ToggleButton open={open} onClick={() => setOpen(!open)}>
        <Arrow />
      </ToggleButton>
      <h2>Código</h2>
      <Code>
        
      </Code>
    </Container>
  );
};

export default CodeConsole;
`}
        </pre>
      </Code>
    </Container>
  );
};

export default CodeConsole;
