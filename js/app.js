
//? CREATION HTML
//* VARIBALE GLOBALE


//*on vient de creer le html et le css et ici on va mettre nos variables globales
//* cette variable pour determiner le nombre de pixels desirés*/
//? variables globales

let gridSize= 8;
/* valeur par defaut pour la creation des grilles 
/* a la fin du challenge je vais souhaiter au clic du valider recuperer la valeur de l utilisateur et change la valeur de configuration


//* FONCTION DE CREATION*/
//* la grille*//

function generateArea() {
  const gridArea = document.getElementById('invader');
  /* une 1ere boucle for qui va générer les div .row*/
  for (let index = 0; index < gridSize; index++) {
    /* creer l'élément div*/
    const row = document.createElement('div');
    /* ajouter une class row*/
    row.classList.add('row');
    /*une fois la ligne crée , creer les div pixel pour chaque ligne*/
    for (let index = 0; index < gridSize; index++){
      const pixel= document.createElement('div');
      pixel.setAttribute('class','pixel');
      /*/* pixel.classList.add('pixel');*/
      /* je veux ajouter les pixels dans la ligne en cours de creation*/
      /* pour cela je recupere la ligne tu auras en enfant pixel*/
      row.appendChild(pixel);
      //* pour chaque pixel, je lui ajoute l'écouteur d'événement
      pixel.addEventListener('click', handlePixelClick);
    }
 
    //* ajoute la ligne comme enfant de div invader
    gridArea.appendChild(row);
  }
}

//*-------- Le formulaire logique de creation le faire en html puis en JS------------*/

function fillForm() {
    
  /*recuperer l element qui va contenir les input et boutons*/

  const form = document.querySelector('.configuration');


  //todo Input

  /*creer et ajouter les input*/
  const inputElement = document.createElement('input');
  /* pour ajouter les attributs*/
  inputElement.setAttribute('type', 'number');
  inputElement.setAttribute('id', 'grid-size');
  inputElement.setAttribute('placeholder', 'Taille de la grille');
  /* ajuter cet element dans un des elements du DOM nous c est le formulaire*/
  form.appendChild(inputElement);

  //todo button

  const buttonElement = document.createElement('button');
  buttonElement.type = 'submit';
  buttonElement.textContent = 'Valider';
  /* il me faut ajouter le bouton dans le formulaire*/
  form.appendChild(buttonElement);

  /* ECOUTEUR EVENEMENT pour le formulaire ecouterur preparer en bas handlesubmit*/
  form.addEventListener('submit', handleSubmit);
}

/*reset de invader*/
function clearGridArea() {
  const gridArea = document.getElementById('invader');
  gridArea.innerHTML = '';
}

/*ON PEUT AUSSI ECRIRE CELA*/
/*const allRows = document.querySelectorAll('.row');
  console.log(allRows);
  /* le query selector recupere tous les row et les met dans un tableau */
  
/*function clearGridArea() {const allRows = document.querySelectorAll('.row');
  console.log(allRows);
  for (let index = 0; index < allRows.length; index++) {
    allRows[index].remove();

  }*/

  
/* FORMULAIRE CREE DU COUP ON PEUT EFFACER LE HTML*/

//!les executions de fonctions se font a la fin



/*maintenant je peux supprimer mon html*/


/*--------------------Étape 2 - Gérer le clic sur un pixel

- On va maintenant s'occuper de pouvoir changer la couleur des pixels
- Si on clique sur un pixel on le fait passer en noir
- Si on reclique dessus il passe en gris
- Si on reclique dessus il passe en noir
- Si on reclique dessus il passe en gris
- Si on reclique... 'fin bref on a compris quoi
- concrètement d'abord on doit réagir au clic sur les pixels
- ensuite on doit modifier la couleur d'arrière plan du pixel cliqué  

:thinking: Alors là si on sèche un peu, on prend tout de suite de bonnes habitudes, on n'hésite pas à revoir le code déjà produit cette saison ou la doc pour trouver des réponses.  
On a par exemple dû voir un moyen de récupérer tout plein d'informations liées à l'événement dans la fonction de rappel de l'écouteur.
Peut-être que l'une de ces informations est l'élement */
  
//!je veux ajouter un event au click de mon pixel
/*pour me rappeler que cette function est un event mettre event en parametre de la fonction
function handle*/
/*sur quel element tu execute l event*/
/*le pixel est cree en js alors si je reviens sur mon code donc je peux rajouter l ecouterur d evenement  dans la function generateArea*/
// todo
//? GERE LES EVENT
//! etape1 : creer la fonction qui sert d'écouteur (handlePixelClick)
//! etape2: je trouve l'élément sur lequel brancher l'écouteur (pixel)
//! etape3: je branche l'élément grace addEventListener et je lui specifie l'event (click)
/* event decrit l event et quel type toutes les infos concernant l evenement
 sont dans cet objet*/
