var KEY_EMOJIS;
(function (KEY_EMOJIS) {
    KEY_EMOJIS["RECENT_EMOJIS"] = "recent-emojis";
})(KEY_EMOJIS || (KEY_EMOJIS = {}));
export const localStorageEmojis = {
    /**
     * Add a new emoji to recent used
     */
    add(emojiData) {
        localStorage.setItem(KEY_EMOJIS.RECENT_EMOJIS, JSON.stringify(emojiData));
    },
    /**
     * Get all emojis
     */
    get() {
        const emojis = localStorage.getItem(KEY_EMOJIS.RECENT_EMOJIS);
        if (emojis === null)
            return [];
        const parseDataEmojis = JSON.parse(emojis);
        return parseDataEmojis;
    },
    reset() {
        localStorage.removeItem(KEY_EMOJIS.RECENT_EMOJIS);
    },
};
