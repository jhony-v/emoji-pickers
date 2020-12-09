import React, { memo } from "react";
import styled from "styled-components";
import { EmojiData } from "../../../@types";
import useSelectStorageEmojis from "../../../hooks/useSelectStorageEmojis";

export const IconWrapper = styled.div`
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

type IconButtonEmojiSelectorProps = {
  emoji: EmojiData;
  children : React.ReactNode
};
const IconButtonEmojiSelector = ({children,emoji} : IconButtonEmojiSelectorProps) => {
  const { selectEmoji } = useSelectStorageEmojis();
  return (
      <IconWrapper onClick={() => selectEmoji(emoji)}>{children}</IconWrapper>
  );
};

export default memo(IconButtonEmojiSelector);
