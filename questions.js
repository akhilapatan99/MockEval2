const form = document.getElementById('question-form');
const questionList = document.getElementById('questions-list');
const questions = [];

form.onsubmit = (e) => {
    e.preventDefault();
    const question = document.getElementById('question').value;
    const options = document.getElementById('options').value.split(',');
    const answer = document.getElementById('answer').value;
    questions.push({question, options, answer });

    const questionE1 = document.createElement('div');
    questionE1.innerText = `Question: ${question}, Options: ${options.join(',')}, Answer: ${answer}`;
    questionList.appendChild(questionE1);

    form.reset();
};