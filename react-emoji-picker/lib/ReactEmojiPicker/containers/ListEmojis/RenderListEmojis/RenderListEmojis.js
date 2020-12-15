import React from "react";
import styled from "styled-components";
import FlexWrapper from "../../../components/PicketWrappers/FlexWrapper";
import IconButtonEmojiSelector from "../IconButtonEmojiSelector/IconButtonEmojiSelector";
const ListWrapperCategory = styled(FlexWrapper) `
  flex-wrap: wrap;
  justify-content: flex-start;
`;
const RenderListEmojis = ({ data }) => {
    return (React.createElement(ListWrapperCategory, null, data.map((emoji, index) => (React.createElement(IconButtonEmojiSelector, { key: index, emoji: emoji }, emoji.unicode)))));
};
export default RenderListEmojis;
