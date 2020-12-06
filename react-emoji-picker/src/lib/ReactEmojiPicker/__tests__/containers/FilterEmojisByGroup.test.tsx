import React from "react";
import { screen } from "@testing-library/react";
import renderEmojiPicker from "../../renderEmojiPicker";
import { EmojiTotalGroups } from "../../@types";
import FilterEmojisByGroup from "../../containers/FilterEmojisByGroup";

let FilterEmojis: React.ReactElement;
beforeEach(() => {
  FilterEmojis = <FilterEmojisByGroup />;
});

describe("FilterEmojisByGroup container", () => {

  test("should exists element into document", () => {
    renderEmojiPicker(FilterEmojis);
    const emojiListFilter = screen.getByRole("menu");
    expect(emojiListFilter).toBeInTheDocument();
  });

  test("should list emoji groups to filter is equal size to EmojiGroups", () => {
    renderEmojiPicker(FilterEmojis);
    const emojiListFilter = screen.getByRole("menu");
    const emojiListFilterTotalChilds = emojiListFilter.children.length;
    expect(emojiListFilterTotalChilds).toEqual(EmojiTotalGroups);
  });
  
});
