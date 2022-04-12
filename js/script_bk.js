

const list = [
    {
        question: 'What is 1+1?',
        a: 2,
        b: 3,
        c: 4,
        d: 5,
        correct: 2
    },
    {
        question: 'What is 2+3?',
        a: 2,
        b: 3,
        c: 4,
        d: 5,
        correct: 5
    },
    {
        question: 'What is 10+1?',
        a: 3,
        b: 11,
        c: 17,
        d: 23,
        correct: 11
    },
    {
        question: 'What is 125+357?',
        a: 426,
        b: 482,
        c: 493,
        d: 502,
        correct: 482
    }

]

let count=1;

for(let i=0; i<=4; i++){
    if(count-1 === i){
        document.querySelector(".question").innerHTML = questions[i];
        document.querySelector(".ch1 > p").innerHTML = list[i][];
        document.querySelector(".ch2 > p").innerHTML = list[i];
        document.querySelector(".ch3 > p").innerHTML = list[i];
        document.querySelector(".ch4 > p").innerHTML = list[i];
    }


}

