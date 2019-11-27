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
          períodos que o principal P (capital inicial) foi aplicado.#
        </small>
      </Description>
    </Container>
  );
};

export default Box;
