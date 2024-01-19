const questions = [
    { question: 'What day was our first date (MM/DD/YY)?', answer: '12/27/22' },
    { question: 'What was the first show we ever watched together?', answer: "Single's Inferno" },
    { question: 'What was the first gift I ever gave you?', answer: 'Stussy hoodie' },
    { question: 'Where was I when we first started talking?', answer: 'Hilton Head' },
    { question: 'Where did we go for our first trip together?', answer: 'Cloudland Canyon' },
    { question: 'When was my first Blacksburg visit (MM/DD/YY)?', answer: '02/03/23' },
    { question: 'What was the first restaurant we ate at in BB?', answer: 'Kuma Moon' },
    { question: 'How many times have I given you flowers?', answer: '2' },
    { question: 'How many times have you given me flowers?', answer: '4' },
    { question: 'What color was my hair when we first met?', answer: 'Red' },
];

let currentQuestion = 0;
let attempts = 0;

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = questions[currentQuestion].question;
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer-input').value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestion].answer.toLowerCase();
    const feedbackContainer = document.getElementById('feedback-container');
    const failedMsg = document.getElementById('quiz-failed-msg');
    const answerInput = document.getElementById('answer-input');
    const failedNav = document.getElementById('failed-nav-container');
    const checkBtn = document.getElementById('check-button');
    const questionContainer = document.getElementById('question-container');
    const wonNav = document.getElementById('won-nav-container');
    const doneMsg = document.getElementById('quiz-done-msg');
    const quitHeart = document.getElementById('quit-heart');
    const quitText = document.getElementById('quit-text');
    const trophy = document.getElementById('trophy');
    const me = document.getElementById('me');



    if (userAnswer === correctAnswer) {
        attempts = 0; // Reset attempts
        feedbackContainer.innerHTML = '<p class="correct-feedback">Correct!</p>';
        setTimeout(() => {
            currentQuestion++;
            if (currentQuestion < questions.length) {
                displayQuestion(); // Display the next question
                feedbackContainer.innerHTML = ''; // Clear feedback
                answerInput.value = '';
            } else {
                doneMsg.innerHTML = '<p class="done-feedback">Congratulations!<br>You won!</p>';
                wonNav.style.display = 'block';
                trophy.style.display = 'block';               
                me.style.display = 'block';

                quitHeart.style.display = 'none';
                quitText.style.display = 'none';
                feedbackContainer.innerHTML = ''; // Clear feedback
                questionContainer.style.display = 'none';
                answerInput.style.display = 'none';
                checkBtn.style.display = 'none';
            }
        }, 2000);
    } else {
        attempts++;
        if (attempts === 3) {
            failedMsg.innerHTML = '<p class="failed-feedback">No more attempts. You failed :(</p>';
            failedNav.style.display = 'block';

            quitHeart.style.display = 'none';
            quitText.style.display = 'none';
            questionContainer.style.display = 'none';
            answerInput.style.display = 'none';
            checkBtn.style.display = 'none';
            
        } else {
            feedbackContainer.innerHTML = `<p class="incorrect-feedback">Wrong! You have ${3 - attempts} attempt${attempts === 2 ? '' : 's'} left.</p>`;
            setTimeout(() => {
                feedbackContainer.innerHTML = '';
            }, 1500);
        }
    }
}

function tryAgain() {
    currentQuestion = 0;
    attempts = 0;

    document.getElementById('answer-input').value = '';

    displayQuestion();
    document.getElementById('quiz-failed-msg').innerHTML = ' ';
    document.getElementById('failed-nav-container').style.display = 'none';
    document.getElementById('quiz-done-msg').innerHTML = ' ';
    document.getElementById('won-nav-container').style.display = 'none';
    document.getElementById('trophy').style.display = 'none';
    document.getElementById('me').style.display = 'none';


    document.getElementById('question-container').style.display = 'block';
    document.getElementById('answer-input').style.display = 'block';
    document.getElementById('check-button').style.display = 'block';
    document.getElementById('quit-heart').style.display = 'block';
    document.getElementById('quit-text').style.display = 'block';

}


// Initial setup
displayQuestion();
