// AJAX Asynchronous Javascript + XML

const file = "exemple.json"
let json = ""

let ajax = new XMLHttpRequest()

ajax.open('GET', file, true)
ajax.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
ajax.send()

ajax.onload = function() {
    json = JSON.parse(ajax.response)
    console.log(json)  // Interne à ajax 
    console.log(json.members[1].powers[0])  
}

// API fetch

fetch(file,{method: 'GET'})
.then(response => response.json()) //raccourci de json = JSON.parse(ajax.response)
.then(data => console.log(data.members[1].powers[0]))

// FETCH sur une api 
// https://randomuser.me/api/

const apiUser = document.getElementById("api-user")
const agge = document.getElementById("age")
const address = document.getElementById("address")
const phone = document.getElementById("phone")

fetch("https://randomuser.me/api/", {method: 'GET'})
.then(response => response.json()) //raccourci de json = JSON.parse(ajax.response)
.then(data => {
    console.log(data.results[0])
    let nam = data.results[0].name
    apiUser.innerHTML = nam.first + " " + nam.last
    let age = data.results[0].dob.age
    agge.innerHTML = age + " ans"
    let locat = data.results[0].location
    let stret = data.results[0].location.street
    address.innerHTML = stret.number + " " + stret.name + " " + locat.city
    let nbrphone = data.results[0].phone
    phone.innerHTML = nbrphone
})

const img = document.getElementById("img")
const btnReset = document.getElementById("btn-reset")

// fetch("https://api.thecatapi.com/v1/images/search", {method: 'GET'})
// .then(response => response.json()) //raccourci de json = JSON.parse(ajax.response)
// .then(data => {
//     console.log(data[0])
//     let source = data[0].url
//     img.src = source
// })

// btnReset.addEventListener("click", function(){
//     fetch("https://api.thecatapi.com/v1/images/search", {method: 'GET'})
//     .then(response => response.json()) //raccourci de json = JSON.parse(ajax.response)
//     .then(data => {
//         console.log(data[0])
//         let source = data[0].url
//         img.src = source
//     })
// })
// Mets on peut encore simplifiée 

// function getCATimg(){
//     fetch("https://api.thecatapi.com/v1/images/search", {method: 'GET'})
//     .then(response => response.json()) //raccourci de json = JSON.parse(ajax.response)
//     .then(data => {
//         console.log(data[0])
//         img.src = data[0].url
//     })}
    
//     getCATimg()
    
//     btnReset.addEventListener("click", getCATimg)

 function getCATimg(){
    fetch("https://api.thecatapi.com/v1/images/search?limit=5", {method: 'GET'})
     .then(response => response.json()) //raccourci de json = JSON.parse(ajax.response)
     .then(data => {
         console.log(data)
         img.innerHTML = ""
         for(image of data){
            img.innerHTML += `<img src="${image.url}" alt="image récuperer par ">`
            console.log(image.url)
         }
    })}
    
     getCATimg()
    
    btnReset.addEventListener("click", getCATimg)