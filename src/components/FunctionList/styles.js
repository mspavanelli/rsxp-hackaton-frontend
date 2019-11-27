import styled from "styled-components";

export const Container = styled.aside`
  height: 100vh;
  overflow-y: scroll;
  width: 400px;

  h2 {
    margin: 50px auto;
    text-align: center;
  }

  ul {
    border-top: 1px solid rgba(112, 112, 112, 0.129);
  }
`;

export const Category = styled.div`
  border: 1px solid red;
`;
