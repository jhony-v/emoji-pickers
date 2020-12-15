import { useEffect } from "react";
import { allEmojiGroupsData, EmojiGroupTypes } from "../@types";
import { useReactEmojiPickerContext } from "../features/ReactEmojiPickerFeature/ReactEmojiPickerContext";

/**
 * Hook to get a emoji group by name
 * @param emojiFilterSelected name of emoji group
 */
const useFetchEmojisByGroup = (emojiName : EmojiGroupTypes) => {
  const { allEmojis, setAllEmojis } = useReactEmojiPickerContext();

  useEffect(() => {
    setAllEmojis(allEmojiGroupsData[emojiName].emojiList);
  },[emojiName,setAllEmojis]);

  return {
      emojiList : allEmojis,
      emojiGroupName : allEmojis[0]?.tags[0]
  };
};

export default useFetchEmojisByGroup;
