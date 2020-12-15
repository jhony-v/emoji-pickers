import React from "react";
import styled from "styled-components";
import FlexWrapper from "../../../components/PicketWrappers/FlexWrapper";
import RowDivider from "../../../components/RowDivider";
import { TextWeightPrimaryH3 } from "../../../components/TextLabels";
import useRecentEmojis from "../../../hooks/useRecentEmojis";
import { Spacing } from "../index.styles";
import RenderListEmojis from "../RenderListEmojis/RenderListEmojis";
const HeaderWrapper = styled(FlexWrapper) ``;
const ResetText = styled.span `
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9rem;
  color: rgb(30, 130, 230);
  font-family: Arial, Helvetica, sans-serif;
`;
const RecentEmojis = () => {
    const { isset, recentEmojis, resetRecentEmojis } = useRecentEmojis();
    if (isset)
        return (React.createElement(RowDivider, { to: "bottom" },
            React.createElement(Spacing, null,
                React.createElement(HeaderWrapper, null,
                    React.createElement(TextWeightPrimaryH3, null, "Recent"),
                    React.createElement(ResetText, { onClick: () => resetRecentEmojis(), role: "button" }, "Clear")),
                React.createElement(RenderListEmojis, { data: recentEmojis }))));
    return null;
};
export default RecentEmojis;
