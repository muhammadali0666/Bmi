const markWeight = ( prompt(" Markning vaznini kiriting ")*1);
const markHeight = ( prompt(" Markning bo'yini kiriting ")*1);

const johnWeight = (prompt(" Johnning vaznini kiriting ")*1);
const johnHeight = (prompt(" Johnning bo'yini kiriting ")*1);

const markHeightmass = ( markHeight / 100 );
const johnHeightmass = ( johnHeight / 100 );

const markBmi = (Math.round( markWeight / ( markHeightmass * markHeightmass )).toFixed(2));
const johnBmi = (Math.round( johnWeight / ( johnHeightmass * johnHeightmass )).toFixed(2));

console.log( markBmi );
console.log( johnBmi );

if ( markBmi >= johnBmi ) {
console.log(`Markning Bmi ${markBmi}  katta Johnikidan, jonniki ${johnBmi} edi`);
} else{
  console.log(`Johnning Bmi ${johnBmi}  katta Marknikidan, markniki ${markBmi} edi`);
}
