import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import RowDivider from "../RowDivider";
const WrapperInput = styled.div `
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 16px;
  padding: 8px 15px;
  display: flex;
  margin:5px;
  flex:none;
`;
const SearchInput = styled.input `
  border: none;
  outline: none;
  background: none;
  width: 100%;
  margin-left: 5px;
  font-size:14px;
  &::placeholder {
    color: silver;
  }
`;
const EmojiSearchInput = ({ placeholder, onSearch }) => {
    return (React.createElement(RowDivider, { to: "bottom" },
        React.createElement(WrapperInput, null,
            React.createElement(FiSearch, { size: 20, color: "gray" }),
            React.createElement(SearchInput, { placeholder: placeholder, onKeyUp: onSearch }))));
};
export default EmojiSearchInput;
