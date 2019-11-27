import styled, { css } from "styled-components";

export const Container = styled.aside.attrs(({ open }) => ({
  open: open
}))`
  height: 100%;
  transition: all 0.3s;
  width: ${({ open }) => (open ? "400" : "50")}px;
`;

export const ToggleButton = styled.span.attrs(({ open }) => ({
  open: open
}))`
  background-image: linear-gradient(45deg, #118bb7, #1daabf);
  border-radius: 50%;
  height: 60px;
  position: absolute;
  top: 50px;
  transform: translateX(-50%);
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: #fff;
    height: 34px;
    transform: rotate(${({ open }) => (open ? "-90deg" : "90deg")});
    transition: all 0.3s;
    width: 20px;
  }
`;

export const Code = styled.div`
  background-color: #282a37;
  color: #fff;
  overflow-x: hidden;

  h3 {
    background-color: #191a22;
    display: inline-block;
    height: 60px;
    width: 100%;
    text-align: center;
    line-height: 60px;
  }

  pre {
    padding: 40px;
  }
`;
