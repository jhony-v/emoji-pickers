import activities from "../data/emojiData/activities.json";
import animals from "../data/emojiData/animals.json";
import foodDrink from "../data/emojiData/foodDrink.json";
import objects from "../data/emojiData/objects.json";
import peopleBody from "../data/emojiData/peopleBody.json";
import smileysEmotion from "../data/emojiData/smileysEmotion.json";
import symbols from "../data/emojiData/symbols.json";
import travelPlaces from "../data/emojiData/travelPlaces.json";

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
   group: number;
}

type SetEmojisAction<T> = (emojis: T[] | ((emojis: T[]) => T[])) => void;
export interface ReactEmojiPickerContextState {
   emojiFilterSelected: EmojiGroupTypes;
   emojiSelected: EmojiData;
   recentEmojis: RecentlyUsedEmoji[];
   allEmojis: EmojiData[];
   setRecentEmojis: SetEmojisAction<RecentlyUsedEmoji>;
   setAllEmojis: SetEmojisAction<EmojiData>;
   setFilterEmoji: (emojiGroup: EmojiGroupTypes) => void;
   setEmoji: (emoji: EmojiData) => void;
}


export const allEmojiGroupsData : { [ key in EmojiGroupTypes ] : EmojiListData } = {
   animals,
   activities,
   foodDrink,
   objects,
   peopleBody,
   smileysEmotion,
   symbols,
   travelPlaces
 }