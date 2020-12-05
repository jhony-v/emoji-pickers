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

export type EmojiGroupTypes = typeof EmojiGroups[keyof typeof EmojiGroups];


export interface EmojiListData {
  unicode: string;
  tags: [string, string];
}
export interface EmojiData {
  emojiList: EmojiListData[];
  emojiGroup: number;
}
