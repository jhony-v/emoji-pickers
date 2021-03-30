import React from "react";
import { allEmojiGroupsData, EmojiData } from "../../@types";
import EmojiSearchInput from "../../components/EmojiSearchInput";
import { useReactEmojiPickerContext } from "../../features/ReactEmojiPickerFeature/ReactEmojiPickerContext";
import debounce from "lodash.debounce";


const SearchEmojis = () => {
  const { setAllEmojis, emojiFilterSelected  } = useReactEmojiPickerContext();  

  const onSearch = debounce((event: React.FormEvent<HTMLInputElement>) => {
    let emojisSearched : EmojiData[];
    const text = event.currentTarget.value;
    const emojis = Object.values(allEmojiGroupsData);
    const parseData = emojis.map((e) => e.emojiList).flat();

    // get all emojis containing current emoji filter
    if(text.trim() === "") emojisSearched = allEmojiGroupsData[emojiFilterSelected].emojiList; 
    // get emojis containing the input text on their tags
    else emojisSearched = parseData.filter((e) => e.tags[0].includes(text));      

    setAllEmojis(emojisSearched);

  },500);

  return <EmojiSearchInput placeholder="Search emojis" onSearch={onSearch} />;
};

export default SearchEmojis;
