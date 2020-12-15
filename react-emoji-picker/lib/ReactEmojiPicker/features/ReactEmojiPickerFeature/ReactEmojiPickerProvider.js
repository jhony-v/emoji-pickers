import React, { useEffect, useState } from "react";
import { localStorageEmojis } from "../../utils/localStorageEmojis";
import { ReactEmojiPickerContext } from "./ReactEmojiPickerContext";
const ReactEmojiPickerProvider = ({ onSelected, children, }) => {
    const [emojiFilterSelected, setFilterEmoji] = useState("smileysEmotion");
    const [emojiSelected, setEmoji] = useState({
        unicode: "",
        tags: [],
    });
    const [allEmojis, setAllEmojis] = useState([]);
    const [recentEmojis, setRecentEmojis] = useState(localStorageEmojis.get());
    useEffect(() => {
        onSelected && onSelected(emojiSelected.unicode);
    }, [emojiSelected, onSelected]);
    return (React.createElement(ReactEmojiPickerContext.Provider, { value: {
            emojiFilterSelected,
            setFilterEmoji,
            emojiSelected,
            setEmoji,
            recentEmojis,
            setRecentEmojis,
            allEmojis,
            setAllEmojis,
        } }, children));
};
export default ReactEmojiPickerProvider;
