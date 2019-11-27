import React, { useState, useEffect } from "react";

import { Container, Category } from "./styles";

const FunctionList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories([
      {
        name: "Matemática",
        functions: ["A", "B"]
      },
      {
        name: "Matemática",
        functions: ["A", "B"]
      },
      {
        name: "Matemática",
        functions: ["A", "B"]
      },
      {
        name: "Matemática",
        functions: ["A", "B"]
      },
      {
        name: "Matemática",
        functions: ["A", "B"]
      },
      {
        name: "Matemática",
        functions: ["A", "B"]
      },
      {
        name: "Matemática",
        functions: ["A", "B"]
      },
      {
        name: "Matemática",
        functions: ["A", "B"]
      },
      {
        name: "Matemática",
        functions: ["A", "B"]
      },
      {
        name: "Matemática",
        functions: ["A", "B"]
      },
      {
        name: "Matemática",
        functions: ["A", "B"]
      },
      {
        name: "Física",
        functions: ["C", "D"]
      }
    ]);
  }, []);

  return (
    <Container>
      <h2>Funções</h2>
      {categories.map((category, index) => (
        <Category>
          {category.name}
          <ul>
            {category.functions.map((func, index) => (
              <li key={index}>{func}</li>
            ))}
          </ul>
        </Category>
      ))}
    </Container>
  );
};

export default FunctionList;
