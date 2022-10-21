/*we need a deck of cards to draw from and display from 
we need a function to randomize the order they are placed in inside 4<div class= cells>
we need these deck of cards to be displayed in our  4 <div class= cells> on click
a comparision of the cards to check for the win a button to restart game 
a conditional to display a win or lose*/

document.querySelector(".redo").addEventListener("click", newGame);
//document.getElementById('box1').addEventListener('click', draw1)
//document.getElementById('box2').addEventListener('click', draw2)
//document.getElementById('box3').addEventListener('click', draw3)
//document.getElementById('box4').addEventListener('click', draw4)

const url =
  "https://www.deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,AH,AD,AC";

function newGame() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      let deckid = data.deck_id;
      console.log(deckid);
    });
}

function draw1 (){
    fetch(`https://www.deckofcardsapi.com/api/deck/${deckid}/draw/?count=1`)
        .then((res)=> res.json())
        .then((firstdraw) => {
            console.log(firstdraw)

        })
}
