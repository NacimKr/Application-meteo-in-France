'use strict'

let Ville = document.getElementById('ville');
let Temperature = document.getElementById('temperature');
let btn = document.getElementById('button');

let ville = 'Paris';

btn.addEventListener('click', ()=>{
    ville = prompt('Entrez votre ville');
    recupererMeteo(ville);
})

function recupererMeteo(ville){
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ 
    ville +'&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';

let requete = new XMLHttpRequest();
requete.open('GET', url);
requete.responseType = 'json';
requete.send();

requete.onload = function(){
    if(requete.readyState === XMLHttpRequest.DONE){
        if(requete.status === 200){
            let reponse = requete.response;
            Ville.textContent = reponse.name;
            Temperature.textContent = reponse.main.temp;
        }else{
            alert('Une erreur est survenue lors du chargement de la page !')
        }
    }
}
}