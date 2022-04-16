const blockDisplay = document.querySelector('.block-container');
const keybordDisplay = document.querySelector('.key-container');

const keys = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'ENTER',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    '«',
]


keys.forEach(key =>{
    const buttonElement = document.createElement('button');
    buttonElement.textContent = key
    buttonElement.setAttribute('id', key);
    keybordDisplay.append(buttonElement);
})