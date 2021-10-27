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

//inizializzo variabile items per ottenere tutti elementi ne html che hanno classe .item - ovvero array/HTML collection
const images = document.getElementsByClassName('item');
console.log('items', images);

//creo contatore di default =0
let contatore = 0;
console.log('contatore', contatore);
console.log('items in base al contatore', images[contatore]);

//inizializzo variabili prev e next, e slider
const sliderLeft = document.querySelector('.slider-left');
const sliderRight = document.querySelector('.slider-right');

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

//intercetto funzione click su frecce
prev.addEventListener('click', function(){
  //rimuovo classe active
  console.log(images[contatore]);
  images[contatore].classList.remove('active');
  console.log(images[contatore]);

  //torno all'immagine precedente
  contatore = contatore - 1;
  if (contatore < 0 ) {
    contatore = images.length - 1;
  }

  //aggiungo classe active
  images[contatore].classList.add('active');
  console.log(images[contatore]);
})

next.addEventListener('click', function(){
  //rimuovo classe active
  console.log(images[contatore]);
  images[contatore].classList.remove('active');
  console.log(images[contatore]);

  //torno all'immagine precedente
  contatore = contatore + 1;
  if (contatore > images.length - 1 ) {
    contatore = 0;
  }

  //aggiungo classe active
  images[contatore].classList.add('active');
  console.log(images[contatore]);
})