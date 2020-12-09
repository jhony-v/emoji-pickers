import React from "react";
import ReactEmojiPicker from "./lib/ReactEmojiPicker";

function App() {
  return <div>
    <ReactEmojiPicker  onSelected={e => console.log(e)}/>
  </div>;
}

export default App;
