

const app = {
  gridSize: 8,
  pixelSize: 20,
  styles: ['plain', 'empty', 'light', 'highlight'],
  styleSelected: 'empty',
  init: function () {
    app.fillForm();
    app.generateArea();
    app.generatePalette();
  },
  generateArea: function () {
    const gridArea = document.getElementById('invader');
    for (let index = 0; index < app.gridSize; index++) {
      const row = document.createElement('div');
      row.classList.add('row');
      for (let index = 0; index < app.gridSize; index++) {
        const pixel = document.createElement('div');
        pixel.setAttribute('class', 'pixel');
        pixel.style.width = app.pixelSize + 'px';
        pixel.style.height = app.pixelSize + 'px';
        row.appendChild(pixel);
        pixel.addEventListener('click', app.handlePixelClick);
      }
      gridArea.appendChild(row);
    }
  },
  handlePixelClick: function (event) {
    const pixel = event.target;
    for (const style of app.styles) {
      pixel.classList.remove('pixel--' + style);
    }
    pixel.classList.add('pixel--' + app.styleSelected);
  },
  fillForm: function () {
    const form = document.querySelector('.configuration');
    const inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'number');
    inputElement.setAttribute('id', 'grid-size');
    inputElement.setAttribute('placeholder', 'Taille de la grille');
    form.appendChild(inputElement);
  
    const inputPixel = document.createElement('input');
    inputPixel.setAttribute('type', 'number');
    inputPixel.setAttribute('id', 'pixel-size');
    inputPixel.setAttribute('placeholder', 'Taille du pixel');
    form.appendChild(inputPixel);
  
    const buttonElement = document.createElement('button');
    buttonElement.type = 'submit';
    buttonElement.textContent = 'Valider';
    form.appendChild(buttonElement);
  
    form.addEventListener('submit', app.handleSubmit);
  },
  handleSubmit: function (event) {
    event.preventDefault();
    const gridInput = event.target[0];
    app.gridSize = Number(gridInput.value);
  
    const pixelInput = event.target[1];
    app.pixelSize = pixelInput.value;
    if (app.gridSize) {
      app.clearGridArea();
      app.generateArea();
    } else {
      alert('tu dois saisir un nombre');
    }
  },
  clearGridArea: function () {
    const gridArea = document.getElementById('invader');
    gridArea.innerHTML = '';
  },
  generatePalette: function () {
    const paletteElement = document.createElement('div');
    paletteElement.classList.add('palette');
    const body = document.querySelector('body');
    //* for...of
    for (const style of app.styles) {
      const paletteButton = document.createElement('button');
      paletteButton.classList.add('palette-color');
      paletteButton.classList.add('palette--' + style);
  
      //* dataset de pouvoir lier une donnée à un element html
      paletteButton.dataset.color = style;
      //* si le style est le style actuel, prend une forme particuliere
      if (style === app.styleSelected) {
        paletteButton.classList.add('palette-color--active');
      }
      paletteElement.appendChild(paletteButton);
      paletteButton.addEventListener('click', app.handleColorPicker);
    }
  
    body.appendChild(paletteElement);
  },
  handleColorPicker: function (event) {
    const buttonCLicked = event.target;
    const colorPicked = buttonCLicked.dataset.color;
    app.styleSelected = colorPicked;
  },
};
  
//* on utilise un event sur document pour lancer app.init quand tout le DOM est chargé

  
document.addEventListener('DOMContentLoaded', app.init);
  


/* data set 
j'ai compris et du coup dans handleColorPicker tu récupères la class à appliquer grace à ca
imaginez que vous testiez plusieurs pizzerias, vous avez bien leurs noms mais vous voulez vous souvenir de celle que vous avez adoré. Vous pourriez lui ajouter un dataset, comme un tag en fait
*/
