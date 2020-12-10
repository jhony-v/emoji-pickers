import { useEffect, useState } from "react";
import { EmojiGroupTypes } from "../@types";
import { useReactEmojiPickerContext } from "../features/ReactEmojiPickerFeature/ReactEmojiPickerContext";
import getAsyncJsonEmojis from "../utils/getAsyncJsonEmojis";

/**
 * Hook to get a emoji group by name
 * @param emojiFilterSelected name of emoji group
 */
const useFetchEmojisByGroup = (emojiName : EmojiGroupTypes) => {
  const [loading, setLoading] = useState(true);
  const { allEmojis, setAllEmojis } = useReactEmojiPickerContext();

  useEffect(() => {
    setLoading(true);
    getAsyncJsonEmojis(emojiName).then(({emojiList}) => {
      setAllEmojis(emojiList);
      setLoading(false);
    });
  },[emojiName,setAllEmojis]);

  return {
      loading,
      emojiList : allEmojis,
      emojiGroupName : allEmojis[0]?.tags[0]
  };
};

export default useFetchEmojisByGroup;
