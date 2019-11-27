import React from "react";

import { Container } from "./styles";
import WorldLab from "../../assets/world_lab.png";

const Header = () => {
  return (
    <Container>
      <img src={WorldLab} alt="WorldLab Logo" />
    </Container>
  );
};

export default Header;
