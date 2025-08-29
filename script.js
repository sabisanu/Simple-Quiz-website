const questions = [
        {
            question: "What does HTML stand for?",
            answers: [
                { text: "Hyper Text Markup Language", correct: true },
                { text: "Home Tool Markup Language", correct: false },
                { text: "Hyperlinks and Text Markup Language", correct: false },
                { text: "Hyper Tool Multi Language", correct: false }
            ]
        },
        {
            question: "Who is making the Web standards?",
            answers: [
                { text: "Mozilla", correct: false },
                { text: "Microsoft", correct: false },
                { text: "The World Wide Web Consortium", correct: true },
                { text: "Google", correct: false }
            ]
        },
    

        

        {
            question: "Which attribute is used to specify the source of an image in HTML?",
            answers: [
                { text: "link", correct: false },
                { text: "src", correct: true },
                { text: "href", correct: false },
                { text: "source", correct: false }
            ]
        },

        {
            question: "What is the purpose of the <!DOCTYPE html> declaration?",
            answers: [
                { text: "To define the document's character encoding", correct: false },
                { text: "To link an external stylesheet", correct: false },
                { text: "To declare the document type and version of HTML", correct: true },
                { text: "To specify the page title.", correct: false }
            ]
        },

      

                
        {
            question: "What does CSS stand for?",
            answers: [
                { text: "Cascading Style Sheets", correct: true },
                { text: "Colorful Style Sheets", correct: false },
                { text: "Computer Style Sheets", correct: false },
                { text: "Creative Style Sheets", correct: false }
            ]
        },

        

        {
            question: "Which language runs in a web browser?",
            answers: [
                { text: "Java", correct: false },
                { text: "C", correct: false },
                { text: "Python", correct: false },
                { text: "JavaScript", correct: true }
            ]
        },

        {
            question: "Which property changes the text color?",
            answers: [
                { text: "font-style", correct: false },
                { text: "color", correct: true },
                { text: "text-color", correct: false },
                { text: "font-color", correct: false}
            ]
        },

        {
            question: "Which selector targets an element by its id main?",
            answers: [
                { text: ".main", correct: false },
                { text: "#main", correct: true },
                { text: "main[]", correct: false },
                { text: "main#", correct: false}
            ]
        },

        {
            question: "Which property controls the space outside an element’s border?",
            answers: [
                { text: "padding", correct: false },
                { text: "margin", correct: true },
                { text: "border-spacing", correct: false },
                { text: "gap", correct: false }
            ]
        },

        {
            question: "What is the correct way to make text bold?",
            answers: [
                { text: "font-weight: bold;", correct: true },
                { text: "text-weight: bold;", correct: false },
                { text: "font-style: bold;", correct: false },
                { text: "font: bold;", correct: false }
            ]
        },

        {
            question: "Which unit is relative to the root font size?",
            answers: [
                { text: "px", correct: false },
                { text: "em", correct: false },
                { text: "rem", correct: true },
                { text: "%", correct: false }
            ]
        },

        {
            question: "Which property makes a flex container?",
            answers: [
                { text: "display: inline;", correct: false },
                { text: "display: block;", correct: false },
                { text: "display: grid;", correct: false },
                { text: "display: flex;", correct: true }
            ]
        },

        {
            question: "Which declaration centers a block element horizontally (with fixed width)?",
            answers: [
                { text: "text-align: center;", correct: false },
                { text: "margin: auto;", correct: true },
                { text: "justify-content: center;", correct: false },
                { text: "align-items: center;", correct: false }
            ]
        },

        {
            question: "What year was JavaScript launched?",
            answers: [
                { text: "1996", correct: false },
                { text: "1995", correct: true },
                { text: "1994", correct: false },
                { text: "none of the above", correct: false }
            ]
        },

        {
            question: "Which keyword is used to declare a variable in JavaScript?",
            answers: [
                { text: "var", correct: false },
                { text: "let", correct: false },
                { text: "const", correct: false },
                { text: "All of the above", correct: true }
            ]
        },

        {
            question: "Which operator is used for strict equality?",
            answers: [
                { text: "=", correct: false },
                { text: "==", correct: false },
                { text: "===", correct: true },
                { text: "=>", correct: false }
            ]
        },

        {
            question: "What will this print? console.log(2 + \"2\");?",
            answers: [
                { text: "22", correct: true },
                { text: "4", correct: false },
                { text: "Error", correct: false },
                { text: "NaN", correct: false }
            ]
        },

        {
            question: "Which method is used to remove the last element of an array?",
            answers: [
                { text: "shift()", correct: false },
                { text: "pop()", correct: true },
                { text: "push()", correct: false },
                { text: "slice()", correct: false }
            ]
        },

        {
            question: "What is the default value of an uninitialized variable?",
            answers: [
                { text: "null", correct: false },
                { text: "undefined", correct: true },
                { text: "0", correct: false },
                { text: "false", correct: false }
            ]
        },

        {
            question: "Which function converts JSON string to a JS object?",
            answers: [
                { text: "JSON.parse()", correct: true },
                { text: "JSON.stringify()", correct: false },
                { text: "toObject()", correct: false },
                { text: "parseJSON()", correct: false }
            ]
        },

        {
            question: "Which keyword stops a loop?",
            answers: [
                { text: "exit", correct: false },
                { text: "break", correct: true },
                { text: "stop", correct: false },
                { text: "return", correct: false }
            ]
        },

        {
            question: "Which of the following is NOT a JavaScript data type?",
            answers: [
                { text: "Number", correct: false },
                { text: "String", correct: false },
                { text: "Character", correct: true },
                { text: "Boolean", correct: false}
            ]
        },

 ];



const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}


function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}




function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
if(currentQuestionIndex < questions.length){
    handleNextButton();
}else{
    startQuiz();
}
});
    
startQuiz();
