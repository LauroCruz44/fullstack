// const data = new Date();

// console.log(data.getDay());
// console.log(data.getMonth());
// console.log(data.getFullYear());
// console.log(data);

const data = new Date(2021-12-02);
let setFullYear = data.getFullYear();
console.log(setFullYear);
let setMonth = data.getMonth();
console.log(setMonth);
let setDate = data.getDay();
console.log(setDate);

var date = new Date(98, 1); // Dom Fev 01 1998 00:00:00 GMT+0000 (GMT)

// Métodos em desuso, 98 mapeia para 1998 aqui também
data.setYear(98);           // Dom Fev 01 1998 00:00:00 GMT+0000 (GMT)

console.log(data.setFullYear(98)); 

data.setDate(98)