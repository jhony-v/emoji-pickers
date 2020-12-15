import React, { memo } from "react";
import styled from "styled-components";
import useSelectStorageEmojis from "../../../hooks/useSelectStorageEmojis";
export const IconWrapper = styled.div `
  font-size: 1.2rem;
  text-align: center;
  padding: 5px;
  width: 27px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
const IconButtonEmojiSelector = ({ children, emoji }) => {
    const { selectEmoji } = useSelectStorageEmojis();
    return (React.createElement(IconWrapper, { onClick: () => selectEmoji(emoji) }, children));
};
export default memo(IconButtonEmojiSelector);
