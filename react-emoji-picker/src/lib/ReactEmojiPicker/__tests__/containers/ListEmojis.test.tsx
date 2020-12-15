import React from "react";
import { screen, waitFor } from "@testing-library/react";
import renderEmojiPicker from "../../renderEmojiPicker";
import ListEmojis from "../../containers/ListEmojis";

describe("ListEmojis container", () => {

    test("should render items correctly", async () => {
    renderEmojiPicker(<ListEmojis />);

    const textCategoryElement = await waitFor(() => screen.getByText(/face/));
    expect(textCategoryElement).toHaveTextContent(/face/);
  });

});
