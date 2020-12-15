import React from "react";
import { ListWrapper } from "./index.styles";
import ListResultEmojis from "./ListResultEmojis/ListResultEmojis";
import RecentEmojis from "./RecentEmojis/RecentEmojis";
const ListEmojis = () => {
    return (React.createElement(ListWrapper, null,
        React.createElement(RecentEmojis, null),
        React.createElement(ListResultEmojis, null)));
};
export default ListEmojis;
