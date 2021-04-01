<h1>
    <p align="center">
        React emoji picker <img  src="./react-logo.png" width="60px" />
    </p>
</h1>

<p align="center">
    <img src="../emoji-picker.PNG" />
</p>

React emoji picker component to search emojis and use in other react projects. 
You can watch a **[demo](https://bit.dev/personal-dev/emoji-picker/react-emoji-picker)**.

Example:

```javascript
import React, { useState } from "react";
import ReactEmojiPicker from "@bit/personal-dev.emoji-picker.react-emoji-picker";

function App() {
   const [emoji, setEmoji] = useState("");
   return (
      <div>
         <h1>{emoji}</h1>
         <ReactEmojiPicker onSelected={(currentEmoji) => {
               setEmoji(currentEmoji);
            }}
         />
      </div>
   );
}
```

## :white_check_mark: Install packages

```console
> npm install
```

## :white_check_mark: Run the project

```console
> npm start
```

## :white_check_mark: Run your unit tests

```console
> npm run test
```

## :white_check_mark: Lints and fixes files

```console
> npm run eslint
```
