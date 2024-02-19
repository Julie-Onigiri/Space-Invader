

// ton code ici
const grille = document.createElement("div");
grille.id = "grille"; // Donner un idà la grille
grille.style.border="2px solid black"
grille.style.width = "100px"; // Définir la largeur de la grille
grille.style.height = "100px"; // Définir la hauteur de la grille
grille.style.display = "grid"; // Utiliser le modèle de mise en page grid
grille.style.gridTemplateColumns = "repeat(8, 0.6fr)"; // Créer 8 colonnes de taille égale
grille.style.gridTemplateRows = "repeat(8, 0.6fr)"; // Créer 8 lignes de taille égale
grille.style.gridGap = "2px"; 
grille.style.backgroundColor = "black";
// Ajouter la grille au document
document.body.appendChild(grille);

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

for (let i = 0; i < 64; i++) {
    /*Créer un élément div pour chaque case*/
  const caseElement = document.createElement("div");
  caseElement.id = "case" + i; // Donner un id à chaque case
  caseElement.style.backgroundColor = "grey"; 
 
    // Ajouter la case à la grille
    grille.appendChild(caseElement);

   caseElement.onclick = function(){
      if(caseElement.style.backgroundColor === "grey"){
         caseElement.style.backgroundColor = "red";
        }
        else{
        caseElement.style.backgroundColor = getRandomColor();
      }
  };
  }
  console.log(grille)
  const caseElement= document.getElementById('valid');
  caseElement.addEventListener('click',ceQuiFautFaire);
  /*let x;
  let y;

  const createGrid function() {
    for(x = 0; x <= 7; x++){
      createCase();
      for( y = 0; y <= 7; y++)
    }
  }
//* creer une function qui va a chq boucle creer une case de 10*10 width:10px heigth:10px 
//*avec un border de 1px solid grey  arrivé à la huitieme case zouuuh on descend de 12px y+12
 */



