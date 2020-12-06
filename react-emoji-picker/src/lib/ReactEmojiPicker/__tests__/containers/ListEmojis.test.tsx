import React from "react";
import { act, screen, waitFor } from "@testing-library/react";
import renderEmojiPicker from "../../renderEmojiPicker";
import ListEmojis from "../../containers/ListEmojis";

describe("ListEmojis container", () => {

    test("should render items correctly", async () => {
    jest.useFakeTimers();
    renderEmojiPicker(<ListEmojis />);
    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(screen.queryByText(/face/)).toBeNull(); 
    
    const textCategoryElement = await waitFor(() => screen.getByText(/face/));
    expect(textCategoryElement).toHaveTextContent(/face/);
  });

});
