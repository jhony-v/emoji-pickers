import React, { useState } from "react";
import ReactEmojiPicker from "./lib/ReactEmojiPicker";

function App() {
   const [ emoji , setEmoji ] = useState(""); 
   return (
       <div>
           <h1>{emoji}</h1>
           <ReactEmojiPicker onSelected={currentEmoji => {
               setEmoji(currentEmoji);
           }} />
       </div>
   );
}

export default App;
