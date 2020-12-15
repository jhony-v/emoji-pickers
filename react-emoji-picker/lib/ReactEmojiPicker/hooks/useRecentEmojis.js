import { useReactEmojiPickerContext } from "../features/ReactEmojiPickerFeature/ReactEmojiPickerContext";
import { localStorageEmojis } from "../utils/localStorageEmojis";
export default function useRecentEmojis() {
    const { recentEmojis, setRecentEmojis } = useReactEmojiPickerContext();
    const resetRecentEmojis = () => {
        localStorageEmojis.reset();
        setRecentEmojis([]);
    };
    return {
        isset: recentEmojis.length !== 0,
        recentEmojis,
        resetRecentEmojis,
    };
}
