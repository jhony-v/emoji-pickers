import React from "react";
import ReactEmojiPicker from "./lib/ReactEmojiPicker";

function App() {
   const onSelected = (e: string) => {
      console.log(e);
   };
   return (
       <div>
           <ReactEmojiPicker onSelected={onSelected} />
       </div>
   );
}

export default App;
