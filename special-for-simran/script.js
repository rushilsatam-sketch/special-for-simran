const startButton = document.getElementById('startButton');
const letterPopup = document.getElementById('letterPopup');
const slideshowPopup = document.getElementById('slideshowPopup');
const videoPopup = document.getElementById('videoPopup');
const slideshowButton = document.getElementById('slideshowButton');
const videoButton = document.getElementById('videoButton');
const prevImage = document.getElementById('prevImage');
const nextImage = document.getElementById('nextImage');
const slideshowImage = document.getElementById('slideshowImage');

let currentImage = 0;
const images = [
  'images/photo1.jpeg',
  'images/photo2.jpeg',
  'images/photo3.jpeg',
  'images/photo4.jpeg',
  'images/photo5.jpeg',
  'images/photo6.jpeg',
  'images/photo7.jpeg',
  'images/photo8.jpeg',
  'images/photo9.jpeg',
  'images/photo10.jpeg'
];

startButton.addEventListener('click', () => {
  document.querySelector('.container').classList.add('hidden');
  letterPopup.classList.remove('hidden');
});

slideshowButton.addEventListener('click', () => {
  letterPopup.classList.add('hidden');
  slideshowPopup.classList.remove('hidden');
});

videoButton.addEventListener('click', () => {
  slideshowPopup.classList.add('hidden');
  videoPopup.classList.remove('hidden');
});

nextImage.addEventListener('click', () => {
  currentImage = (currentImage + 1) % images.length;
  slideshowImage.src = images[currentImage];
});

prevImage.addEventListener('click', () => {
  currentImage = (currentImage - 1 + images.length) % images.length;
  slideshowImage.src = images[currentImage];
});
