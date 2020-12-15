export default function useRecentEmojis(): {
    isset: boolean;
    recentEmojis: import("../@types").RecentlyUsedEmoji[];
    resetRecentEmojis: () => void;
};
