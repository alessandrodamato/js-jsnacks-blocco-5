/////////////// JS snack 1 ///////////////
const zucchine = [
  {
    varieta: 'nera',
    pesoInGrammi: 500,
    lunghezzaInCm: 30   
  },
  {
    varieta: 'romanesco',
    pesoInGrammi: 450,
    lunghezzaInCm: 32   
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
    lunghezzaInCm: 15   
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
    lunghezzaInCm: 22   
  },
  {
    varieta: 'crookneck',
    pesoInGrammi: 800,
    lunghezzaInCm: 33   
  }
];

const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');
const output3 = document.getElementById('output3');
const output4 = document.getElementById('output4');
const output5 = document.getElementById('output5');
let sommaPesoZucchine = 0;

zucchine.forEach(zucchina => {
  const {pesoInGrammi} = zucchina;
  sommaPesoZucchine = sommaPesoZucchine + pesoInGrammi;
})
console.log(sommaPesoZucchine);
output1.innerHTML = 'Somma Peso Zucchine = ' + sommaPesoZucchine;

/////////////// JS snack 2 ///////////////
// const z1 = {
//   varieta: 'nera',
//   pesoInGrammi: 500,
//   lunghezzaInCm: 30 
// }

// const z2 = {
//   varieta: 'nera',
//   pesoInGrammi: 500,
//   lunghezzaInCm: 30   
// }

// const z3 = {
//   varieta: 'romanesco',
//   pesoInGrammi: 450,
//   lunghezzaInCm: 32   
// }

// const z4 = {
//   varieta: 'fiorentino',
//   pesoInGrammi: 350,
//   lunghezzaInCm: 25   
// }

// const z5 = {
//   varieta: 'napoletana',
//   pesoInGrammi: 560,
//   lunghezzaInCm: 40   
// }

// const z6 = {
//   varieta: 'tonda',
//   pesoInGrammi: 720,
//   lunghezzaInCm: 15   
// }

// const z7 = {
//   varieta: 'trombetta',
//   pesoInGrammi: 520,
//   lunghezzaInCm: 39   
// }

// const z8 = {
//   varieta: 'patisson',
//   pesoInGrammi: 440,
//   lunghezzaInCm: 27   
// }

// const z9 = {
//   varieta: 'gialla',
//   pesoInGrammi: 510,
//   lunghezzaInCm: 34   
// }

// const z10 = {
//   varieta: 'rugoso',
//   pesoInGrammi: 320,
//   lunghezzaInCm: 22   
// }

// const zUnder15 = [];
// const zOver15 = [];

/////////////// JS snack 3 ///////////////
function getStr(str){
  if (!isNaN(str)) {
    return 'inserisci una stringa'
  }
  return str.split('').reverse().join('')
}

output3.innerHTML = getStr('sono una stringa');
