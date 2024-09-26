const cards = document.getElementsByClassName("card");
let allImages = document.getElementsByClassName("card-image");
let moveDisplay = document.querySelector(".move-counter");
let toggledCardsArray = [];
let move = 0;
let winCount = 0;
const restart = document.getElementById("restart");
const reset = document.getElementById("reset");

const imagesLinkArray = [
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/1352881713/photo/mango-fruit-with-drops-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=xNgofvhPOsksKtOMK9sbvQ2qZpMS6WQ3UC6Omv7g8-0=",
    newAlt: "Mango Image",
  },
  {
    id: 2,
    image: "https://hips.hearstapps.com/hmg-prod/images/orange-1558624428.jpg",
    newAlt: "Orange Image",
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/736x/f9/86/e4/f986e4d28fa6ad24dfe90475dac6a248.jpg",
    newAlt: "Apple Image",
  },
  {
    id: 4,
    image:
      "https://static.libertyprim.com/files/varietes/red-globe-large.jpg?1588355080",
    newAlt: "Grapes Image",
  },
  {
    id: 5,
    image:
      "https://www.shutterstock.com/image-vector/two-cherries-isolated-on-white-600nw-2425952009.jpg",
    newAlt: "Cherry Image",
  },
  {
    id: 6,
    image:
      "https://i.pinimg.com/736x/f9/86/e4/f986e4d28fa6ad24dfe90475dac6a248.jpg",
    newAlt: "Apple Image",
  },
  {
    id: 7,
    image:
      "https://www.shutterstock.com/image-vector/two-cherries-isolated-on-white-600nw-2425952009.jpg",
    newAlt: "Cherry Image",
  },
  {
    id: 8,
    image: "https://hips.hearstapps.com/hmg-prod/images/orange-1558624428.jpg",
    newAlt: "Orange Image",
  },
  {
    id: 9,
    image:
      "https://st2.depositphotos.com/1036708/7662/i/950/depositphotos_76622481-stock-photo-strawberry.jpg",
    newAlt: "Strawberry Image",
  },
  {
    id: 10,
    image:
      "https://media.istockphoto.com/id/1352881713/photo/mango-fruit-with-drops-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=xNgofvhPOsksKtOMK9sbvQ2qZpMS6WQ3UC6Omv7g8-0=",
    newAlt: "Mango Image",
  },
  {
    id: 11,
    image:
      "https://st2.depositphotos.com/1036708/7662/i/950/depositphotos_76622481-stock-photo-strawberry.jpg",
    newAlt: "Strawberry Image",
  },
  {
    id: 12,
    image:
      "https://static.libertyprim.com/files/varietes/red-globe-large.jpg?1588355080",
    newAlt: "Grapes Image",
  },
];


const restartGame = () => {
  let toggledCard = document.getElementsByClassName("card toggled");
  imagesLinkArray.sort(() => Math.random() - 0.5);
  Object.values(toggledCard).forEach(function (el) {
    setTimeout(() => {
      el.classList.remove("toggled");
    }, 0);
  });
  toggledCardsArray.length = 0;
  move = 0;
  winCount = 0;
  moveDisplay.innerText = `move: ${move}`;
  let allImagesSrc = document.getElementsByClassName("card-image");
  Object.values(allImagesSrc).forEach((el, index) => {
    el.src = imagesLinkArray[index].image;
    el.alt = imagesLinkArray[index].newAlt;
    el.id = imagesLinkArray[index].id;
  });
};
restart.addEventListener("click", restartGame);

const resetGame = () => {
  let toggledCard = document.getElementsByClassName("card toggled");
  imagesLinkArray.sort(() => Math.random() - 0.5);
  Object.values(toggledCard).forEach(function (el) {
    setTimeout(() => {
      el.classList.remove("toggled");
    }, 0);
  });
  toggledCardsArray.length = 0;
  move = 0;
  winCount = 0;
  moveDisplay.innerText = `move: ${move}`;
  let allImagesSrc = document.getElementsByClassName("card-image");
  Object.values(allImagesSrc).forEach((el, index) => {
    el.src = imagesLinkArray[index].image;
    el.alt = imagesLinkArray[index].newAlt;
    el.id = imagesLinkArray[index].id;
  });
};
reset.addEventListener("click", resetGame);


for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {
    this.classList.add("toggled");
    toggledCardsArray.push(this);
    let thisImgSrc = this.querySelector(".card-image").src;
    let previousImgSrc =
      toggledCardsArray[toggledCardsArray.length - 2].querySelector(
        ".card-image"
      ).src;
    if (thisImgSrc !== previousImgSrc) {
      toggledCardsArray.forEach(function (el) {
        setTimeout(() => {
          el.classList.remove("toggled");
        }, 500);
      });
      toggledCardsArray.length = 0;
      move++;
    } else {
      toggledCardsArray.length = 0;
      move++;
      winCount++;
    }
    moveDisplay.innerText = `move: ${move}`;
    if (winCount === 6) {
      setTimeout(() => {
        alert(`Congratulations!!! You won the game in ${move} move.`);
      }, 300);
    }
  });
}
