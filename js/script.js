const items = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];

const title = [
  'Svezia',
  'Svizzera',
  'Gran Bretagna',
  'Germania',
  'Paradise'
];

const text = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
];

console.log('ciao');



//creo contatore di default =0
let contatore = 0;
console.log('contatore', contatore);
//console.log('items in base al contatore', images[contatore]);
//console.log('items in base al contatore', images2[contatore]);

//inizializzo variabili slider
const sliderLeft = document.querySelector('.slider-left');
const sliderRight = document.querySelector('.slider-right');

//ciclo per aggiungere testi nello slider-left
for(let i = 0; i < items.length; i++){

  console.log(items[i]);
  // creo un div per ogni immagine, sia sx sia dx
  const itemSx = document.createElement('div');
  const itemDx = document.createElement('div');

  //aggiungo la classe item al div a sx e la classe item2 al div a dx
  itemSx.className = 'item';
  itemDx.className = 'item2';

  // solo se i è = contatore aggiungo anche active
  if(i === contatore){
    itemSx.classList.add('active');
    itemDx.classList.add('active2');
  }
  
  //inserisco l'immagine (e anche i testi nella parte dx)
  itemSx.innerHTML = `
  <img src="${items[i]}" alt="">
  <div class="text">
  <h3>${title[i]}</h3>
  <p>${text[i]}</p>
  </div>
  `;

  itemDx.innerHTML = `
  <img src="${items[i]}" alt="">
  `;

  console.log(itemSx);
  console.log(itemDx);

  // append a slider di immagine
  sliderLeft.append(itemSx);
  sliderRight.append(itemDx);

};

//inizializzo variabili images e images2 per ottenere tutti elementi ne html che hanno classe .item e .item2 - ovvero array/HTML collection
const images = document.getElementsByClassName('item');
const images2 = document.getElementsByClassName('item2');
console.log('items', images);

//inizializzo variabili prev e next
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

//intercetto funzione click su frecce
prev.addEventListener('click', function(){
  //rimuovo classe active
  console.log(images[contatore]);
  images[contatore].classList.remove('active');
  images2[contatore].classList.remove('active2');
  console.log(images[contatore]);
  console.log(images2[contatore]);

  //torno all'immagine precedente
  contatore = contatore - 1;
  if (contatore < 0 ) {
    contatore = images.length - 1;
  }

  //aggiungo classe active
  images[contatore].classList.add('active');
  images2[contatore].classList.add('active2');
  console.log(images[contatore]);
  console.log(images2[contatore]);
});

next.addEventListener('click', function(){
  //rimuovo classe active
  console.log(images[contatore]);
  images[contatore].classList.remove('active');
  images2[contatore].classList.remove('active2');
  
  console.log(images[contatore]);
  console.log(images2[contatore]);

  //torno all'immagine precedente
  contatore = contatore + 1;
  if (contatore > images.length - 1 ) {
    contatore = 0;
  }

  //aggiungo classe active
  images[contatore].classList.add('active');
  images2[contatore].classList.add('active2');
  console.log(images[contatore]);
  console.log(images2[contatore]);
});