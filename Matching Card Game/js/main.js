//on page load give cards values(array?) randomize values in board and hide
//this will track the amount of times images are used
let duragHistory = 2;
let fromTheWomb = 2;

const cards = [
  "Durag History.jpg",
  "Fromthewomb.jpg",
  "Durag History.jpg",
  "Fromthewomb.jpg",
];

document.querySelectorAll(".cell").forEach((box) => {
  const randomnumber = Math.floor(Math.random() * cards.length);
  const randompicture = cards[randomnumber];
  console.log(randompicture);
  cards.splice(randomnumber, 1);
  box.src = "css/" + randompicture;
});

//resize the photos

//extra function hide photos and add click listeners to reveal and track
document.querySelectorAll(".flipper").forEach((playable) => {
  playable.addEventListener("click", turnover);
});

function turnover(playable) {
  //differiate between first click and second click
  const imgElement = playable.target.querySelector("img");
  let play1 = document.querySelector(".picked");

  console.log(play1);

  //check if first class picked

  if (play1) {
    if (imgElement.src === play1.src){
      console.log("winner");
    }
  
    
    //'picked' is found - search for the match
    console.log("second");
  } else {
    //'picked' is not found - we create 'picked'
    imgElement.classList.add("picked");
    console.log("first");
  }

  imgElement.classList.replace("hidden", "picked");
}
