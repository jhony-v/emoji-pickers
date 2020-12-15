import React from "react";
import { allEmojiGroupsData } from "../../@types";
import EmojiSearchInput from "../../components/EmojiSearchInput";
import { useReactEmojiPickerContext } from "../../features/ReactEmojiPickerFeature/ReactEmojiPickerContext";
const SearchEmojis = () => {
    const { setAllEmojis } = useReactEmojiPickerContext();
    const onSearch = (event) => {
        const text = event.currentTarget.value;
        const emojis = Object.values(allEmojiGroupsData);
        Promise.all(emojis).then((request) => {
            const parseData = request.map((e) => e.emojiList).flat();
            const filterDataOfAllEmojis = parseData.filter((e) => e.tags[0].includes(text));
            setAllEmojis(filterDataOfAllEmojis);
        });
    };
    return React.createElement(EmojiSearchInput, { placeholder: "Search emojis", onSearch: onSearch });
};
export default SearchEmojis;
