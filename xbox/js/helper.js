export {getHomeBackgroundFileName, getQuantityCards}

function getHomeBackgroundFileName(home){
    return home.style.background
        .split("url(\"")[1]
        .split("\")")[0]
        .split("../image/img/main-slider/")[1];
}

function getQuantityCards(){
    const screenWidth = window.innerWidth;
    let quantityCardsForScreen = 1;
    if (screenWidth >= 1440 ){
        quantityCardsForScreen = 4;
    }
    else if (screenWidth < 1440 && screenWidth >= 1280){
        quantityCardsForScreen = 3;
    }
    else if (screenWidth < 1280 && screenWidth >= 768){
        quantityCardsForScreen = 2;
    }
    else if (screenWidth < 768 && screenWidth >= 320){
        quantityCardsForScreen = 1;
    }
    return quantityCardsForScreen;
}
