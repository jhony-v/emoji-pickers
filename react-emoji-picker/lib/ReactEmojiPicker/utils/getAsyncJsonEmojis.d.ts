import { EmojiListData, EmojiGroupTypes } from '../@types';
/**
 * Fetch async data of emojis
 * @param jsonName name of group emoji localed in data/emojiCategories
 */
export default function getAsyncJsonEmojis(jsonName: EmojiGroupTypes): Promise<EmojiListData>;
