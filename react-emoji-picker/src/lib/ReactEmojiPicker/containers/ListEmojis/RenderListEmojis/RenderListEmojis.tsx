import React, { FC } from "react";
import styled from "styled-components";
import { EmojiData } from "../../../@types";
import FlexWrapper from "../../../components/PicketWrappers/FlexWrapper";
import IconButtonEmojiSelector from "../IconButtonEmojiSelector/IconButtonEmojiSelector";

const ListWrapperCategory = styled(FlexWrapper)`
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const RenderListEmojis: FC<{ data: EmojiData[] }> = ({ data }) => {
  return (
      <ListWrapperCategory>
          {data.map((emoji, index) => (
              <IconButtonEmojiSelector key={index} emoji={emoji}>
                  {emoji.unicode}
              </IconButtonEmojiSelector>
      ))}
      </ListWrapperCategory>
  );
};

export default RenderListEmojis;
