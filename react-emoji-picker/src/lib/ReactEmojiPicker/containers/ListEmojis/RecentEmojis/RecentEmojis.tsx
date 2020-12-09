import React from "react";
import styled from "styled-components";
import FlexWrapper from "../../../components/PicketWrappers/FlexWrapper";
import RowDivider from "../../../components/RowDivider";
import { TextWeightPrimaryH3 } from "../../../components/TextLabels";
import useRecentEmojis from "../../../hooks/useRecentEmojis";
import { Spacing } from "../ListEmojis.styles";
import RenderListEmojis from "../RenderListEmojis/RenderListEmojis";

const HeaderWrapper = styled(FlexWrapper)``;

const ResetText = styled.span`
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9rem;
  color: rgb(30, 130, 230);
  font-family: Arial, Helvetica, sans-serif;
`;

const RecentEmojis = () => {
  const { isset, recentEmojis, resetRecentEmojis } = useRecentEmojis();
  if (isset)
    return (
      <RowDivider to="bottom">
        <Spacing>
          <HeaderWrapper>
            <TextWeightPrimaryH3>Recent</TextWeightPrimaryH3>
            <ResetText onClick={() => resetRecentEmojis()} role="button">
              Clear
            </ResetText>
          </HeaderWrapper>
          <RenderListEmojis data={recentEmojis} />
        </Spacing>
      </RowDivider>
    );
  return null;
};

export default RecentEmojis;
