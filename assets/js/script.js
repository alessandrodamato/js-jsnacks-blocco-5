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
  },
];

const output1 = document.getElementById('output1');
let sommaPesoZucchine = 0;

zucchine.forEach(zucchina => {
  const {pesoInGrammi} = zucchina;
  sommaPesoZucchine = sommaPesoZucchine + pesoInGrammi;
})
console.log(sommaPesoZucchine);
output1.innerHTML = 'Somma Peso Zucchine = ' + sommaPesoZucchine;

/////////////// JS snack 2 ///////////////


