let questions = [
    'What is 1+1?',
    'What is 2+3?',
    'What is 10+1?',
    'What is 125+357?'
];
let list = [
    [2, 3, 4, 5],
    [2, 3, 4, 5],
    [3, 11, 17, 23],
    [426, 482, 493, 502],
    [] //없는경우 오류 Cannot read property of undefined
]
let answers = [2, 5, 11, 482];

let count = 1;
let score = 0;
let object = {};
let lists = document.querySelectorAll(".ch");



lists.forEach((ch) => {
    ch.addEventListener("click", clickBtn);
});


function clickBtn(){

    //setTimeout 클릭이벤트 1초 지연
    setTimeout(function() {
        count++;
        
        
        for(let i=0; i<=4; i++){
            object[`answer${i}`] = 'hello'
            if(count-1 === i){
                
                document.querySelector(".question-p > span").innerText = i+1;
                document.querySelector(".question").innerText = questions[i];
                document.querySelector(".ch1 > p").innerText = list[i][0];
                document.querySelector(".ch2 > p").innerText = list[i][1];
                document.querySelector(".ch3 > p").innerText = list[i][2];
                document.querySelector(".ch4 > p").innerText = list[i][3];
            };

            if(Number(document.querySelector(".choices p").innerHTML) === answers[i]){
                score++;
                document.querySelector(".score").innerText = score;
                console.log(score)
            }

            // document.querySelectorAll(".choices > div").forEach(item => {
            //     item.addEventListener('click',(e)=>{
            //         if(Number(document.querySelector(".choices p").innerText) === answers[i]){
            //             score++;
            //             document.querySelector(".score").innerText = i+1;
            //         }
            //     })
            // });

        };
        

        document.querySelector(".meter").value += 25;

        if(count > 4){
            document.querySelector('.first-container').style.display = "none";
            document.querySelector('.second-container').style.display = "none";
        }
        
    }, 1000);

    

    
    
    
    
};








