import styled from "styled-components";
import FlexWrapper from "../../components/PicketWrappers/FlexWrapper";

export const Spacing = styled.div`
  padding: 10px 6px;
`;

export const ListWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const ListWrapperCategory = styled(FlexWrapper)`
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const IconButton = styled.div`
  font-size: 1.2rem;
  text-align: center;
  padding: 5px;
  width: 27px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;