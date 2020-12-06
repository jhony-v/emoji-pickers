import React from 'react'
import { render, RenderResult } from "@testing-library/react";
import ReactEmojiPickerProvider from './features/ReactEmojiPickerFeature/ReactEmojiPickerProvider';

/**
 * Custom render with ReactEmojiPickerProvider
 * @param component UI Component 
 * @param options options of render 
 */
const renderEmojiPicker = (component : React.ReactElement,options ?: RenderResult) => {
    return render(component,{
          wrapper : ({children}) => <ReactEmojiPickerProvider>{children}</ReactEmojiPickerProvider>,
          ...options
    })
}

export default renderEmojiPicker
