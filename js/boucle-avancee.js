// Fonction fléchées 

// fonction normale
function concat(a, b){
    if (typeof(a) === 'string' && typeof(b) === 'string'){
        return a + b  
    }else {
        return('Veuillez mettre des chaine de caractères')
    }
}

console.log(concat("hello", "world!!!!"))
console.log(concat(1,3))

// fonction fléchées 
// this ne fonctionne pas dans les fonction fléchées

let fleche = (a, b) => {
    if (typeof(a) === 'string' && typeof(b) === 'string'){
        return a + b  
    }else {
        return('Veuillez mettre des chaine de caractères')
    }
}

console.log(fleche("hello", "world!!!!"))

// Boucle avancée 
//
//forEach

let t = ['Autruche', "chat", "Loutre", "Tardigrade", "Singe"]

//le premier argument de foreach est l'element du tableau
//le deuxieme est l'index.

t.forEach((element, i ) => { //marche pas avec les getElementByClassName
    console.log(element)
    console.log(i)
})

let z = [1, 4, 87, 96, 78]

let z2 = z.map(x => x * 2)
console.log(z)
console.log(z2)

const user = [
    {firstname : "Jean-michel", lastname: "Michel"},
    {firstname : "Alphone", lastname: "Rabougris"},
    {firstname : "Vladimir", lastname: "Infartus"},
    {firstname : "Antonin", lastname: "Duval"},
] 

function fullName(el) {
    return [el.firstname, el.lastname].join(" ")
}

const user2 = user.map(fullName)
console.log(user2)

//filter

const ages = [12, 45, 78, 19, 56, 5, 14] 

function adult(age) {
    return age >= 18
}
const moinsDe18 = ages.filter(adult)
console.log(moinsDe18)

//reduce

// let z = [1, 4, 87, 96, 78]
// o + 1  => 1 + 4 => 5 + 87 => 82 + 96 => 188 + 78 => 266

const sum2 = z.reduce((acc, x ) => acc + x, 0 )
console.log(sum2)

//some

const gg = [15, 17, 28, 414, 987]
const even = (el) => el % 2 === 0


// si au moins 1 élement est paire il retournera true
console.log(gg.some(even))

//every

// si tous élement est paire il retournera true
console.log(gg.every(even))

// Exercice

const hhh = [1, 3, 4, 78, 98, 41, 9]

//1 Verifier qu'il n'y a pas de zero dans le tableau ---> every
//2 Faire un autre tableau de hhh avec des valeur divisé 6 ---> map
//3 Verifier qu'il y a au moins 1 valeur qui est divisible par 4 ---> some
//4 multiplier chaque valeur de tableau en commencant par 42 ---> reduce

//1
const pasDeZero = (element) => element !== 0
console.log(hhh.every(pasDeZero))

//2
let hhh2 = hhh.map(x => x / 6)
console.log(hhh2)

//3
const divPar4 = (el) => el % 4 === 0 
console.log(hhh.some(divPar4))

//4
const hhh3 = hhh.reduce((acc, x ) => acc * x, 42 )
console.log(hhh3)