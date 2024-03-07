/////////////// JS snack 1 ///////////////
const zucchine = [
  {
    varieta: 'nera',
    pesoInGrammi: 500,
    lunghezzaInCm: 12  
  },
  {
    varieta: 'romanesco',
    pesoInGrammi: 450,
    lunghezzaInCm: 13   
  },
  {
    varieta: 'fiorentino',
    pesoInGrammi: 350,
    lunghezzaInCm: 25   
  },
  {
    varieta: 'napoletana',
    pesoInGrammi: 560,
    lunghezzaInCm: 40   
  },
  {
    varieta: 'tonda',
    pesoInGrammi: 720,
    lunghezzaInCm: 8  
  },
  {
    varieta: 'trombetta',
    pesoInGrammi: 520,
    lunghezzaInCm: 39   
  },
  {
    varieta: 'patisson',
    pesoInGrammi: 440,
    lunghezzaInCm: 27   
  },
  {
    varieta: 'gialla',
    pesoInGrammi: 510,
    lunghezzaInCm: 34   
  },
  {
    varieta: 'rugoso',
    pesoInGrammi: 320,
    lunghezzaInCm: 14   
  },
  {
    varieta: 'crookneck',
    pesoInGrammi: 800,
    lunghezzaInCm: 10   
  }
];

const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');
const output3 = document.getElementById('output3');
const output4 = document.getElementById('output4');
const output5 = document.getElementById('output5');
let sommaPesoZucchine = 0;
let sommaPesoZucchineU15 = 0;
let sommaPesoZucchineO15 = 0;

zucchine.forEach(zucchina => {
  const {pesoInGrammi} = zucchina;
  sommaPesoZucchine = sommaPesoZucchine + pesoInGrammi;
})
console.log(sommaPesoZucchine);
output1.innerHTML = 'Somma Peso Zucchine = ' + sommaPesoZucchine;

/////////////// JS snack 2 ///////////////

const zUnder15 = [];
const zOver15 = [];

zucchine.forEach(zucchina => {
  const {lunghezzaInCm} = zucchina;
  
  if (lunghezzaInCm >= 15) {
    zOver15.push(zucchina);
  } else {
    zUnder15.push(zucchina);
  }
})

zUnder15.forEach(z => {
  const {pesoInGrammi} = z;
  sommaPesoZucchineU15 = sommaPesoZucchineU15 + pesoInGrammi;
})
console.log(sommaPesoZucchineU15);

zOver15.forEach(z => {
  const {pesoInGrammi} = z;
  sommaPesoZucchineO15 = sommaPesoZucchineO15 + pesoInGrammi;
})
console.log(sommaPesoZucchineO15);

output2.innerHTML = 'Somma Peso Zucchine O15 = ' + sommaPesoZucchineO15 + ' | ' + 'Somma Peso Zucchine U15 = ' + sommaPesoZucchineU15;


/////////////// JS snack 3 ///////////////
function getStr(str){
  if (!isNaN(str)) {
    return 'inserisci una stringa'
  }
  return str.split('').reverse().join('')
}

output3.innerHTML = getStr('sono una stringa');

/////////////// JS snack 4 ///////////////
// const j4array1 = ['1', '2', '3', '4'];
// const j4array2 = ['1a', '2a', '3a', '4a'];

// function mergeArrays () {

// }





/////////////// JS snack 5 ///////////////
// dati
// numA < numB
// numB <= arr.length
// return arr2

const fArr5 = ['ugo', 'pino', 'martino', 'sigismondo', 'antonio']; 
let result = [];

f5(fArr5, 2, 4)

console.log(result);
output5.innerHTML = result.join(' | ')

function f5 (arr, numA, numB) {
  for (let i = 0; i < arr.length; i++) {
    if (numA > 0 && i >= numA && numB > numA && i <= numB && numB <= arr.length) {
      result.push(arr[i]); 
    }  
  }
}