import React from "react";
import PopoverWrapper from "./components/PicketWrappers/PopoverWrapper";
import FilterEmojisByGroup from "./containers/FilterEmojisByGroup";
import ListEmojis from "./containers/ListEmojis";
import SearchEmojis from "./containers/SearchEmojis";
import ReactEmojiPickerProvider from "./features/ReactEmojiPickerFeature/ReactEmojiPickerProvider";

const ReactEmojiPicker = () => {
  return (
    <PopoverWrapper>
      <ReactEmojiPickerProvider>
        <SearchEmojis />
        <FilterEmojisByGroup />
        <ListEmojis />
      </ReactEmojiPickerProvider>
    </PopoverWrapper>
  );
};

export default ReactEmojiPicker;
