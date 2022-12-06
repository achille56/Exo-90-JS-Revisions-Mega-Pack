let nomVoiture = "Peugeot";
let demoRetour2 = document.getElementById("demoRetour");
let x = 50;
let z = 5;
let w = 10;

let demo = document.createElement("div");
    demo.innerHTML = "Z vaut " + z + " " + "W vaut " + w + " Le résultat est " + (z + w);
    document.body.appendChild(demo);

let d = (z + w);
    alert(d);

let prenom = "John" ,nom = "doe" ,age = 35;

    alert(z * w);
    alert(w / (w/z));
    alert(d / ((d/z) + (d/z) + (d/z))); /* ou alert(d / 9) */

let l = 10, k = 5; l += k;

function maFonction() {
    alert("Salut tout le monde !");
}
maFonction();

function maFonctionRetour() {
    demoRetour2.innerHTML = "Bonjour !";
}
maFonctionRetour();

let monBouton = document.createElement("button");
    monBouton.style.width = "5%";
    monBouton.style.height = "30px";
    monBouton.addEventListener("click", function () {
        alert("coucou les amis");
    })
    demoRetour2.append(monBouton);

// changer la couleur de fond d'une div
let changeSurOver = document.createElement("div");
    changeSurOver.innerHTML = "je vois la vie en rouge";
    changeSurOver.addEventListener("mouseover", function (event) {
        event.target.style.backgroundColor = "red";
    })
    document.body.appendChild(changeSurOver);

let txt = "une longue phrase";
let longueur = txt.length;
    alert("ma chaîne est bien de " + longueur);

// créer une alerte en une seule ligne avec 2 variables
    str1 = "Bonjour", str2 = "le monde";
    alert(str1 + " " + str2);

// tableau avec liste de voiture
let listeVoitures = ["Renault", "Volvo", "Citroen"];
let maVoiture = listeVoitures[1];
    listeVoitures.splice(0,1,"Ford");
    console.log(listeVoitures);
    alert(listeVoitures.length);

    listeVoitures.splice(2,1);
    listeVoitures.push("Ferrari");
    console.log(listeVoitures);

//
let rNumber = Math.random() * 50;
    console.log(rNumber);
let fNumber = 12.4;
    fNumber = Math.round(fNumber);
    console.log(fNumber);

//
let nombreUn = 10, nombreDeux = 5;
    if (nombreUn > nombreDeux) {
        alert("nombreUn est supérieur à nombreDeux");
    }

let nombreTrois = 10, nombreQuatre = 10;
    if (nombreTrois === nombreQuatre) {
        alert("nombreTrois et égal à nombreQuatre");
    }

    if (nombreUn !== nombreDeux) {
        alert("nombreUn n'est pas égal à nombreDeux");
    }

for (let i = 0 ; i < 9 ; i++) {
    console.log("la boucle est passée" + " " + i + " " + "fois");
}

let fruits = ["pomme", "banane", "poire"];
    for (let i = 0 ; i < fruits.length ; i++) {
        console.log(fruits[i]);
    }

let i = 0;
while (i < 10) {
    console.log("i vaut" + i);
    i++;
}

let a = 0;
while (a < 10) {
    console.log("i vaut" + a);
    a += 2;
}

for (let c = 0 ; c < 10 ; c++) {
    if (c === 5) {
        alert("on est arrivé à" + " " + c);
    }
}
