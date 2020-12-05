import React from "react";
import { EmojiGroups, EmojiGroupTypes } from "../../@types";
import FlexWrapper from "../../components/PicketWrappers/FlexWrapper";
import RowDivider from "../../components/RowDivider";
import { useReactEmojiPickerContext } from "../../features/ReactEmojiPickerFeature/ReactEmojiPickerContext";
import { ButtonGrayScaleIcon } from "./index.styles";

const emojiCategories = ["😃","⚽️", "🐻", "🍔", "💡","👋","🛅","🚘"];

interface EmojiKey {
  emoji: string;
  key: EmojiGroupTypes;
}
const emojiCategoriesWithKeys: EmojiKey[] = [...emojiCategories].map( (emoji, index) => {
    return {
      emoji,
      key: Object.values(EmojiGroups)[index],
    };
  }
);

const FilterEmojisByGroup = () => {
  const { emojiFilterSelected, setFilterEmoji } = useReactEmojiPickerContext();

  return (
    <RowDivider to="bottom">
      <FlexWrapper>
        {emojiCategoriesWithKeys.map(({ emoji, key }) => {
          return (
            <ButtonGrayScaleIcon key={key} isDisabled={emojiFilterSelected !== key} onClick={() => setFilterEmoji(key)} >
              {emoji}
            </ButtonGrayScaleIcon>
          );
        })}
      </FlexWrapper>
    </RowDivider>
  );
};

export default FilterEmojisByGroup;
