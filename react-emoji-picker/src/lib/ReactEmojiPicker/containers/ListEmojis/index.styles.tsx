import styled from "styled-components";

export const Spacing = styled.div`
  padding: 10px 6px;
`;

export const ListWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width:12px;
  }
  &::-webkit-scrollbar-thumb {
    background:rgba(0,0,0,.1);
    border:2px solid white;
    border-radius:12px;
  }
  &::-webkit-scrollbar-button{
    height:10px;
  }
`;
