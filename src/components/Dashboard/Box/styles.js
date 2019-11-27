import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: #fff;
  color: #707070;
  padding: 25px;
  height: auto;
  width: 310px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 5px;
`;

export const Description = styled.h4`
  font-size: 16px;
  text-align: center;

  small {
    font-size: 0.8em;
  }
`;
