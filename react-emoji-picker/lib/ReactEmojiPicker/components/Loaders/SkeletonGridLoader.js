import React from "react";
import styled from "styled-components";
const Grid = styled.div `
  padding: 6px;
`;
const GridItem = styled.div `
  height: 30px;
  margin:20px 0;
  border-radius: 5px;
  background-color:rgba(0,0,0,.04);
`;
const SkeletonGridLoader = ({ repeat }) => {
    return React.createElement(Grid, null, [...Array(repeat)].map((_, index) => (React.createElement(GridItem, { key: index }))));
};
export default SkeletonGridLoader;
