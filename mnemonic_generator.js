//create mnemonic string
let mnemonic_list = [
    [0, 'zoo'],
    [1, 'tie'],
    [2, 'knee'],
    [3, 'emu'],
    [4, 'ear'],
    [5, 'law'],
    [6, 'shoe'],
    [7, 'cow'],
    [8, 'ivy'],
    [9, 'bee'],
    [10, 'dice'],
    [11, 'tot'],
    [12, 'tin'],
    [13, 'tomb'],
    [14, 'tire'],
    [15, 'towel'],
    [16, 'dish'],
    [17, 'duck'],
    [18, 'dove'],
    [19, 'tub'],
    [20, 'nose'],
    [21, 'nut'],
    [22, 'nun'],
    [23, 'name'],
    [24, 'Nero'],
    [25, 'nail'],
    [26, 'notch'],
    [27, 'neck'],
    [28, 'knife'],
    [29, 'knob'],
    [30, 'mouse'],
    [31, 'mat'],
    [32, 'moon'],
    [33, 'mummy'],
    [34, 'mower'],
    [35, 'mule'],
    [36, 'match'],
    [37, 'mug'],
    [38, 'movie'],
    [39, 'map'],
    [40, 'rose'],
    [41, 'rod'],
    [42, 'rain'],
    [43, 'ram'],
    [44, 'rear'],
    [45, 'roll'],
    [46, 'roach'],
    [47, 'rock'],
    [48, 'roof'],
    [49, 'rope'],
    [50, 'lace'],
    [51, 'light'],
    [52, 'lion'],
    [53, 'lamb'],
    [54, 'lure'],
    [55, 'lily'],
    [56, 'leash'],
    [57, 'log'],
    [58, 'leaf'],
    [59, 'lip'],
    [60, 'cheese'],
    [61, 'sheet'],
    [62, 'chain'],
    [63, 'chum'],
    [64, 'cherry'],
    [65, 'jail'],
    [66, 'judge'],
    [67, 'chalk'],
    [68, 'chef'],
    [69, 'ship'],
    [70, 'kiss'],
    [71, 'kite'],
    [72, 'coin'],
    [73, 'comb'],
    [74, 'car'],
    [75, 'coal'],
    [76, 'cage'],
    [77, 'cake'],
    [78, 'cave'],
    [79, 'cap'],
    [80, 'face'],
    [81, 'fight'],
    [82, 'phone'],
    [83, 'foam'],
    [84, 'fire'],
    [85, 'file'],
    [86, 'fish'],
    [87, 'fog'],
    [88, 'fife'],
    [89, 'V.I.P'],
    [90, 'bus'],
    [91, 'bat'],
    [92, 'bun'],
    [93, 'bomb'],
    [94, 'bear'],
    [95, 'bell'],
    [96, 'beach'],
    [97, 'book'],
    [98, 'puff'],
    [99, 'puppy'],
    [100, 'daisies']
];

let numberArray = [];
let wordArray = [];

function digitFinder(number) {

    let counter = 0;
    let changedNumber = number;

    //if number is zero then push zero

    if (changedNumber == 0) {
        numberArray.push(0);

        //if number is single digit push number and return funciton 

    } else if (changedNumber < 10 && number > 0) {
        numberArray.push(number);
        return numberArray;

        //if number is double digit push number and return function MAY NEED TO REVISIT

    } else if (changedNumber < 100 && number >= 10) {
        numberArray.push(number);
        return numberArray;
    }

    //loop to add each digit until the highest number below 101 is found

    //while changed number is greater than 100

    while (changedNumber > 100) {


        //increase the counter
        counter++;

        //if the number equates to 100, exit the loop
        if (changedNumber == 100) {
            break;
        }

        //deduct one digit from changedNumber
        changedNumber = Math.floor(changedNumber / 10);
    }

    //once the highest digit below 101 is found, add it to the array
    numberArray.push(changedNumber);

    //deduct those digits from the number

    let newInputNumber = number - (changedNumber * (10 ** counter));

    //create the counter input to the recursive function
    if (newInputNumber > 0.1) {
        digitFinder(newInputNumber);
    }

    return numberArray;

}

digitFinder(89543321);


//translate the numbers to words

for (let i = 0; i < numberArray.length; i++) {

    wordArray[i] = mnemonic_list[numberArray[i]][1];
}

//log the words on the system
console.log(wordArray.join(' '));