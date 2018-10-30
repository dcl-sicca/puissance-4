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

// Création du plateau de jeux en 2 dimensions 7 colonnes x 6 lignes -> new Array();-----------------------------------
var celluleStatus = [
    ["0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0"]
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