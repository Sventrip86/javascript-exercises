


const repeatString = (word, number) => {

    let words = "";

    for(let i=0; i < number; i++){
        words = words + word 
    }

    return words

};

repeatString('hey', 3)

// Do not edit below this line
module.exports = repeatString;
