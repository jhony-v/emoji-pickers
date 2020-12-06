export const EmojiGroups = {
  SMILEYS_EMOTION: "smileysEmotion",
  ACTIVITIES: "activities",
  ANIMALS: "animals",
  FOOD_DRINK: "foodDrink",
  OBJECTS: "objects",
  PEOPLE_BODY: "peopleBody",
  SYMBOLS: "symbols",
  TRAVEL_PLACES: "travelPlaces",
} as const;

export const EmojiTotalGroups = Object.keys(EmojiGroups).length;

export type EmojiGroupTypes = typeof EmojiGroups[keyof typeof EmojiGroups];

interface NameUnicode {
  unicode: string;
}

export interface RecentlyUsedEmoji extends NameUnicode {
  tag: string;
}
export interface EmojiListData extends NameUnicode {
  tags: [string, string];
}
export interface EmojiData {
  emojiList: EmojiListData[];
  emojiGroup: number;
}
