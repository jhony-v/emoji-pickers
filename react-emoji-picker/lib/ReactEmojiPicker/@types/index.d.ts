export declare const EmojiGroups: {
    readonly SMILEYS_EMOTION: "smileysEmotion";
    readonly ACTIVITIES: "activities";
    readonly ANIMALS: "animals";
    readonly FOOD_DRINK: "foodDrink";
    readonly OBJECTS: "objects";
    readonly PEOPLE_BODY: "peopleBody";
    readonly SYMBOLS: "symbols";
    readonly TRAVEL_PLACES: "travelPlaces";
};
export declare const EmojiTotalGroups: number;
export declare type EmojiGroupTypes = typeof EmojiGroups[keyof typeof EmojiGroups];
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
declare type SetEmojisAction<T> = (emojis: T[] | ((emojis: T[]) => T[])) => void;
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
export declare const allEmojiGroupsData: {
    [key in EmojiGroupTypes]: EmojiListData;
};
export {};
