import styled, { css } from "styled-components";
export default styled.div `
  width: 100%;
  ${(props) => props.to === "bottom" && css `
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  `}
  ${(props) => props.to === "top" && css `
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  `}
`;
