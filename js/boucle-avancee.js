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

t.forEach((element, i ) => {
    console.log(element)
    console.log(i)
})

let z = [1, 4, 87, 96]

let z2 = z.map(x => x * 2)
console.log(z)
console.log(z2)