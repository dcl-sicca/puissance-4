function puissance4() {
    //Déclaration des variables

    var joueur1Choix;
    var joueur2Choix;
    var winnerIs;
    var caseOn;
    var caseOff;

    //Déclaration des éléments du DOM -------------------------------------------------------------------------------------
    var caseMorpion = document.getElementsByTagName("td");

    // Création du plateau de jeux en 2 dimensions 7 colonnes x 6 lignes -> new Array();-----------------------------------
    // Définition de nos 7 colonnes pour choix joueurs---------------------------------------------------------------------

    //TODO: Fonction Jeu---------------------------------------------------------------------------------------------------
    //TODO: Choix de Joueur 1 -> joueur1Choix------------------------------------------------------------------------------
    //TODO: Choix de Joueur 2 -> joueur2Choix------------------------------------------------------------------------------

    //TODO: récupérer le choix du Joueur 1 -> joueur1Choix-----------------------------------------------------------------
    // Récupérer le numéro de colonne cliqué-------------------------------------------------------------------------------
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
}

puissance4();


// Pour test
var caseMorpion = document.getElementsByTagName("div")
caseMorpion[24].style.backgroundColor = "red"
console.log(caseMorpion);

var tableJeux = document.getElementById("tableJeux")

tableJeux.addEventListener("click", function(e) {
    console.log(e);
    console.log(e.target.id);
})