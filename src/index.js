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

function decode(expr_orig) {
    var expr = expr_orig
    var str = "";
    for(let i=0; i<expr.length; i+=10) {
        var letter="";
        if(expr[i] === "*") {
            str += " ";
            continue;
        }
        for(let j=0; j<10; j+=2) {
            if(expr[i + j] === '0')
                continue;
            if(expr[i + j] === '1' && expr[i + j + 1] === '1') {
                letter += "-";
                continue;
            }
            if(expr[i + j] === '1' && expr[i + j + 1] === '0') {
                letter += "."
            }
        }

        str += MORSE_TABLE[letter];
    }

    return str;
}

module.exports = {
    decode
}