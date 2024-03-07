// qcm en js
 
// 1) On importe nos questions depuis question.js
import questions from './questions.js';
// 2) On récupère la div de notre fichier html qui servira de receptacle pour notre qcm
const quizz = document.querySelector('.quizz')


// 3) Utiliser le fameux forEach sur notre tableau d'objets questions c'est ici qu'on va creer, ajouter du contenu et insérer nos différents ééments du QCM
// (questions, les choix possibles, le bouton de soumission etc)

questions.forEach((item)=> {
    //Donner à des variables les valeurs d'une question
    const id = item.id
    const questions = item.question
    const choice = item.reponses
    
    const title = document.createElement('h2')
    title.textContent = `${id} - ${questions}`

    const reponselist = document.createElement('ul')
    
    const resultZone = document.createElement('h2')

    const submit = document.createElement('button')
    submit.textContent = 'Soumettre'

    //Boucler sur les choix possibles de réponse
    for (let key in choice) {
        const li = document.createElement('li')
        li.innerHTML = `<input type="radio" name=${id} value=${key}><p>${key} : ${choice[key]}</p>`
        reponselist.appendChild(li)
    }

    quizz.appendChild(title)
    quizz.appendChild(reponselist)
    quizz.appendChild(submit)
    quizz.appendChild(resultZone)
    

    submit.addEventListener('click', () => {
        const userChoice = document.querySelector(`input[name="${id}"]:checked`)
        if (userChoice.value ==item.correction) {
            resultZone.textContent = 'Vrai'
            resultZone.style.color = 'green'
        } else {
            resultZone.textContent = 'Faux'
            resultZone.style.color = 'red'
        }

    })

    
});
    // il faudra aussi boucler sur les choix possible de réponse (for...in)
//  on viendra ecouter le bouton de soumission pour chaque questions et on comparera la reponse
// comparera le choix du user avec la correction
