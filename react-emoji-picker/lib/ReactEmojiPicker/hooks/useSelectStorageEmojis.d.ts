import { EmojiData } from "../@types";
export default function useSelectStorageEmojis(): {
    selectEmoji: (emojiSelected: EmojiData) => void;
};
