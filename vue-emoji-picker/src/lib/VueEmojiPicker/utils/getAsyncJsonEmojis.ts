import { EmojiListData, EmojiGroupTypes } from '../@types';

/**
 * Fetch async data of emojis
 * @param jsonName name of group emoji localed in data/emojiCategories
 */
export default async function getAsyncJsonEmojis(jsonName: EmojiGroupTypes) : Promise<EmojiListData> {
    const request = await import(`../data/emojiData/${jsonName}.json`);
    return request.default;
}
