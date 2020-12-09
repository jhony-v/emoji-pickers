import React from "react";
import { ListWrapper } from "./ListEmojis.styles";
import ListResultEmojis from "./ListResultEmojis/ListResultEmojis";
import RecentEmojis from "./RecentEmojis/RecentEmojis";

const ListEmojis = () => {
   return (
       <ListWrapper>
           <RecentEmojis />
           <ListResultEmojis />
       </ListWrapper>
   );
};

export default ListEmojis;
