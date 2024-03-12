// 4wgNqzkRoUggrPkY5zJ5nOCnZwmsJheW4hFfcbHS

// Nom de l'api : countryapi.io

// faire un qcm pour deviner la capitale

// on veut afficher le nom du pays + drapeau
// en dessous on voudra un input pour insérer le nom de la capitale
// un bouton pour valider
// une fois validé, on obtient le résultat (c'est vrai ou pas)
// une fois validé on veut aussi un bouton qui nous emmène à la question suivante

// comptabiliser les points et stopper les questions au bout de 10

// les pays sur lesquels on est questionnée doivent etre généré aléatoirement

const container = document.querySelector('.container')
const pays = document.querySelector('.country')
const img = document.querySelector('img')
const input = document.querySelector('input')
const lancer = document.querySelector('.next')
const answerBtn = document.querySelector('.answerBtn')
const answer = document.querySelector('.answer')
let score = 0
 
const key = '5nGkIr7s3qUFkdR1WHef5uEM0iM4MDIEQNzboWYx'
 
function getRandomCountry() {
    axios.get ("https://countryapi.io/api/all?apikey=5nGkIr7s3qUFkdR1WHef5uEM0iM4MDIEQNzboWYx")
        .then(response => {
            const countries = response.data;
            const tableau = Object.keys(countries).map(key => countries[key])  
   
            const randomCountry = Math.floor(Math.random() * tableau.length);
            const arrayCountries = tableau[randomCountry]
            const countryName = arrayCountries.name
            const countryFlag = arrayCountries.flag.medium
            const capital = arrayCountries.capital
            answer.textContent = ""
           
            console.log(capital)
            console.log(compareResult(capital))
   
            pays.textContent = countryName
            img.src = countryFlag    
        })
        .catch(error => {
            console.error("Erreur lors de la récupération des pays:", error);
        });
}
 
rollBtn.addEventListener('click', getRandomCountry);
 
document.addEventListener('DOMContentLoaded', getRandomCountry)
 
function compareResult(capital) {
 
    answerBtn.addEventListener('click', () => {
        console.log(score)
 
        if(input.value === capital){
            answer.textContent = "Bonne Réponse"
            score = score +1
           
        } else {
            console.log('nope')
            answer.textContent = "Mauvaise Réponse"
        }
    })
}
 
window.addEventListener('keypress', (e) => {
    if(e.key === "Enter"){
 
        answerBtn.click()
    }
})
 