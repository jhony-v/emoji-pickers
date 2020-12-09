import React, { useEffect, useState } from "react";
import { EmojiData, EmojiGroups } from "../../@types";
import EmojiSearchInput from "../../components/EmojiSearchInput";
import getAsyncJsonEmojis from "../../utils/getAsyncJsonEmojis";

const SearchEmojis = () => {
  const [emojis, setEmojis] = useState<EmojiData[]>([]);
  
  const onSearch = (event: React.FormEvent<HTMLInputElement>) => {
    const text = event.currentTarget.value;
    const emojis = Object.values(EmojiGroups).map((emojiValue) =>  getAsyncJsonEmojis(emojiValue) );

    Promise.all(emojis).then((request) => {
      const parseData = request.map((e) => e.emojiList).flat();
      setEmojis(parseData.filter((e) => e.tags[0].includes(text)));
    });
  
  };

  useEffect(() => {}, [emojis]);

  return <EmojiSearchInput placeholder="Search emojis" onSearch={onSearch} />;
};

export default SearchEmojis;
