import styled, { css } from "styled-components";

export const Container = styled.aside.attrs(({ open }) => ({
  open: open
}))`
  height: 100%;
  width: ${({ open }) => (open ? "300" : "0")}px;
  transition: all 0.3s;
`;

export const ToggleButton = styled.button`
  position: absolute;
  top: 30px;
  transform: translateX(-50%);
`;
