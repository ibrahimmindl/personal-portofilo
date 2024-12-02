// Placeholder for JavaScript
console.log("Portfolio website loaded!");


const promptText = document.getElementById('prompt').innerText;
const typingArea = document.getElementById('typing-area');
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');
const result = document.getElementById('result');

let startTime;

function startTest() {
    startTime = new Date();
    typingArea.disabled = false;
    typingArea.focus();
    startButton.disabled = true;
    resetButton.disabled = false;
    result.innerText = '';
}

function resetTest() {
    typingArea.value = '';
    typingArea.disabled = true;
    startButton.disabled = false;
    resetButton.disabled = true;
    result.innerText = '';
}

function calculateWPM() {
    const typedText = typingArea.value.trim();
    const endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000 / 60; // Convert to minutes

    const wordsTyped = typedText.split(/\s+/).length;
    const correctWords = typedText.split(/\s+/).filter((word, index) => 
        word === promptText.split(/\s+/)[index]
    ).length;

    const wpm = Math.round(correctWords / timeTaken);

    result.innerText = `Your WPM: ${wpm} (${correctWords}/${wordsTyped} correct words)`;
    typingArea.disabled = true;
    startButton.disabled = false;
}

typingArea.addEventListener('input', () => {
    if (typingArea.value.trim() === promptText) {
        calculateWPM();
    }
});

startButton.addEventListener('click', startTest);
resetButton.addEventListener('click', resetTest);
