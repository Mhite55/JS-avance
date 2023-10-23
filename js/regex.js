//REGEX

// Les regex qui est le diminutif d'expression regulière

/* 
Initialement créees pour décrire des languages formels, 
les expressions régulières sont aujourd'hui utilisées dans l'analyse et la manipulation des language 
informatiques .
Plus précisément, à la manière des outils de recherche de texte dans un document,
une expression régulières décrit des chaine de caractères ayant des proprietes communes
 */


//Exemple vérifier un numéros de téléphone français 

// ^ -> début
// $ -> fin

const btn = document.getElementById('btn')
const tel = document.getElementById('telephone')

btn.addEventListener ( 'click', function(){
    if(tel.value.length > 0){ // on évite les string vide
        let regex = "^((\\+|00)33|0) ?[1-9]([ .-][0-9]{2}){4}$"
        let value = tel.value
        let found = value.match(regex)
        if(found !== null){
            console.log(found)
            console.log("Numéros éntré valide bravo ! <3")
        }else{
            console.log(found)
            console.log("numéro invalide")
        }
    }else{
        console.error('va remplir correctement ton imput connard')
    }
})

// autruche.delasavane@gmail.com
// \w --->[a-zA-Z0-9_]
// \W --->[^a-zA-Z0-9_] ---> les caractères spéciaux

const btnEmail = document.getElementById('btn-email')
const email = document.getElementById('email')

btnEmail.addEventListener ( 'click', function(){
    if(email.value.length > 0){ // on évite les string vide
        let regex = /^[\w\-\.]+@\w+.\w{2,4}$/
        let value = email.value
        let found = value.match(regex)
        if(found !== null){
            console.log(found)
            console.log("E-mail entré valide bravo ! <3")
        }else{
            console.log(found)
            console.log("E-mail invalide")
        }
    }else{
        console.error('va remplir correctement ton imput connard')
    }
})

const st = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nam sequi quod itaque amet et doloribus blanditiis labore officiis doloremque enim, dolorem distinctio reprehenderit necessitatibus, neque est ex quaerat tempora."
let reg = /\s*/gm
console.log(st)
let streg = st.replace(reg, "")
console.log(streg)

// faire un regex qui verifie un date francaise de type 16 janvier 1987

const btnDate= document.getElementById('btn-date')
const date = document.getElementById('date')

btnDate.addEventListener ( 'click', function(){
    if(date.value.length > 0){ // on évite les string vide
        let rege = /^([1-9]|[0-2][1-9]|[1-2]0|3[0-1]) +(\w+) + ([0-9]){4}$/g
        let value = email.value
        let found = value.match(rege)
        if(found !== null){
            console.log(found)
            console.log("date entré valide bravo ! <3")
        }else{
            console.log(found)
            console.log("date invalide")
        }
    }else{
        console.error('va remplir correctement ton imput connard')
    }
})