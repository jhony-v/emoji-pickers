import React, { FC } from "react";
import styled from "styled-components";

const Grid = styled.div`
  padding: 6px;
`;

const GridItem = styled.div`
  height: 30px;
  margin:20px 0;
  border-radius: 5px;
  background-color:rgba(0,0,0,.04);
`;

type SkeletonGridLoaderProps = {
  repeat: number;
};
const SkeletonGridLoader: FC<SkeletonGridLoaderProps> = ({ repeat }) => {
  return <Grid>
      {[...Array(repeat)].map((_,index)=>(
          <GridItem key={index} />
      ))}
  </Grid>
};

export default SkeletonGridLoader;
