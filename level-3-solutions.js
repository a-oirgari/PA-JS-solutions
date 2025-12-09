const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];



// =======================================EXO1======================================================================
function multiple(a,b){
  return a*b;
}
const enterMultiple = data.reduce(multiple);
console.log(enterMultiple);

// =====================boucle====================
let produit = 1;
for (let i = 0; i < data.length; i++){
    produit *= data[i];
}
console.log(produit);


// =======================================EXO2======================================================================
const ArraySort = [...data].sort((a, b) => a - b); 
const midiane = Math.floor(ArraySort.length / 2);


let medianData;
if (ArraySort.length % 2 === 0) {
  medianData = (ArraySort[midiane - 1] + ArraySort[midiane]) / 2;
} else {
  medianData = ArraySort[midiane];
}

console.log(medianData);


// =====================boucle====================
let arr = [...data]; 

for (let i = 0; i < arr.length; i++) {
  for(let j = i+1; j <arr.length; j++){
    let temp;
    if(arr[i] < arr[j]){
      temp = arr[i]
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
// console.log(arr);

const midian2 = Math.floor(arr.length / 2);

let median2;
if (arr.length % 2 === 0) {
  median2 = (arr[midian2 - 1] + arr[midian2]) / 2;
} else {
  median2 = arr[midian2];
}

console.log(median2);

// =======================================EXO3======================================================================
const cumulatif = data.reduce((accumulateur, valCourante, index) => {
  accumulateur.push((accumulateur[index - 1] || 0) + valCourante); 
  return accumulateur;
}, []);

console.log(cumulatif);

// =====================boucle====================
let cumulatif2 = [];
let somme = 0;

for (let i = 0; i < data.length; i++) {
  somme += data[i]; 
  cumulatif2.push(somme); 
}

console.log(cumulatif2);

// =======================================EXO4======================================================================
const exo4_1 = Array.from(new Set(data)).sort((a, b) => a - b);

console.log(exo4_1);

// =====================boucle====================
let uniques = [];

for (let i = 0; i < data.length; i++) {
  let isthere = false;

  for (let j = 0; j < uniques.length; j++) {
    if (uniques[j] === data[i]) {
      isthere = true;
      break;
    }
  }

  if (!isthere) {
    uniques.push(data[i]);
  }
}

for (let i = 0; i < uniques.length - 1; i++) {
  for (let j = 0; j < uniques.length - i - 1; j++) {
    if (uniques[j] > uniques[j + 1]) {
      let temp = uniques[j];
      uniques[j] = uniques[j + 1];
      uniques[j + 1] = temp;
    }
  }
}

console.log(uniques);
// =======================================EXO5======================================================================
const groupes = data.reduce((acc, n) => {
  if (n < 50) {
    acc.inf1.push(n);
  } else {
    acc.sup1.push(n);
  }
  return acc;
}, { inf1: [], sup1: [] });

console.log(groupes);

// =====================boucle====================
let inf = [];
let sup = [];

for (let i = 0; i < data.length; i++) {
  if (data[i] < 50) {
    inf.push(data[i]);
  } else {
    sup.push(data[i]);
  }
}

console.log({ inf, sup });

// =======================================EXO6======================================================================
const top3 = [...data].sort((a, b) => b - a) .slice(0, 3);          
console.log(top3);


// =====================boucle====================
let arr_3 = [...data];

for (let i = 0; i < arr_3.length - 1; i++) {
  for (let j = 0; j < arr_3.length - i - 1; j++) {
    if (arr_3[j] > arr_3[j + 1]) {
      let temp = arr_3[j];
      arr_3[j] = arr_3[j + 1];
      arr_3[j + 1] = temp;
    }
  }
}

let top3_2 = [
  arr_3[arr_3.length - 1],
  arr_3[arr_3.length - 2],
  arr_3[arr_3.length - 3]
];

console.log(top3_2);

// =======================================EXO7======================================================================
const bas3 = [...data].sort((a, b) => a-b) .slice(0, 3);          
console.log(bas3);


// =====================boucle====================
let arrBas_3 = [...data];

for(let i = 0; i < arrBas_3.length -1; i++){
  for(let j = 0; j < arrBas_3.length -i-1; j++){
    let temp ;
    if(arrBas_3[j] > arrBas_3[j+1]){
      temp = arrBas_3[j];
      arrBas_3[j] = arrBas_3[j+1];
      arrBas_3[j+1] = temp;
    }
  }
}
let Bas_3= [
  arrBas_3[0],
  arrBas_3[1],
  arrBas_3[2]
];
console.log(Bas_3);

// =======================================EXO8======================================================================
const mapping1 = data.reduce((acc, n) => {
  if (n % 2 === 0) {
    acc.even.push(n);
  } else {
    acc.odd.push(n);
  }

  acc.total += n;

  return acc;
}, { even: [], odd: [], total: 0 });

console.log(mapping1);
// =====================boucle====================
let even = [];
let odd = [];
let total = 0;

for (let i = 0; i < data.length; i++) {
  if (data[i] % 2 === 0) {
    even.push(data[i]);
  } else {
    odd.push(data[i]);
  }

  total += data[i];
}

const result = { even, odd, total };
console.log(result);

// =======================================EXO9======================================================================
const dataMap = data.map((value, index) => value * index);
console.log(dataMap);


// =====================boucle====================
const dataWithoutMap = [];
for (let i = 0; i < data.length; i++) {
  dataWithoutMap[i] = data[i] * i;
}
console.log(dataWithoutMap);

// =======================================EXO10======================================================================
const exo10_A = data.map(valeur => valeur < 10 ?0: valeur);
console.log(exo10_A);

// =====================boucle====================
const exo10_B = [];
for (let i = 0; i < data.length; i++) {
  if (data[i] < 10) {
    exo10_B[i] = 0;
  } else {
    exo10_B[i] = data[i];
  }
}
console.log(exo10_B);
