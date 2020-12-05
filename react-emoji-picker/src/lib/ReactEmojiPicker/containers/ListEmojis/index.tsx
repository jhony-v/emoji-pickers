import React from "react";
import SkeletonGridLoader from "../../components/Loaders/SkeletonGridLoader";
import RowDivider from "../../components/RowDivider";
import { TextWeightPrimaryH3 } from "../../components/TextLabels";
import { useReactEmojiPickerContext } from "../../features/ReactEmojiPickerFeature/ReactEmojiPickerContext";
import useFetchEmojisByGroup from "../../hooks/useFetchEmojisByGroup";
import { IconButton, ListWrapper, ListWrapperCategory, Spacing } from "./ListEmojis.styles";


const ListEmojis = () => {
  const { emojiFilterSelected } = useReactEmojiPickerContext();
  const { emojiList, emojiGroupName , loading } = useFetchEmojisByGroup(emojiFilterSelected);

  if(loading) return <SkeletonGridLoader repeat={10} />;
  return (
    <ListWrapper>
      <RowDivider to="bottom">
        <Spacing>
          <TextWeightPrimaryH3>
            {emojiGroupName}
          </TextWeightPrimaryH3>
        </Spacing>
      </RowDivider>
      <Spacing>
        <ListWrapperCategory>
          {emojiList.map((emoji, index) => {
            return <IconButton key={index}>{emoji.unicode}</IconButton>;
          })}
        </ListWrapperCategory>
      </Spacing>
    </ListWrapper>
  );
};

export default ListEmojis;
