/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createCarousel() {
  // define components
  const carouselContainer = document.createElement("div");
  const leftButton = document.createElement("div");
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const img3 = document.createElement("img");
  const img4 = document.createElement("img");
  const rightButton = document.createElement("div");

  // nest components
  carouselContainer.appendChild(leftButton);
  carouselContainer.appendChild(img1);
  carouselContainer.appendChild(img2);
  carouselContainer.appendChild(img3);
  carouselContainer.appendChild(img4);
  carouselContainer.appendChild(rightButton);

  // add content
  leftButton.textContent = "<";
  img1.src = "./assets/carousel/mountains.jpeg";
  img2.src = "./assets/carousel/computer.jpeg";
  img3.src = "./assets/carousel/trees.jpeg";
  img4.src = "./assets/carousel/turntable.jpeg";
  rightButton.textContent = ">";

  // set classes
  carouselContainer.classList.add("carousel");
  leftButton.classList.add("left-button");
  rightButton.classList.add("right-button");
  img1.classList.add("initial");


  return carouselContainer

}

const carouselContainer = document.querySelector(".carousel-container");
const carousel = createCarousel();
carouselContainer.appendChild(carousel);

console.log(carousel);
