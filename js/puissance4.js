//Déclaration des variables

var joueur1Choix;
var joueur2Choix;
var joueurActuel;
var winnerIs;
var caseOnJoueur1;
var caseOnJoueur2;
var caseOff;

//Déclaration des éléments du DOM -------------------------------------------------------------------------------------
var caseMorpion = document.getElementsByTagName("div")
var tableJeux = document.getElementById("tableJeux")
    //Over sur Colonnes ---------------------------------------------------------------------------------------------------
    // Over Colonne 1
function mouseOverY0() {
    caseMorpion[5].style.backgroundColor = "grey"
    caseMorpion[12].style.backgroundColor = "grey"
    caseMorpion[19].style.backgroundColor = "grey"
    caseMorpion[26].style.backgroundColor = "grey"
    caseMorpion[33].style.backgroundColor = "grey"
    caseMorpion[40].style.backgroundColor = "grey"
}

function mouseOutY0() {
    caseMorpion[5].style.backgroundColor = "white"
    caseMorpion[12].style.backgroundColor = "white"
    caseMorpion[19].style.backgroundColor = "white"
    caseMorpion[26].style.backgroundColor = "white"
    caseMorpion[33].style.backgroundColor = "white"
    caseMorpion[40].style.backgroundColor = "white"
}

// Over Colonne 2
function mouseOverY1() {
    caseMorpion[6].style.backgroundColor = "grey"
    caseMorpion[13].style.backgroundColor = "grey"
    caseMorpion[20].style.backgroundColor = "grey"
    caseMorpion[27].style.backgroundColor = "grey"
    caseMorpion[34].style.backgroundColor = "grey"
    caseMorpion[41].style.backgroundColor = "grey"
}

function mouseOutY1() {
    caseMorpion[6].style.backgroundColor = "white"
    caseMorpion[13].style.backgroundColor = "white"
    caseMorpion[20].style.backgroundColor = "white"
    caseMorpion[27].style.backgroundColor = "white"
    caseMorpion[34].style.backgroundColor = "white"
    caseMorpion[41].style.backgroundColor = "white"
}

// Over Colonne 3
function mouseOverY2() {
    caseMorpion[7].style.backgroundColor = "grey"
    caseMorpion[14].style.backgroundColor = "grey"
    caseMorpion[21].style.backgroundColor = "grey"
    caseMorpion[28].style.backgroundColor = "grey"
    caseMorpion[35].style.backgroundColor = "grey"
    caseMorpion[42].style.backgroundColor = "grey"
}

function mouseOutY2() {
    caseMorpion[7].style.backgroundColor = "white"
    caseMorpion[14].style.backgroundColor = "white"
    caseMorpion[21].style.backgroundColor = "white"
    caseMorpion[28].style.backgroundColor = "white"
    caseMorpion[35].style.backgroundColor = "white"
    caseMorpion[42].style.backgroundColor = "white"
}

// Over Colonne 4
function mouseOverY3() {
    caseMorpion[8].style.backgroundColor = "grey"
    caseMorpion[15].style.backgroundColor = "grey"
    caseMorpion[22].style.backgroundColor = "grey"
    caseMorpion[29].style.backgroundColor = "grey"
    caseMorpion[36].style.backgroundColor = "grey"
    caseMorpion[43].style.backgroundColor = "grey"
}

function mouseOutY3() {
    caseMorpion[8].style.backgroundColor = "white"
    caseMorpion[15].style.backgroundColor = "white"
    caseMorpion[22].style.backgroundColor = "white"
    caseMorpion[29].style.backgroundColor = "white"
    caseMorpion[36].style.backgroundColor = "white"
    caseMorpion[43].style.backgroundColor = "white"
}

// Over Colonne 5
function mouseOverY4() {
    caseMorpion[9].style.backgroundColor = "grey"
    caseMorpion[16].style.backgroundColor = "grey"
    caseMorpion[23].style.backgroundColor = "grey"
    caseMorpion[30].style.backgroundColor = "grey"
    caseMorpion[37].style.backgroundColor = "grey"
    caseMorpion[44].style.backgroundColor = "grey"
}

