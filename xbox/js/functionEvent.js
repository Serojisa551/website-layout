export {leftMainSlider, rightMainSlider, leftCardSlider, searchSwitchOn, searchSwitchOff}
import {getHomeBackgroundFileName, getQuantityCards, } from './helper.js';

const home = document.querySelector(".home");
const cardsBorder = document.querySelector(".exclusive").querySelector(".cards-border")
const homeBallsManu = document.querySelector(".home--balls-manu")
const headerNav = document.querySelector(".header--nav");

const srcSlider = [
        "main-slider-photo1.png",
        "main-slider-photo2.jpeg",
        "main-slider-photo3.jpeg",
        "main-slider-photo4.jpeg"
    ]

const srcSliderInfo = {
    0:["Star Wars", "Battlefront II"],
    1:["Name 1game", "About 1game"],
    2:["Name 2game", "About 2game"],
    3:["Name 3game", "About 3game"],
};

function leftMainSlider(){
    const homeTitle = home.querySelector(".home--title");
    const homeSubtitle = home.querySelector(".home--subtitle");
    const homeBallsManuChildren = homeBallsManu.children

    //берет чистый названия файла

    if (home.style.background === ""){
        home.style.background = `url( ../image/img/main-slider/${srcSlider[1]}) no-repeat center / cover`
        homeTitle.innerText = srcSliderInfo[1][0];
        homeSubtitle.innerText = srcSliderInfo[1][1];
        homeBallsManuChildren[0].classList.remove("balls-manu-active");
        homeBallsManuChildren[1].classList.add("balls-manu-active")
        return;
    }

    const homeBackground = getHomeBackgroundFileName(home);

    const indexHomeBackgroundInArray = srcSlider.indexOf(homeBackground)
    if (indexHomeBackgroundInArray === -1) return;
    else if (indexHomeBackgroundInArray <= srcSlider.length - 2) {
        homeBallsManuChildren[homeBallsManuChildren.length - 1].classList.remove("balls-manu-active");
        home.style.background = `url( ../image/img/main-slider/${srcSlider[indexHomeBackgroundInArray+1]}) no-repeat center / cover`;
        homeTitle.innerText = srcSliderInfo[indexHomeBackgroundInArray + 1][0];
        homeSubtitle.innerText = srcSliderInfo[indexHomeBackgroundInArray+ 1][1];
        homeBallsManuChildren[indexHomeBackgroundInArray].classList.remove("balls-manu-active");
        homeBallsManuChildren[indexHomeBackgroundInArray+ 1].classList.add("balls-manu-active");
    }
    else {
        homeTitle.innerText = srcSliderInfo[0][0];
        homeSubtitle.innerText = srcSliderInfo[0][1];
        home.style.background = `url( ../image/img/main-slider/${srcSlider[0]}) no-repeat center / cover`
        homeBallsManuChildren[0].classList.add("balls-manu-active");
        homeBallsManuChildren[homeBallsManuChildren.length - 1].classList.remove("balls-manu-active");
    }
}

function rightMainSlider(){
    const homeTitle = home.querySelector(".home--title");
    const homeSubtitle = home.querySelector(".home--subtitle");
    const homeBallsManuChildren = homeBallsManu.children
    const lengthSrcSlider = srcSlider.length
    if (home.style.background === ""){
        home.style.background = `url( ../image/img/main-slider/${srcSlider[lengthSrcSlider-1]}) no-repeat center / cover`;
        homeTitle.innerText = srcSliderInfo[lengthSrcSlider-1][0];
        homeSubtitle.innerText = srcSliderInfo[lengthSrcSlider-1][1];
        homeBallsManuChildren[0].classList.remove("balls-manu-active");
        homeBallsManuChildren[lengthSrcSlider - 1].classList.add("balls-manu-active")
        return;
    }

    //берет чистый названия файла
    const homeBackground = getHomeBackgroundFileName(home);

    const indexHomeBackgroundInArray = srcSlider.indexOf(homeBackground)
    if (indexHomeBackgroundInArray === -1) return;
    else if (indexHomeBackgroundInArray >= 1) {
        console.log(indexHomeBackgroundInArray);
        console.log(homeBallsManuChildren[indexHomeBackgroundInArray].classList);
        homeBallsManuChildren[indexHomeBackgroundInArray].classList.remove("balls-manu-active");
        home.style.background = `url( ../image/img/main-slider/${srcSlider[indexHomeBackgroundInArray-1]}) no-repeat center / cover`
        homeTitle.innerText = srcSliderInfo[indexHomeBackgroundInArray - 1][0];
        homeSubtitle.innerText = srcSliderInfo[indexHomeBackgroundInArray - 1][1];
        homeBallsManuChildren[indexHomeBackgroundInArray -1].classList.add("balls-manu-active");
        if (indexHomeBackgroundInArray > 1){
            homeBallsManuChildren[indexHomeBackgroundInArray - 2].classList.remove("balls-manu-active");
        }
    }
    else {
        homeTitle.innerText = srcSliderInfo[homeBallsManuChildren.length - 1][0];
        homeSubtitle.innerText = srcSliderInfo[homeBallsManuChildren.length - 1][1];
        home.style.background = `url( ../image/img/main-slider/${srcSlider[homeBallsManuChildren.length - 1]}) no-repeat center / cover`
        homeBallsManuChildren[0].classList.remove("balls-manu-active");
        homeBallsManuChildren[homeBallsManuChildren.length - 1].classList.add("balls-manu-active");
    }
}

function leftCardSlider(){
    let cardsBorderCopy =  cardsBorder
    const firsElement = cardsBorderCopy.children[0]
    const quantityCardsForScreen = getQuantityCards()
    firsElement.style.display = "none";
    cardsBorderCopy.appendChild(firsElement)
    cardsBorderCopy.children[quantityCardsForScreen-1].style.display = "block"
    cardsBorderCopy.children[0].classList.remove("cards-border--item-active");
    cardsBorderCopy.children[1].classList.add("cards-border--item-active");
}

function searchSwitchOn(event) {
    const target = event.target
    for (let i = 0; i < headerNav.children.length; i++) {
        headerNav.children[i].style.display = "none";
    }
    const searchBlock = event.target.parentElement
    const inputBlock = document.createElement("input");
    inputBlock.style.width = "100%";
    inputBlock.classList.add("search--input-switch");
    headerNav.appendChild(inputBlock);
    headerNav.classList.add("search-switch-on");
}

function searchSwitchOff() {
    // console.log(headerNav.classList[headerNav.classList.length - 1]);
    if (headerNav.classList[headerNav.classList.length - 1] === "search-switch-on") {
        for (let i = 0; i < headerNav.children.length; i++) {
            if (i === 0 || i === 2 ) continue;
            headerNav.children[i].style.display = "block";
        }
    }
    // headerNav.children.remove(document.querySelector(".search-switch-on"))
    document.querySelector(".search--input-switch").remove()
    headerNav.classList.remove("search-switch-on");
    // const target = event.target
    // for (let i = 0; i < headerNav.children.length; i++) {
    //     headerNav.children[i].style.display = "none";
    // }
    // const searchBlock = event.target.parentElement
    // const inputBlock = document.createElement("input");
    // inputBlock.style.width = "100%";
    // headerNav.appendChild(inputBlock);
    // headerNav.classList.add("search-switch-on");
}

