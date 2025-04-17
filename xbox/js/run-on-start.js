export {printScreenCards, printManuBalls}
import {getQuantityCards} from './helper.js';

const home = document.querySelector(".home");
const cardsBorder = document.querySelector(".exclusive").querySelector(".cards-border")
const homeBallsManu = document.querySelector(".home--balls-manu")

const srcSlider = [
    "main-slider-photo1.png",
    "main-slider-photo2.jpeg",
    "main-slider-photo3.jpeg",
    "main-slider-photo4.jpeg"
]

function printManuBalls(){
    const srcSliderLength = srcSlider.length
    for (let i = 0; i < srcSliderLength; i++) {
        let ballManu = document.createElement("div");
        ballManu.classList.add("home--balls-manu-item");
        if (i === 0){
            ballManu.classList.add("balls-manu-active");
        }
        homeBallsManu.appendChild(ballManu);
    }
}

// function clacSizeCards() {
//     let cardsBorderWidth = cardsBorder.offsetWidth;
//     let cardsBorderLength = cardsBorder.children.length;
//     let module = (cardsBorderLength - 1) * 13 - 20/3
//     let cardWidth = (cardsBorderWidth - module) / 4
//     console.log("cardWidth", cardWidth)
//     for (let card of cardsBorder.children) {
//         card.style.width = `${cardWidth}px`;
//     }
// }


function printScreenCards(){
    const quantityCardsForScreen = getQuantityCards();
    const cardsBorderLength = cardsBorder.children.length;
    const cardsBorderChildren = cardsBorder.children
    for (let index=0;  index < cardsBorderLength; ++index) {
        if (quantityCardsForScreen - 1 >= index) continue;
        cardsBorderChildren[index].style.display = `none`;
    }

}
