export const EmojiGroups = {
  SMILEYS_EMOTION: 'smileysEmotion',
  ACTIVITIES: 'activities',
  ANIMALS: 'animals',
  FOOD_DRINK: 'foodDrink',
  OBJECTS: 'objects',
  PEOPLE_BODY: 'peopleBody',
  SYMBOLS: 'symbols',
  TRAVEL_PLACES: 'travelPlaces',
} as const;

export const EmojiTotalGroups = Object.keys(EmojiGroups).length;
export const emojiCategories = ['😃', '⚽️', '🐻', '🍔', '💡', '👋', '🛅', '🚘'];

export type EmojiGroupTypes = typeof EmojiGroups[keyof typeof EmojiGroups];

export interface NameUnicode {
  unicode: string;
}

export interface RecentlyUsedEmoji extends NameUnicode {
  tags: string[];
}

export interface EmojiData extends NameUnicode {
  tags: string[];
}

export interface EmojiListData {
  emojiList: EmojiData[];
  emojiGroup: number;
}
