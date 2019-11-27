import React from "react";

import { Container, Title, Description, Inputs, Input } from "./styles";

const Box = () => {
  return (
    <Container>
      <Title>Juros Compostos</Title>
      <Description>
        Fórmula:{" "}
        <math>
          S = P(1 + i)<sup>n</sup>
        </math>
        <br />
        <small>
          onde S = montante, P = principal, i = taxa de juros e n = número de
          períodos que o principal P (capital inicial) foi aplicado.
        </small>
      </Description>

      <Inputs>
        <Input>
          <label htmlFor="P">P</label>
          =
          <input name="P" placeholder="Ex.: 20000" />
        </Input>

        <Input>
          <label htmlFor="i">i</label>
          =
          <input name="i" placeholder="Ex.: 1" />
        </Input>

        <Input>
          <label htmlFor="t">t</label>
          =
          <input name="t" placeholder="Ex.: 12" />
        </Input>
      </Inputs>
    </Container>
  );
};

export default Box;
