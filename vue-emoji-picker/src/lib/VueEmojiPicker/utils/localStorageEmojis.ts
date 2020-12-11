import { RecentlyUsedEmoji } from "../@types";

enum KEY_EMOJIS {
  RECENT_EMOJIS = "recent-emojis",
}

export const localStorageEmojis = {
  /**
   * Add a new emoji to recent used
   */
  add(emojiData: RecentlyUsedEmoji[]) {
    localStorage.setItem(KEY_EMOJIS.RECENT_EMOJIS, JSON.stringify(emojiData));
  },
  /**
   * Get all emojis
   */
  get(): RecentlyUsedEmoji[] {
    const emojis = localStorage.getItem(KEY_EMOJIS.RECENT_EMOJIS);
    if (emojis === null) return [];
    const parseDataEmojis = JSON.parse(emojis);
    return parseDataEmojis;
  },

  reset() {
    localStorage.removeItem(KEY_EMOJIS.RECENT_EMOJIS);
  },
};
