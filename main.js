import "./style.css";


// première algo
let characters = "";
for (let i = 1; i <= 10; i++) {
  characters += i;

}
console.log(characters)


// deuxième algo 
let characterspace = "";
for (let a = 1; a <= 10; a++) {
  characterspace += a;
  characterspace += " "
}
console.log(characterspace)


// troisème algo
let impair = "";
for (let b = 0; b < 100; b++) {
  if (b % 2 != 0) {
    impair += b;
    impair += " ";
  }

}
console.log(impair)


// quatième algo
let mult7 = "";
for (let c = 0; c <= 70; c++) {
  if (c % 7 === 0) {
    mult7 += c;
    mult7 += " ";
  }

}
console.log(mult7)


// cinquième algo
let all10mult = "";
for (let d = 0; d < 10; d++) {
  if (d % 1 === 0) {

  }

}



// sixième algo
function somme() {
  let numsomme = 0;
  for (let e = 1; e < 10; e++) {
    numsomme += e;

  }
  return numsomme
}

console.log(somme())


// septième algo
function factoriel() {
  let facto = 1
  for (let f = 1; f <= 10; f++) {
    facto = facto * f

  }
  return facto
}
console.log(factoriel())


// huitième algo
function pair() {
  let nbrpair = 0;
  for (let g = 10; g < 30; g++) {
    if (g % 2 === 0) {
      nbrpair += g;
    }

  }

  return nbrpair
}
console.log(pair())


// neuvième algo
function Fahrenheit(Celsius) {
  let temp = 9 / 5
  temp = Celsius * temp
  temp += 32
  return temp
}
console.log(Fahrenheit(30))


// dixième algo
function sommeTable(array) {
  let sommearray = 0;
  for (let h = 0; h < array.length; h++) {
    sommearray += array[h];

  }

  return sommearray
}
console.log(sommeTable([1, 2, 5, 2]))


// onzième algo
function moyenneTable(array) {
  let moyennearray = 0;
  for (let j = 0; j < array.length; j++) {
    moyennearray += array[j];
  }
  moyennearray /= array.length
  return moyennearray
}
console.log(moyenneTable([1, 3, 5, 2]))


// douxième algo
function positif(numbers) {
  let positifnbr = [];
  for (let k = 0; k < numbers.length; k++) {
    if (numbers[k] > 0) {
      positifnbr.push(numbers[k])
    }

  }
  return positifnbr
}
console.log(positif([12, -59, 59, 47, -19]))


// treizième algo
function max(numbers) {
  let nbrmax = 0;
  for (let l = 0; l < numbers.length; l++) {
    if (numbers[l] > nbrmax) {
      nbrmax = numbers[l]
    }

  }
  return nbrmax
}
console.log(max([15, 6, 4, 18, 17]))


// quatorzième algo
// let  fibonacci = "";
// for (let m = 0; m < 10; m++) {
//   fibonacci += 
// }


// quinzième algo
// function sommechiffre(number) {
//   let somme = 0;
//   for (let n = 0; n < number.length; n++) {
//     somme += number[n]

//   }
//   return somme
// }
// console.log(sommechiffre(12))


// seizième algo
function getInverse(numbers) {
  let inverse = [];
  for (let o = numbers.length; o != 0; o--) {

  }
  return inverse
}

console.log(getInverse([12, 54, 69, 4, 54]))


// dixseptième algo
function specialCharact(text) {
  let voidspecial = 0
  let special = ["$", "!", "@", "#", "%", "*", "(", ")", "_", "-", "=", "+", "{", "}", "[", "]", "/", "|", "<", ">", "?", ".", ",", ";"]
  for (let p = 0; p < text.length; p++) {
    if (special.includes(text[p])) {
      voidspecial++;
    }

  }
  return voidspecial
}
console.log(specialCharact("$jsknhdj%*="))


// dixhuitième algo
function moyenne(text) {
  let result = 0;
  text = text.split(',')
  console.log(text)
  for (let q = 0; q < text.length; q++) {
    result += text[q]

  }
  result /= text.length
  return result
}
console.log(moyenne("1,2"))