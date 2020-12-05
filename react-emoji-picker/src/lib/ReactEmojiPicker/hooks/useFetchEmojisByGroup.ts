import { useEffect, useState } from "react";
import { EmojiData, EmojiGroupTypes } from "../@types";

const getAsyncJsonEmojis = async (jsonName: EmojiGroupTypes): Promise<EmojiData> => {
  const request = await import(`../data/emojiData/${jsonName}.json`);
  return request.default;
};


const useFetchEmojisByGroup = (emojiFilterSelected : EmojiGroupTypes) => {
  const [{ emojiList }, setData] = useState<EmojiData>({ emojiGroup: 0, emojiList: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAsyncJsonEmojis(emojiFilterSelected).then(request => {
      setData(request);
      setLoading(false);
    });
  },[emojiFilterSelected]);

  return {
      loading,
      emojiList,
      emojiGroupName : emojiList[0]?.tags[0]
  };
};

export default useFetchEmojisByGroup;
