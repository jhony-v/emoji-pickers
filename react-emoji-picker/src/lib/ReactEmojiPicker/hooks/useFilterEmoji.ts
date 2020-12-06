import { useReactEmojiPickerContext } from "../features/ReactEmojiPickerFeature/ReactEmojiPickerContext";

/**
 * hook to filter emoji and get the ky of emoji selected
 */
const useFilterEmoji = () => {
  const { emojiFilterSelected, setFilterEmoji } = useReactEmojiPickerContext();
  return {
    emojiKey: emojiFilterSelected,
    setEmoji: setFilterEmoji,
  };
};

export default useFilterEmoji;
