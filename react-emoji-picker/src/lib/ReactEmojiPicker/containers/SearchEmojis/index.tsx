import React, { useEffect } from "react";
import { EmojiGroups } from "../../@types";
import EmojiSearchInput from "../../components/EmojiSearchInput";
import { useReactEmojiPickerContext } from "../../features/ReactEmojiPickerFeature/ReactEmojiPickerContext";
import getAsyncJsonEmojis from "../../utils/getAsyncJsonEmojis";

const SearchEmojis = () => {
  const { setAllEmojis } = useReactEmojiPickerContext();  
  const onSearch = (event: React.FormEvent<HTMLInputElement>) => {
    const text = event.currentTarget.value;
    const emojis = Object.values(EmojiGroups).map((emojiValue) =>  getAsyncJsonEmojis(emojiValue) );

    Promise.all(emojis).then((request) => {
      const parseData = request.map((e) => e.emojiList).flat();
      const filterDataOfAllEmojis = parseData.filter((e) => e.tags[0].includes(text));
      setAllEmojis(filterDataOfAllEmojis);
    });
  
  };

  useEffect(() => {}, [setAllEmojis]);

  return <EmojiSearchInput placeholder="Search emojis" onSearch={onSearch} />;
};

export default SearchEmojis;
