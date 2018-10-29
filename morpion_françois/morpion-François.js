const gameArea = document.getElementById("game-area"); // le seul élément du DOM dont on a besoin c'est l'élément parent de nos cases -> on récupérera l'enfant au clique.

var cellsStatus = [ ["vide", "vide", "vide"],
    ["vide", "vide", "vide"],
    ["vide", "vide", "vide"] ];

gameArea.addEventListener("click", function(event) {
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

    cellsStatus[clickedCellCoordX-1][clickedCellCoordY-1] = "o---k"; // modifie le tableau pour stocker la donnée dans la case cliquée

    console.log(cellsStatus);

    clickedCellElmt.innerHTML = "o---k"; // change la case qui viens d'être cliquée (contrairement a ce que j'ai dis peut être fait aussi avec le clic MAIS n'oubliez pas de stocker l'information dans un tableau car il faudra utiliser le tableau pour vérifier les conditions de victoire
});