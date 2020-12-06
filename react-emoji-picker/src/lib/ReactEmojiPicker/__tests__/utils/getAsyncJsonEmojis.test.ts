import getAsyncJsonEmojis from "../../utils/getAsyncJsonEmojis";

describe("Async json emojis", () => {
    
  test("should get emoji", async () => {
    let data;  
    data = await getAsyncJsonEmojis("animals");
    expect(data.emojiList).not.toHaveLength(0);

    data = await getAsyncJsonEmojis("objects");
    expect(data.emojiList).not.toHaveLength(0);
  });
  
});
