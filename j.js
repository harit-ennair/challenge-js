const questions = [
    { question: "En JavaScript, 'null' est un type d'objet.", answer: true },
    { question: "Les tableaux en JavaScript commencent à l'index 1.", answer: false },
    { question: "La méthode 'map()' peut être utilisée pour transformer un tableau.", answer: true },
    { question: "En JavaScript, '==' compare les valeurs avec conversion de type automatique.", answer: true },
    { question: "La méthode 'querySelector()' permet de sélectionner plusieurs éléments à la fois.", answer: false },
    { question: "Le mot-clé 'const' permet de déclarer une variable modifiable.", answer: false },
    { question: "La fonction 'setTimeout()' est utilisée pour exécuter du code après un délai donné.", answer: true },
    { question: "Le mot-clé 'this' fait toujours référence à l'objet global.", answer: false },
    { question: "Les promesses en JavaScript utilisent 'then()' et 'catch()' pour la gestion des résultats.", answer: true },
    { question: "Une fonction fléchée (arrow function) a sa propre valeur 'this'.", answer: false }
];








let currentanswer = 0
let score = 0

const questionelement = document.getElementById("question")
const trueBtn = document.getElementById("true-btn")
const falseBtn = document.getElementById("false-btn")
const scoreelement = document.getElementById("score")

trueBtn.addEventListener("click", () => answer(true))
falseBtn.addEventListener("click", () => answer(false))
const min = 0
const max = questions.length



function answer(shiha) {
    const currentquestion = questions[currentanswer]

   
    if ((shiha && currentquestion.answer || !shiha && !currentquestion.answer)) {
        score++;
    }

  
    currentanswer++;
    if (currentanswer < questions.length) {

        const currentquestion = questions[currentanswer]
        questionelement.textContent = currentquestion.question

    } else {
        
            questionelement.textContent = "quiz end"
             scoreelement.textContent = `Score: ${score}`
    }

}







