/**
 * hook to filter emoji and get the ky of emoji selected
 */
declare const useFilterEmoji: () => {
    emojiKey: import("../@types").EmojiGroupTypes;
    setEmoji: (emojiGroup: import("../@types").EmojiGroupTypes) => void;
};
export default useFilterEmoji;
