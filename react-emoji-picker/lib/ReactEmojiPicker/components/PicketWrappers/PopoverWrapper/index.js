import React from "react";
import styled from "styled-components";
const Wrapper = styled.div `
  display: flex;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 2px 5px rgba(100, 100, 100, 0.3);
  width: 290px;
  height: 420px;
  overflow: hidden;
  flex-direction: column;
`;
const PopoverWrapper = ({ children }) => React.createElement(Wrapper, null, children);
export default PopoverWrapper;
