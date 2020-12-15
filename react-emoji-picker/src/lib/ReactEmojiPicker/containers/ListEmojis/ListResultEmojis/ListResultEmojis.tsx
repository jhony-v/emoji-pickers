import React from "react";
import RowDivider from "../../../components/RowDivider";
import { TextWeightPrimaryH3 } from "../../../components/TextLabels";
import { useReactEmojiPickerContext } from "../../../features/ReactEmojiPickerFeature/ReactEmojiPickerContext";
import useFetchEmojisByGroup from "../../../hooks/useFetchEmojisByGroup";
import { Spacing } from "../index.styles";
import RenderListEmojis from "../RenderListEmojis/RenderListEmojis";

const ListResultEmojis = () => {
  const { emojiFilterSelected } = useReactEmojiPickerContext();
  const { emojiList, emojiGroupName } = useFetchEmojisByGroup(emojiFilterSelected);

  return (
      <div>
          <RowDivider to="bottom">
              <Spacing>
                  <TextWeightPrimaryH3>{emojiGroupName}</TextWeightPrimaryH3>
              </Spacing>
          </RowDivider>
          <Spacing>
              <RenderListEmojis data={emojiList} />
          </Spacing>
      </div>
  );
};

export default ListResultEmojis;
