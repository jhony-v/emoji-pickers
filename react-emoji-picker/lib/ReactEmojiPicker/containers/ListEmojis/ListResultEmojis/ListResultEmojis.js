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
    return (React.createElement("div", null,
        React.createElement(RowDivider, { to: "bottom" },
            React.createElement(Spacing, null,
                React.createElement(TextWeightPrimaryH3, null, emojiGroupName))),
        React.createElement(Spacing, null,
            React.createElement(RenderListEmojis, { data: emojiList }))));
};
export default ListResultEmojis;
