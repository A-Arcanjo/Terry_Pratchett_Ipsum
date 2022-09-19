"use strict";
//* TERRY PRATCHETT DUMMY TEXT GENERATOR

import { text } from "./text.js";

const display = document.querySelector(".display");
const button = document.querySelector(".button");
const amount = document.querySelector(".amount");



function ipsumGenerator(e) {
  e.preventDefault();
  const parAmount = parseInt(amount.value);
  // parameter - the input of the desired number of paragraphs
  const random = Math.floor(Math.random() * text.length); // returns a random integer, round it down based on text.length
  display.textContent = `${text[random]}`;

  // IF parameter is empty/NaN || negative || greater than 10 THEN CALL one random paragraph
  if (isNaN(parAmount) || parAmount <= 0 || parAmount > 10) {
    return `${text[random]}`; // pass variable text with random value, [indexOf]
  } else {
    let dummyText = text
      .slice(0, parAmount) // .slice starts index 0, parAmount determines the indexOf the second cut, where the copy of the array will be created
       dummyText = dummyText.map((item)=> {
        return `${item}`
       }) 
      .join("\n"); // it will print the paragraphs as one text, without it we get an array with strings.

    display.textContent = `${dummyText}`;
  }
  

}

//console.log(ipsumGenerator());

button.addEventListener("click", ipsumGenerator);
