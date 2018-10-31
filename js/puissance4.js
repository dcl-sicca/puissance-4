// Création du plateau de jeux en 2 dimensions 7 col x 6 row -> new Array();-----------------------------------
var tableJeu = [
    ["vide", "vide", "vide", "vide", "vide", "vide", "vide"],
    ["vide", "vide", "vide", "vide", "vide", "vide", "vide"],
    ["vide", "vide", "vide", "vide", "vide", "vide", "vide"],
    ["vide", "vide", "vide", "vide", "vide", "vide", "vide"],
    ["vide", "vide", "vide", "vide", "vide", "vide", "vide"],
    ["vide", "vide", "vide", "vide", "vide", "vide", "vide"]
];
//Déclaration des variables
var joueur1Choix = "red";
var joueur2Choix = "yellow";
var joueurActuel = 1; //1 pour joueur 1 et 2 pour joueur 2
var row = 5;
var jeuActif = false;

var winnerIs;

// var clickedCellElmt;
// var clickedCellName;
// var clickedCellCoordX;
// var clickedCellCoordY;


//Déclaration des éléments du DOM -------------------------------------------------------------------------------------
// var caseMorpion = document.getElementsByTagName("div")
var puissance4 = document.getElementById("puissance4")
var clickedCellElmt = document.getElementById("x" + row + "-y" + col); //enregistre l'élément  enfant du DOM qui a été cliquée.
//var clickedCellName = event.target.id; //renvoie l'id de la cellule cliquée sous forme de string
var clickedCellCoordX = parseInt(clickedCellName[1]); // récupère le 2eme caractère dans l'ID
var clickedCellCoordY = parseInt(clickedCellName[4]); // récupère le 4eme caractère dans l'ID
console.log(clickedCellCoordX + clickedCellCoordY)

//TODO: Choix de Joueur 1 -> joueur1Choix------------------------------------------------------------------------------
// Joueur 1= rouge ou autre couleur ou avatar
//TODO: Choix de Joueur 2 -> joueur2Choix------------------------------------------------------------------------------
// Joueur 2= jaune ou autre couleur ou avatar



// Définition de nos 7 col pour choix joueurs---------------------------------------------------------------------

//Affiche tableau vierge
console.table(tableJeu);

// Fonction Affiche Joueur Actif
function afficheJoueur() {
    if (jeuActif == true) {
        document.getElementById("joueurs").style.backgroundImage = "url(img/fond14.jpg)";
    }
    if (joueurActuel == 1) {
        document.getElementById("joueur2").style.backgroundColor = "yellow";
        document.getElementById("joueur1").style.backgroundColor = "cadetblue";
    } else if (joueurActuel == 2) {
        document.getElementById("joueur1").style.backgroundColor = "red";
        document.getElementById("joueur2").style.backgroundColor = "cadetblue";
    }
}
//TODO: Fonction Jeu---------------------------------------------------------------------------------------------------
function starJeu() {
    if (jeuActif == true) return false;
    jeuActif = true;
}

function jeuTableau() {
    for (col = 0; col <= 6; col++) {
        for (row = 0; row <= 6; row++) {
            if (tableJeu[row][col] == "vide") { // vérifie si la cellule est égal à 0
                document.getElementById("x" + row + "-y" + col).style.backgroundColor = "white";
            }
            if (tableJeu[row][col] == 1) { //vérifie si la cellule est égal à 1 = Joueur 1
                document.getElementById("x" + row + "-y" + col).style.backgroundColor = "red";
            } else if (tableJeu[row][col] == 2) { //vérifie si la cellule est égal à 2 = Joueur 2
                document.getElementById("x" + row + "-y" + col).style.backgroundColor = "yellow";
            }
        }
    }
}


// ajouter une pièce dans la colonne la plus basse disponible 
function selectionColonne(col) {
    // victoireJoueur();
    // Cherchez le point le plus bas de cette rangée qui est ouvert.
    for (row = 6; row >= 0; row--) {
        if (tableJeu[row][col] == "vide") {
            tableJeu[row][col] = joueurActuel;
            jeuTableau();
            //changer le tour des joueurs actifs :
            if (joueurActuel == 1) {
                joueurActuel = 2;
            } else {
                joueurActuel = 1;
            }
            afficheJoueur();

            //arrêter de chercher des espaces vides
            return true;
        }
    }
}

// Fonction Jouer jeton qui modifie le style de la case en fonction du joueur 1 ou 2 ------------------------------------------







// puissance4.addEventListener("click", function(event) {

//     clickedCellElmt = document.getElementById(event.target.id); //enregistre l'élément  enfant du DOM qui a été cliquée.
//     clickedCellName = event.target.id; //renvoie l'id de la cellule cliquée sous forme de string
//     clickedCellCoordX = parseInt(clickedCellName[1]); // récupère le 2eme caractère dans l'ID
//     clickedCellCoordY = parseInt(clickedCellName[4]); // récupère le 4eme caractère dans l'ID
//     console.log("X : " + clickedCellCoordX + " - Y : " + clickedCellCoordY);
//     console.log("clickedCell : " + clickedCellName);

//     console.log("clickedCellElmt : " + clickedCellElmt);
//     console.log("clickedCellName : " + clickedCellName);

//     console.log("Colonne cliqué : " + clickedCellCoordY);


//     if (joueurActuel == 1) {
//         // on doit scanner les cases vide et remplir par le bas
//         afficheJoueur();
//         puissance4[clickedCellCoordX][clickedCellCoordY] = 1; // modifie le tableau pour stocker la donnée dans la case cliquée
//         clickedCellElmt.style.backgroundColor = joueur1Choix; // change la case qui viens d'être cliquée en rouge
//         joueurActuel++ // Ajoute +1 pour passer au joueur 2
//         console.table(puissance4);
//         console.log(clickedCellElmt);
//         //console.log(test);

//     } else if (joueurActuel == 2) {
//         afficheJoueur();
//         puissance4[clickedCellCoordX][clickedCellCoordY] = 2; // modifie le tableau pour stocker la donnée dans la case cliquée
//         clickedCellElmt.style.backgroundColor = joueur2Choix; // change la case qui viens d'être cliquée en jaune
//         joueurActuel-- // Retire 1 pour passer au joueur 1
//         console.table(puissance4);
//     }

// });

// puissance4.addEventListener("click", function(event) {
//     jeuTableau();
// });




// vérifier si case ON ou OFF------------------------------------------------------------------------------------------
// vérifier si 4 case ON en vertical, horizontal-----------------------------------------------------------------------

//TODO: récupérer le choix du Joueur 2 -> joueur2Choix-----------------------------------------------------------------
// Récupérer le numéro de colonne cliqué-------------------------------------------------------------------------------




//TODO: Si : Cas égalité -> Match nul----------------------------------------------------------------------------------
//TODO: Sinon Si : Cas de victoire ------------------------------------------------------------------------------------
//TODO: Sinon : Cas de défaite-----------------------------------------------------------------------------------------
//TODO: Afficher les résultats-----------------------------------------------------------------------------------------

//TODO: Fonction restart-----------------------------------------------------------------------------------------------
function reload() {
    location.reload();
}