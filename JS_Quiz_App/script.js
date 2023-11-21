const quizData = [
    {
        question: "What does HTML stands for?",
        a: "Hypertext Machine Language.",
        b: "Hypertext and Links Markup Language.",
        c: "Hypertext Markup Language.",
        d: "Hightext Machine Language",
        correct: "c",
    },

    {
        question: "How is document type initialized in HTML5?",
        a: "</DOCTYPE HTML>",
        b: "</DOCTYPE>",
        c: "<!DOCTYPE HTML>",
        d: "</DOCTYPE html>",
        correct: "c",
    },

    {
        question: "Which of the following HTML Elements is used for making any text bold?",
        a: "<p>",
        b: "<i>",
        c: "<li>",
        d: "<b>",
        correct: "d",
    },

    {
        question: "Which of the following HTML elements is used for creating an unordered list?",
        a: "<ui>",
        b: "<i>",
        c: "<em>",
        d: "<ul>",
        correct: "d",
    },

    {
        question: "Which of the following characters indicate closing of a tag?",
        a: ".",
        b: "/",
        c: "//",
        d: "!",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){

    deselectedAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected(){
    let answer = undefined;
    answerEl.forEach((answerEl) => {
        if(answerEl.checked){ //inside of if stament returns true/false
            answer = answerEl.id; 
        }
    });

    return answer;
}

function deselectedAnswers(){
     answerEl.forEach((answerEl) =>{
        answerEl.checked = false;
     });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected(); //if selected, it returns id i.e.; c or d.

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
           // Window.alert("Congratulations! Your answer is correct, go on!")
        }
    

    currentQuiz++;

    if(currentQuiz < quizData.length){
        loadQuiz();
    }else{
        quiz.innerHTML = `<h2> You answered correctly at ${score} out of ${quizData.length}</h2>` + 
        '<button onclick="location.reload();">Reload the quiz</button>';

    }

}
})
