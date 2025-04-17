import {leftMainSlider, rightMainSlider, leftCardSlider, searchSwitchOn, searchSwitchOff} from "./functionEvent.js";
import {printScreenCards, printManuBalls} from "./run-on-start.js";

const leftButtonMainSlider = document.querySelector("#main-slider-left");
const rightButtonMainSlider = document.querySelector(".btn-slider-right");
const leftButtonCardSlider = document.querySelector("#card-slider-left");

leftButtonMainSlider.addEventListener("click", () => leftMainSlider())
rightButtonMainSlider.addEventListener("click", () => rightMainSlider())

leftButtonCardSlider.addEventListener("click", () => leftCardSlider())

document.querySelector(".icon--search-block")
    .addEventListener("click", (event ) => setTimeout(searchSwitchOn, 100, event))
// document.addEventListener("resize", () => clacSizeCards())

document.addEventListener("click", () => searchSwitchOff())

printScreenCards()
printManuBalls()