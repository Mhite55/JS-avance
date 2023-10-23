// Les Objets

let user = {
    firstName : "Jacques", 
    lastName : "Paul", 
    age: 50,
    eyeColor: "Blue", 
    isAdministrator: false,
    fullName: function() { // Fullname est une fonction dans un objet donc une méthode
        return this.firstName+ " " + this.lastName
    }
}

console.log(user.fullName())

const t = [];
t.push(40);

let s = "Dan est dans la cuisine, et Vicky lit un livre."
console.log(s.toUpperCase())
console.log(s[10]) // affiche le n de dans 

console.log(user.age)
user.age = 49;
console.log(user.age)

for (property in user) {
    console.log(`${property}: ${user[property]} `)
        
}

// Copier un tableau

// En js, affectation de tableau en variable ce fait par référence
// n et m sont la même chose 
let n = [1, 2, 3]
let p = [1, 2, 3]
let m = n
console.log(m)
n.push(74)
console.log(m)
m.push(1000)
console.log(n)

if (n === m) {
    // true car ils ont la meme reférance
}

if (n === p) {
    // c'est false ils le même contenu mais pas la même référence
}

// Comment comparer le contenu d'un tableaux 

if ( JSON.stringify(n) === JSON.stringify(p) ) {
    // c'est vrai car les tableau on le même contenue
    console.warn(JSON.stringify(n))
    console.warn(JSON.stringify(p))
}

// Les copies de surface

// Boucle for

nCopy = []

for (i = 0; i < n.length; i++) {
    n[i] = nCopy[i] 
}

// spread operator

multiN = [1,2,[4,10]]
k = [...multiN]
console.log(...multiN)
nCopy2 = [...n]

// La copie profonde -> la deep copy

nDeepCopy = JSON.parse(JSON.stringify(multiN))
console.log(nDeepCopy)
multiN[2].push(64)
console.log(multiN)
console.log(nDeepCopy)
console.log(k)

// LES RESTES

function somme (...nbr){
    let s = 0
    for (n of nbr){
        s += n
    }
    return s
}

console.log(somme(4, 7, 9, 18))
console.log(somme(8, 74))

//EVAL

eval('console.log("coucou")')
eval('alert("Gregory est un con")')