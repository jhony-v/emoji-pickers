import styled, { css } from "styled-components";

type RowDividerTypes = {
  to: "top" | "bottom";
};
export default styled.div<RowDividerTypes>`
  width: 100%;
  ${(props) => props.to === "bottom" &&css`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  `}
  ${(props) => props.to === "top" && css`
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  `}
`;
