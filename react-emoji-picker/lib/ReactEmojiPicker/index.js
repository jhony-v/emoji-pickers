import React from "react";
import PopoverWrapper from "./components/PicketWrappers/PopoverWrapper";
import FilterEmojisByGroup from "./containers/FilterEmojisByGroup";
import ListEmojis from "./containers/ListEmojis";
import SearchEmojis from "./containers/SearchEmojis";
import ReactEmojiPickerProvider from "./features/ReactEmojiPickerFeature/ReactEmojiPickerProvider";
const ReactEmojiPicker = ({ onSelected }) => {
    return (React.createElement(PopoverWrapper, null,
        React.createElement(ReactEmojiPickerProvider, { onSelected: onSelected },
            React.createElement(SearchEmojis, null),
            React.createElement(FilterEmojisByGroup, null),
            React.createElement(ListEmojis, null))));
};
export default ReactEmojiPicker;
