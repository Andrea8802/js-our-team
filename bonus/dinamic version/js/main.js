// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// Object Team
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

// Importazione container
const container = document.getElementById("container");

// Creazione row
const row = document.createElement("div");
row.classList.add("row");
container.append(row);

// Ciclo for per creare cards
for (let i = 0; i < membriTeam.length; i++){

    // Creazione card
    let card = document.createElement("div");
    card.classList.add("card");
    row.append(card);

    // Creazione div per img
    let cardImg = document.createElement("div");
    cardImg.classList.add("img");
    card.append(cardImg);

    // Creazione div per nome
    let cardNome = document.createElement("div");
    cardNome.classList.add("nome");
    card.append(cardNome);

    // Creazione div per ruolo
    let cardRuolo = document.createElement("div");
    cardRuolo.classList.add("ruolo");
    card.append(cardRuolo);

    // Statampare elementi
    document.getElementsByClassName("img")[i].innerHTML = `<img src="${membriTeam[i].foto}">`;
    document.getElementsByClassName("nome")[i].innerHTML = membriTeam[i].nome;
    document.getElementsByClassName("ruolo")[i].innerHTML = membriTeam[i].ruolo;
};