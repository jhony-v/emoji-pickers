import { RecentlyUsedEmoji } from "../@types";
export declare const localStorageEmojis: {
    /**
     * Add a new emoji to recent used
     */
    add(emojiData: RecentlyUsedEmoji[]): void;
    /**
     * Get all emojis
     */
    get(): RecentlyUsedEmoji[];
    reset(): void;
};
