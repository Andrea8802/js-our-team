// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// DOM
const output = document.getElementById("output");
const membriTeam = [
    {
        "nome" : "Wayne Barnett",
        "ruolo" : "Founder & CEO",
        "foto" : "img/wayne-barnett-founder-ceo.jpg"
    },

    {
        "nome" : "Angela Caroll",
        "ruolo" : "Chief Editor",
        "foto" : "img/angela-caroll-chief-editor.jpg"
    },

    {
        "nome" : "Walter Gordon",
        "ruolo" : "Office Manager",
        "foto" : "img/walter-gordon-office-manager.jpg"
    },

    {
        "nome" : "Angela Lopez",
        "ruolo" : "Social Medi Manager",
        "foto" : "img/angela-lopez-social-media-manager.jpg"
    },

    {
        "nome" : "Scott Estrada",
        "ruolo" : "Developer",
        "foto" : "img/scott-estrada-developer.jpg"
    },

    {
        "nome" : "Barbara Ramos",
        "ruolo" : "Graphic Designer",
        "foto" : "img/barbara-ramos-graphic-designer.jpg"
    }
];


for (let i = 0; i < membriTeam.length; i++){
    output.innerHTML += `<li>${membriTeam[i].nome}</li>`;
    output.innerHTML += `<li>${membriTeam[i].ruolo}</li>`;
    output.innerHTML += `<img src="${membriTeam[i].foto}">`
}
