const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const encodedArray = expr.match(/.{10}/g).map(el => el.replace(/^0*/, ''));
    const morseArray = encodedArray.map(el => {
        return el === '**********'
                ? ' '
                : el.match(/.{2}/g).map(el => {
                    return el == 10 ? '.' : '-' 
                }).join('')
    });
    const decodedArray = morseArray.map(el => {
        return el === ' ' ? el : MORSE_TABLE[el]
    });
    return decodedArray.join('');
}

module.exports = {
    decode
}