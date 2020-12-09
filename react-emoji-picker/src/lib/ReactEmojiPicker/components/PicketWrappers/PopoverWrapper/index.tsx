import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 290px;
  height: 420px;
  overflow: hidden;
  flex-direction: column;
`;

const PopoverWrapper: FC = ({ children }) => <Wrapper>{children}</Wrapper>;
export default PopoverWrapper;
