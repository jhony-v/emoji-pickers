import React, { FC } from "react";
import { act, renderHook } from "@testing-library/react-hooks";
import ReactEmojiPickerProvider from "../../features/ReactEmojiPickerFeature/ReactEmojiPickerProvider";
import useFilterEmoji from "../../hooks/useFilterEmoji";

describe("Hook filter emoji", () => {
  test("should emoji selected is correct", () => {
    const wrapper: FC = ({ children }) => <ReactEmojiPickerProvider>{children}</ReactEmojiPickerProvider>;
    const { result } = renderHook(() => useFilterEmoji(), {
      wrapper,
    });
    
    act(() => {
      result.current.setEmoji("animals");
      result.current.setEmoji("objects");
    })
    
    expect(result.current.emojiKey).toBe("objects");
  });
});
