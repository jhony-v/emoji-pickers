import React from "react";
import PopoverWrapper from "./components/PicketWrappers/PopoverWrapper";
import FilterEmojisByGroup from "./containers/FilterEmojisByGroup";
import ListEmojis from "./containers/ListEmojis";
import SearchEmojis from "./containers/SearchEmojis";
import ReactEmojiPickerProvider from "./features/ReactEmojiPickerFeature/ReactEmojiPickerProvider";

type ReactEmojiPickerProps = {
    onSelected?: (emoji: string) => void;
};
const ReactEmojiPicker = ({ onSelected }: ReactEmojiPickerProps) => {
    return (
        <PopoverWrapper>
            <ReactEmojiPickerProvider onSelected={onSelected}>
                <SearchEmojis />
                <FilterEmojisByGroup />
                <ListEmojis />
            </ReactEmojiPickerProvider>
        </PopoverWrapper>
    );
};

export default ReactEmojiPicker;
