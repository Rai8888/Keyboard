const result = document.querySelector('.result');
const form = document.querySelector('#form');

const ENGLISH = 'qwertyuiopasdfghjklzxcvbnm';
const RUSSIAN = 'йцукенгшщзхъфывапролджэячсмитьбю';
const NUMBERS = '1234567890';
const OPERATORS = ['Caps Lock', 'Backspace', 'Language'];



let currLanguage = ENGLISH; 


function initKeyBoard(language) {
    let keyboard = '';

    if (language === ENGLISH) {
        ENGLISH.split('').forEach((char) => {
            keyboard += `<button data-type="letter">${char}</button>`;
        });
    }else if (language === RUSSIAN){
        RUSSIAN.split('').forEach((char) => {
            keyboard += `<button data-type="letter">${char}</button>`;
        });
        
    }


      NUMBERS.split('').forEach((char) => {
        keyboard += `<button data-type="number">${char}</button>`;
    });

    OPERATORS.forEach((char) => {
        keyboard += `<button data-type="${char}">${char}]</button>`;
    });

    form.innerHTML = keyboard;
}

window.addEventListener('load', () => {
    initKeyBoard(currLanguage);
    });


form.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.nodeName !== 'BUTTON') return;
    
    const type = event.target.dataset.type;
    if(type === 'letter' || type === 'number') {
        const value = event.target.innerText;
        result.innerHTML += value;
        return;
    }
    if (type === 'Caps Lock') {
        const letters = form.querySelectorAll('button[data-type="letter"]');
        for (let letter of letters) {
            const isUpperCase = letter.innerHTML === letter.innerHTML.toLocaleUpperCase();
            letter.innerHTML = isUpperCase
            ? letter.innerHTML.toLowerCase()
            : letter.innerHTML.toUpperCase();
        }
        return;
    }
    if (type === 'Backspace') {
        result.innerHTML = result.innerHTML.slice(0, result. innerHTML.length -1);
        return;
    }
    if (type === 'Language') {
        currLanguage = currLanguage === ENGLISH ? RUSSIAN : ENGLISH;
        initKeyBoard(currLanguage);
        return;
    } 
});



