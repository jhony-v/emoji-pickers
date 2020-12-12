import React, { useState } from "react";
import ReactEmojiPicker from "./lib/ReactEmojiPicker";

function App() {
   const [ emoji , setEmoji ] = useState(""); 
   const onSelected = (e: string) => {
       setEmoji(e);
   };
   return (
       <div>
           <h1>{emoji}</h1>
           <ReactEmojiPicker onSelected={onSelected} />
       </div>
   );
}

export default App;
