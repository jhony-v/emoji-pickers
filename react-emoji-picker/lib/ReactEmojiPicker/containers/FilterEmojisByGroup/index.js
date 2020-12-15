import React from "react";
import { EmojiGroups } from "../../@types";
import FlexWrapper from "../../components/PicketWrappers/FlexWrapper";
import RowDivider from "../../components/RowDivider";
import useFilterEmoji from "../../hooks/useFilterEmoji";
import { ButtonGrayScaleIcon } from "./index.styles";
const emojiCategories = ["😃", "⚽️", "🐻", "🍔", "💡", "👋", "🛅", "🚘"];
const emojiCategoriesWithKeys = [...emojiCategories].map((emoji, index) => {
    return {
        emoji,
        key: Object.values(EmojiGroups)[index],
    };
});
const FilterEmojisByGroup = () => {
    const { emojiKey, setEmoji } = useFilterEmoji();
    return (React.createElement(RowDivider, { to: "bottom" },
        React.createElement(FlexWrapper, { role: "menu" }, emojiCategoriesWithKeys.map(({ emoji, key }) => {
            return (React.createElement(ButtonGrayScaleIcon, { key: key, isDisabled: emojiKey !== key, onClick: () => setEmoji(key) }, emoji));
        }))));
};
export default FilterEmojisByGroup;
