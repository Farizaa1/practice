const paragraph = document.querySelector('p');
paragraph.innerHTML = paragraph.innerText
.split(' ')
.map(word => word.length > 8 ? `<span style = "background-color: yellow">${word}</span>` : word)
.join(' ');

const link = document.createElement('a');
link.href = 'https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html';
link.innerText = 'Top 8 job interview questions';
document.body.appendChild(link);

paragraph.innerHTML = paragraph.innerHTML
.split('.')
.join('.</p><p>') + '</p>';

const counter = paragraph.innerHTML.split(' ').length;
const counterEl = document.createElement('div');
counterEl.innerHTML = `${counter} words`;
document.body.insertBefore(counterEl, paragraph);

Array.from(document.querySelectorAll('p'))
.forEach(p => {
    p.innerHTML = p.innerHTML
    .replace(/\?/g, '&#128562')
    .replace(/\!/g, '&#129300')
})