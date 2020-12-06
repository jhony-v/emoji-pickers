import { useEffect, useState } from "react";
import { EmojiData, EmojiGroupTypes } from "../@types";
import getAsyncJsonEmojis from "../utils/getAsyncJsonEmojis";

/**
 * Hook to get a emoji group by name
 * @param emojiFilterSelected name of emoji group
 */
const useFetchEmojisByGroup = (emojiName : EmojiGroupTypes) => {
  const [{ emojiList }, setData] = useState<EmojiData>({ emojiGroup: 0, emojiList: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAsyncJsonEmojis(emojiName).then(request => {
      setData(request);
      setLoading(false);
    });
  },[emojiName]);

  return {
      loading,
      emojiList,
      emojiGroupName : emojiList[0]?.tags[0]
  };
};

export default useFetchEmojisByGroup;
