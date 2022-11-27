function distanceFromHqInBlocks(blockValue) {
    if (blockValue < 42){
        return (42 - blockValue);
    }
    else {
        return(blockValue - 42);
    }
}

function distanceFromHqInFeet(blockValue) {
    return distanceFromHqInBlocks(blockValue)*264;
}

function distanceTravelledInFeet(start, stop) {
    if(stop>start){
        return ((stop-start)*264);
    }
    else {
        return ((start-stop)*264);
    }
}

function calculatesFarePrice(pickUp, dropOff) {
    let travelled = distanceTravelledInFeet(pickUp,dropOff);

    if(travelled <= 400) {
        return 0;
    }
    else if(travelled >= 400 && travelled <= 2000){
        return (travelled - 400) * 0.02;
    }
    else if(travelled >= 2000 && travelled <= 2500){
        return 25;
    }
    else if(travelled > 2500){
        return "cannot travel that far";
    }
}