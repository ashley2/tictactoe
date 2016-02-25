'use strict';

document.addEventListener('DOMContentLoaded', init);

function init() {
  // var x = 0;

  // document.getElementById("playGame").onclick = playGame;


  // function playGame (event){
  //   console.log('click');
  //   var x = 1;
  //   console.log(x);

    // if (x === 1) {
    //   console.log(x)


    // }

    var blueSquares = [];
    var greenSquares = [];

    var isGreenTurn = true;



    document.getElementById('container').onclick = pickBox
    function pickBox(event) {

      var boxClick = event.target;
      var hasClass = boxClick.classList.contains('green') || boxClick.classList.contains('blue');
      if(!hasClass) {
       if (isGreenTurn){
        boxClick.classList.add('green');
        greenSquares.push(boxClick.getAttribute("id").replace("cell", ""));
        testWin(greenSquares);
        isGreenTurn = !isGreenTurn;
        document.getElementById('turn').innerHTML = "Blue Turn!";
      } else {
        boxClick.classList.add('blue');
        blueSquares.push(boxClick.getAttribute("id").replace("cell", ""));
        testWin(blueSquares);
        isGreenTurn = !isGreenTurn;
        document.getElementById('turn').innerHTML = "Green Turn!";
      }
      return;
    }

    var page = document.getElementById('page');

    function testWin(squares){

      if (squares.indexOf("1") !== -1 && squares.indexOf("2") !== -1 &&  squares.indexOf("3") !== -1){
        var classList = boxClick.getAttribute('class');
        if (classList === 'cell black green'){
          alert('green won');
          // page.classList.add('animated infinate bounce');
          location.reload();
        } else {
          alert('blue won');
          location.reload();
        }
        container.removeEventListener('click', pickBox);
      } 

      if (squares.indexOf("1") !== -1 && squares.indexOf("4") !== -1 &&  squares.indexOf("7") !== -1){
        var classList = boxClick.getAttribute('class');
        if (classList === 'cell black green'){
          alert('green won');
          location.reload();
        } else {
          alert('blue won');
          location.reload();
        }
        container.removeEventListener('click', pickBox);
      } 

      if (squares.indexOf("1") !== -1 && squares.indexOf("5") !== -1 &&  squares.indexOf("9") !== -1){
        var classList = boxClick.getAttribute('class');
        if (classList === 'cell black green'){
          alert('green won');
          location.reload();
        } else {
          alert('blue won');
          location.reload();
        }
        container.removeEventListener('click', pickBox);
      } 
      if (squares.indexOf("2") !== -1 && squares.indexOf("5") !== -1 &&  squares.indexOf("8") !== -1){
        var classList = boxClick.getAttribute('class');
        if (classList === 'cell black green'){
          alert('green won');
          location.reload();
        } else {
          alert('blue won');
          location.reload();
        }
        container.removeEventListener('click', pickBox);
      } 
      if (squares.indexOf("3") !== -1 && squares.indexOf("6") !== -1 &&  squares.indexOf("9") !== -1){
        var classList = boxClick.getAttribute('class');
        if (classList === 'cell black green'){
          alert('green won');
          location.reload();
        } else {
          alert('blue won');
          location.reload();
        }
        container.removeEventListener('click', pickBox);
      } 
      if (squares.indexOf("3") !== -1 && squares.indexOf("5") !== -1 &&  squares.indexOf("7") !== -1){
        var classList = boxClick.getAttribute('class');
        if (classList === 'cell black green'){
          alert('green won');
          location.reload();
        } else {
          alert('blue won');
          location.reload();
        }
        container.removeEventListener('click', pickBox);
      } 
      if (squares.indexOf("4") !== -1 && squares.indexOf("5") !== -1 &&  squares.indexOf("6") !== -1){
        var classList = boxClick.getAttribute('class');
        if (classList === 'cell black green'){
          alert('green won');
          location.reload();
        } else {
          alert('blue won');
          location.reload();
        }
        container.removeEventListener('click', pickBox);
      } 
      if (squares.indexOf("7") !== -1 && squares.indexOf("8") !== -1 &&  squares.indexOf("9") !== -1){
        var classList = boxClick.getAttribute('class');
        if (classList === 'cell black green'){
          alert('green won');
          location.reload();
        } else {
          alert('blue won');
          location.reload();
        }
        container.removeEventListener('click', pickBox);
      }

    }
  }
// }
}