/* l objectif si je clic sur un pixel il se colore comment je sis ue c est ce pixel que je dois changer donc dans event il y a une propritété target*/


function handlePixelClick(event) {

  /* console.log(event)/*'le pixel est cliqué';*/
  const pixel = event.target;
  //! V1*/
  /*pixel.style.backgroundColor = 'black';mais */
  /* jaimerais que mon pixel reapasse au click en blanc */
  //?au lieu de rajouter du style dans le html je cree une classe

  /*toujours le meme pb ne reprend pas sa couleur initial donc on va ecrire une condition*/
  //! V2*/
  /* maintenant je peux ajouter du css dans la fiche style css*/
  /*  Si tu as la class pixel--plain, retire la, sinon tu ajoutes*/
  /* je verifie si il a pixel--plain et si oui remove*/
  /*if (pixel.classList.contains('pixel--plain')) {
    pixel.classList.remove('pixel--plain');
  } else {
    pixel.classList.add('pixel--plain');
  }*/

  //! V3*/
  /*SI pixel--plain DEJA PRESENT JE T ENLEVE ET SI TU N AI PAS PRESENT JE T AJOUTE
*/

  pixel.classList.toggle('pixel--plain');
  console.log(pixel);
  
}

/* etape 2 gerée*/

/*--------------------Étape 3 le formulaire 
/* le formulaire de configuration*/
/*- On va ajouter (toujours en JS) des élements au formulaire
- On ajoute un champ pour choisir la taille de la grille
- On ajoute un bouton pour valider
- Lorsqu'on soumet le formulaire on veut générer une nouvelle grille à la place de la grille actuelle, mais en tenant compte de la taille saisie dans le champ
- Par exemple l'utilisateur saisit 10 dans le champ, il valide, une nouvelle grille de 10 cases x 10 cases est générée à la place de la grille existante
*/

/*on cree le fillForm gere la grille puis le bouton cf plus haut*/
/*-------------------------------------------------------------------*/
/*-------------------------------------------------------------------*/






/* AU SUBMIT DU FORM*/
//?/*form deja recupé dans la fonction fillForm pas besoin de la rappeler*/
//?function handleSubmit(event) {
//? //* stop le comportement par defaut du formulaire
//? event.preventDefault();
//? console.log('submit');
//? /*je vais creer une const gridInput pour recuper la premierer valeur soit donc l index 0 dans le tableau de valeur du formulaire
  
 
/*function handleSubmit(event) {
  //* stop le comportement par defaut du formulaire
  event.preventDefault();
  /*console.dir(event.target);*/
/*const gridInput = event.target[0];
  console.log(gridInput.value);
  //* je met a jour la variable global qui défini le nombre de pixel
  gridSize = gridInput.value;*/
/*console.log(gridSize);*/

function handleSubmit(event) {
  //* stop le comportement par defaut du formulaire
  event.preventDefault();
  const gridInput = event.target[0];
  //* je met a jour la variable global qui défini le nombre de pixel
  gridSize = gridInput.value;
  console.log(typeof gridSize);
  //* genere une nouvelle grille de pixel
  if (gridSize) {
    clearGridArea();
    generateArea();
  }
}




//? comment mettre a jour et remettre a zero ma grille invader enlever les div enfants 
//? je veux faire un reset de mon invader pour cela je cree une fonction que l on t plus haut! sinon lorque l utilateur valider la taille cela va s 'ajouter   à ma grille d origine
/*on veut recuperer ce qu a saisi l' utilsateur dans l input*/
/*si je mets  console.dir(event.target); je peux acceder a l input et a l input  a une propriete value qui permet de recuperer la valaur saisi  par l utilisateur*/
/*le event target c est bien mon formulaire*/





/* GERE LES EVENT*/
//! etape1 : creer la fonction qui sert d'écouteur (handlePixelClick)
//! etape2: je trouve l'élément sur lequel brancher l'écouteur (pixel)
//! etape3: je branche l'élément grace addEventListener et je lui specifie l'event (click)
/*mettre event pour bien comprendre que je mets un ecouteur pour cela donc je retourne dans la fonction fillForm*/




//? EXECUTE LES FONCTIONS AU LANCEMENT
fillForm();

generateArea();


/* etape 3 terminé*/



/* bonus I ce serait de tout ranger dans une methode*/
