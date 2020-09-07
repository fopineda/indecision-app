
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

const isSenior = (age) => {
    if (age >= 65){
        return true;
    };
    return false
}

export {
    isAdult,
    canDrink,
    isSenior as default
}