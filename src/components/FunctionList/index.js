import React, { useState, useEffect } from "react";

import { Container } from "./styles";

const FunctionList = () => {
  const [functions, setFunctions] = useState([]);

  useEffect(() => {
    setFunctions(["matemática", "física"]);
  }, []);

  return (
    <Container>
      <h2>Funções</h2>
      <ul>
        {functions.map((functionCategory, index) => (
          <li key={index}>{functionCategory}</li>
        ))}
      </ul>
    </Container>
  );
};

export default FunctionList;
