import { useEffect } from "react";
import { useReactEmojiPickerContext } from "../features/ReactEmojiPickerFeature/ReactEmojiPickerContext";
import { localStorageEmojis } from "../utils/localStorageEmojis";
const limitEmojis = 7;
export default function useSelectStorageEmojis() {
    const { setRecentEmojis, setEmoji, recentEmojis } = useReactEmojiPickerContext();
    const validateNotRepeatEmojis = (emojiSelected) => {
        return !localStorageEmojis.get().some(emoji => emoji.unicode === emojiSelected.unicode);
    };
    useEffect(() => {
        localStorageEmojis.add(recentEmojis);
    }, [recentEmojis]);
    const selectEmoji = (emojiSelected) => {
        setEmoji(emojiSelected);
        if (validateNotRepeatEmojis(emojiSelected)) {
            setRecentEmojis((emojis) => {
                if (emojis.length >= limitEmojis)
                    return [
                        emojiSelected,
                        ...emojis,
                    ].splice(0, emojis.length);
                return [...emojis,
                    emojiSelected
                ];
            });
        }
    };
    return {
        selectEmoji,
    };
}
