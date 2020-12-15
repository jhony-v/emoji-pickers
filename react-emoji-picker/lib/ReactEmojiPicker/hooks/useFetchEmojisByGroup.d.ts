import { EmojiGroupTypes } from "../@types";
/**
 * Hook to get a emoji group by name
 * @param emojiFilterSelected name of emoji group
 */
declare const useFetchEmojisByGroup: (emojiName: EmojiGroupTypes) => {
    emojiList: import("../@types").EmojiData[];
    emojiGroupName: string;
};
export default useFetchEmojisByGroup;
