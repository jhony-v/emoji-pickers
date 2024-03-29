<h1>
    <p align="center">
        Emoji Picker Component
    </p>
    <p align="center">
        <img  src="./technologies.png" width="200px" />
    </p>
</h1>

<p align="center">
    <img src="./emoji-picker.PNG"  />
</p>

## :white_check_mark: Description

Emoji picker component to selected emojis and search by groups. This component is created to work with **ReactJs** and **VueJS**.
* [REACT - DEMO](https://bit.dev/personal-dev/emoji-picker/react-emoji-picker)
* [VUE - DEMO](https://bit.dev/personal-dev/emoji-picker/vue-emoji-picker)

## :white_check_mark: Features

- Search emojis by tag name
- Selected emoji
- View recent emojis selected
- Filter emojis by group

## :white_check_mark: Installation

After you clone this repository, go to respective folder and run the command **"npm install"** or **"yarn install"**.
Once the dependencies are installed, yo run the next command according to the technology:

- **ReactJS:**

  ```console
  > npm start
  ```

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

- **VueJS:**

  ```console
  > npm start
  ```

  Example:

  Using Vue 2

  ```html
  <template>
    <div>
      <h1>{{emoji}}</h1>
      <vue-emoji-picker @on-selected="onSelectedEmoji"></vue-emoji-picker>
    </div>
  </template>
  <script>
    import VueEmojiPicker from "@bit/personal-dev.emoji-picker.vue-emoji-picker";
    export default {
      components: {
        VueEmojiPicker,
      },
      data() {
        return {
          emoji: "",
        };
      },
      methods: {
        onSelectedEmoji(emoji) {
          this.emoji = emoji;
        },
      },
    };
  </script>
  ```

  Using Vue 3
  
  ```html
  <template>
    <div>
      <h1>{{emoji}}</h1>
      <vue-emoji-picker @on-selected="onSelectedEmoji"></vue-emoji-picker>
    </div>
  </template>
  <script>
    import { defineComponent, ref } from "vue";
    import VueEmojiPicker from '@bit/personal-dev.emoji-picker.vue-emoji-picker';
    export default defineComponent({
      components: {
        VueEmojiPicker
      },
      setup() {
        const emoji = ref("");
        const onSelectedEmoji = (currentEmoji) => {
          emoji.value = currentEmoji;
        }
        
        return {
          emoji,
          onSelectedEmoji
        }
      }
    });
  </script>
  ```
