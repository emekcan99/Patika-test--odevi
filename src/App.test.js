import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'

import App from './App';

describe("App test", ()=>{
  beforeEach(()=> render(<App></App>));

  test("header",()=>{
    let title = screen.getByText("Emoji Search")
    expect(title).toBeInTheDocument();
  }) 
  test("listed emojies", ()=>{
    let items = screen.getAllByRole("img")
    expect(items.length).toEqual(22)
  })
  test("filtered", () => {
    let emoji = "1234";
    let input = screen.getByRole("textbox");
    userEvent.type(input, emoji);
    expect(screen.getByText(emoji)).toBeInTheDocument;
  });
  test("copy", ()=>{
    let copiedText = screen.getAllByText("Click to copy emoji");
    userEvent.click(copiedText);
    let input = screen.getByRole("textbox");
    userEvent.paste(input,copiedText);
    expect(input.length===1);
    
  })

})