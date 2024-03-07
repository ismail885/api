// TXEEg6Myo5I3jwGey72KePUcQGEUyn8JFyhTstrw

// Nom de l'api : countryapi.io

// faire un qcm pour deviner la capitale

// on veut afficher le nom du pays + drapeau
// en dessous on voudra un input pour insérer le nom de la capitale
// un bouton pour valider
// une fois validé, on obtient le résultat (c'est vrai ou pas)
// une fois validé on veut aussi un bouton qui nous emmène à la question suivante

// comptabiliser les points et stopper les questions au bout de 10

// les pays sur lesquels on est questionnée doivent etre généré aléatoirement

const apiUrl = "https://countryapi.io/api/v1/countries/";
let countries = [];
let currentQuestion = 0;
let score = 0;

async function fetchRandomCountry() {
    try {
        const response = await fetch(apiUrl + "random");
        const data = await response.json();
        return data.country;
    } catch (error) {
        console.error(e);
    }
}

