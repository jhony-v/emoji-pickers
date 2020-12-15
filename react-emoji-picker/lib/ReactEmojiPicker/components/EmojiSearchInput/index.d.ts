import React, { FC } from "react";
declare type EmojiSearchInputProps = {
    placeholder?: string;
    onSearch?: (e: React.FormEvent<HTMLInputElement>) => void;
};
declare const EmojiSearchInput: FC<EmojiSearchInputProps>;
export default EmojiSearchInput;