function mouseOutY4() {
    caseMorpion[9].style.backgroundColor = "white"
    caseMorpion[16].style.backgroundColor = "white"
    caseMorpion[23].style.backgroundColor = "white"
    caseMorpion[30].style.backgroundColor = "white"
    caseMorpion[37].style.backgroundColor = "white"
    caseMorpion[44].style.backgroundColor = "white"
}

// Over Colonne 6
function mouseOverY5() {
    caseMorpion[10].style.backgroundColor = "grey"
    caseMorpion[17].style.backgroundColor = "grey"
    caseMorpion[24].style.backgroundColor = "grey"
    caseMorpion[31].style.backgroundColor = "grey"
    caseMorpion[38].style.backgroundColor = "grey"
    caseMorpion[45].style.backgroundColor = "grey"
}

function mouseOutY5() {
    caseMorpion[10].style.backgroundColor = "white"
    caseMorpion[17].style.backgroundColor = "white"
    caseMorpion[24].style.backgroundColor = "white"
    caseMorpion[31].style.backgroundColor = "white"
    caseMorpion[38].style.backgroundColor = "white"
    caseMorpion[45].style.backgroundColor = "white"
}

// Over Colonne 7
function mouseOverY6() {
    caseMorpion[11].style.backgroundColor = "grey"
    caseMorpion[18].style.backgroundColor = "grey"
    caseMorpion[25].style.backgroundColor = "grey"
    caseMorpion[32].style.backgroundColor = "grey"
    caseMorpion[39].style.backgroundColor = "grey"
    caseMorpion[46].style.backgroundColor = "grey"
}

function mouseOutY6() {
    caseMorpion[11].style.backgroundColor = "white"
    caseMorpion[18].style.backgroundColor = "white"
    caseMorpion[25].style.backgroundColor = "white"
    caseMorpion[32].style.backgroundColor = "white"
    caseMorpion[39].style.backgroundColor = "white"
    caseMorpion[46].style.backgroundColor = "white"
}
*/
// Création du plateau de jeux en 2 dimensions 7 colonnes x 6 lignes -> new Array();-----------------------------------
var celluleStatus = [
    ["0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0"]
];
// Définition de nos 7 colonnes pour choix joueurs---------------------------------------------------------------------

//TODO: Fonction Jeu---------------------------------------------------------------------------------------------------
//TODO: Choix de Joueur 1 -> joueur1Choix------------------------------------------------------------------------------
//TODO: Choix de Joueur 2 -> joueur2Choix------------------------------------------------------------------------------

//TODO: récupérer le choix du Joueur 1 -> joueur1Choix-----------------------------------------------------------------
// Récupérer le numéro de colonne cliqué ->Y1-------------------------------------------------------------------------------
// Modifier le style de la case en fonction du joueur 1 ou 2 -> Array.slice()------------------------------------------
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





// Pour test

/*caseMorpion[24].style.backgroundColor = "red"
console.log(caseMorpion);*/



tableJeux.addEventListener("click", function(e) {
    console.log(e);
    console.log(e.target.id);
})

console.table(celluleStatus);



tableJeux.addEventListener("click", function(event) {
    var clickedCellElmt;
    var clickedCellName;
    var clickedCellCoordX;
    var clickedCellCoordY;

    clickedCellElmt = document.getElementById(event.target.id); //enregistre l'élément  enfant du DOM qui a été cliquée.
    clickedCellName = event.target.id; //renvoie l'id de la cellule cliquée sous forme de string
    clickedCellCoordX = parseInt(clickedCellName[1]); // récupère le 2eme caractère dans l'ID
    clickedCellCoordY = parseInt(clickedCellName[4]); // récupère le 4eme caractère dans l'ID
    console.log("X : " + clickedCellCoordX + ", Y : " + clickedCellCoordY);
    console.log("clickedCell : " + clickedCellName);

    celluleStatus[clickedCellCoordX][clickedCellCoordY] = "1"; // modifie le tableau pour stocker la donnée dans la case cliquée

    console.table(celluleStatus);
    clickedCellElmt.style.backgroundColor = "red"; // change la case qui viens d'être cliquée (contrairement a ce que j'ai dis peut être fait aussi avec le clic MAIS n'oubliez pas de stocker l'information dans un tableau car il faudra utiliser le tableau pour vérifier les conditions de victoire
});