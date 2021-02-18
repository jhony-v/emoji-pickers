<h1>
    <p align="center">
        Vue emoji picker <img  src="./vue-logo.png" width="33px" />
    </p>
</h1>

<p align="center">
    <img src="../emoji-picker.PNG" />
</p>

**[VIEW DEMO](https://bit.dev/personal-dev/emoji-picker/vue-emoji-picker)**

Example:

```html
<template>
  <div>
    <h1>{{emoji}}</h1>
    <vue-emoji-picker @on-selected="onSelectedEmoji"></vue-emoji-picker>
  </div>
</template>
<script>
  import VueEmojiPicker from '@bit/personal-dev.emoji-picker.vue-emoji-picker';
  export default {
    components: {
      VueEmojiPicker
    },
    data() {
      return {
        emoji: ''
      };
    },
    methods: {
      onSelectedEmoji(emoji) {
        this.emoji = emoji;
      }
    }
  };
</script>
```

## :white_check_mark: Install packages

Install vue cli

```console
> npm install
```

Install project dependencies

```console
> npm install
```

## :white_check_mark: Install packages

```console
> npm run start
```

## :white_check_mark: Run your unit tests

```console
> npm run test:unit
```

## :white_check_mark: Lints and fixes files

```console
> npm run lint
```
