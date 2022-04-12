let questions = [
    'What is 1+1?',
    'What is 2+3?',
    'What is 10+1?',
    'What is 125+357?'
];
let answer1 = [
    2, 3, 4, 5
];
let answer2 = [
    2, 3, 4, 5
];
let answer3 = [
    3, 11, 17, 23
];
let answer4 = [
    426, 482, 493, 502
];

let count=1;
let object = {};
for(let i=0; i<=4; i++){
    object[`answer${i}`] = 'hello'
    if(count-1 === i){
        document.querySelector(".question").innerHTML = questions[i];
        document.querySelector(".ch1 > p").innerHTML = window['answer'+i];
    }
}

