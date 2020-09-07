const isAdult = (age) => {
    if (age >= 18){
        return true;
    };
    return false;
}

const canDrink = (age) => {
    if (age >= 21){
        return true;
    };
    return false;
}


module.exports = {
    isAdult,
    canDrink
}