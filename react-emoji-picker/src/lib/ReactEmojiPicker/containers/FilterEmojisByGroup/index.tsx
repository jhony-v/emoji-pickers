import React from "react";
import { EmojiGroups, EmojiGroupTypes } from "../../@types";
import FlexWrapper from "../../components/PicketWrappers/FlexWrapper";
import RowDivider from "../../components/RowDivider";
import useFilterEmoji from "../../hooks/useFilterEmoji";
import { ButtonGrayScaleIcon } from "./index.styles";

const emojiCategories = ["😃", "⚽️", "🐻", "🍔", "💡", "👋", "🛅", "🚘"];

interface EmojiKey {
   emoji: string;
   key: EmojiGroupTypes;
}
const emojiCategoriesWithKeys: EmojiKey[] = [...emojiCategories].map(
   (emoji, index) => {
      return {
         emoji,
         key: Object.values(EmojiGroups)[index],
      };
   }
);

const FilterEmojisByGroup = () => {
   const { emojiKey, setEmoji } = useFilterEmoji();

   return (
       <RowDivider to="bottom">
           <FlexWrapper role="menu">
               {emojiCategoriesWithKeys.map(({ emoji, key }) => {
               return (
                   <ButtonGrayScaleIcon
                     key={key}
                     isDisabled={emojiKey !== key}
                     onClick={() => setEmoji(key)}
                  >
                       {emoji}
                   </ButtonGrayScaleIcon>
               );
            })}
           </FlexWrapper>
       </RowDivider>
   );
};

export default FilterEmojisByGroup;
