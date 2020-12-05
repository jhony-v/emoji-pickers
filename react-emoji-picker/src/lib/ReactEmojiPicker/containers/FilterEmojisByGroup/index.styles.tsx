import styled from "styled-components";

export type ButtonGrayScaleIconTypes = {
  isDisabled?: boolean;
};
export const ButtonGrayScaleIcon = styled.div<ButtonGrayScaleIconTypes>`
  font-size: 1rem;
  padding: 8px 4px;
  cursor: pointer;
  text-align: center;
  width: 100%;
  filter: ${(props) => props.isDisabled && "grayscale(100%)contrast(80%)"};
  opacity: ${(props) => props.isDisabled && 0.4};
  &:hover {
    filter: unset;
    background-color: rgba(0, 0, 0, 0.02);
    opacity: 1;
  }
`;
