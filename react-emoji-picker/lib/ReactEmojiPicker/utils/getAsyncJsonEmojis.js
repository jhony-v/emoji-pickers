/**
 * Fetch async data of emojis
 * @param jsonName name of group emoji localed in data/emojiCategories
 */
export default async function getAsyncJsonEmojis(jsonName) {
    const request = await import(`../data/emojiData/${jsonName}.json`);
    return request.default;
}
