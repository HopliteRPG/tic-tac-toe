const gameboard = (function () {
  let gameboardArr = ["","","","","","","","",""];
  const printGameboardArr = () => console.log(gameboardArr);

  const isHorizontalWin = function(array,firstCell){
    if(array[firstCell] === "X" && array[firstCell+1] === "X" && array[firstCell+2] === "X"){
      alert("X Player Victory");
    }
    else if(array[firstCell] === "O" && array[firstCell+1] === "O" && array[firstCell+2] === "O"){
      alert("O Player Victory");
    }
  }


  const addItem = (num,icon) => {
    const tempHolder = icon.toUpperCase();

    if(num <= 8 && gameboardArr[num] === ""){
      if(tempHolder === "X" || tempHolder === "O"){
        gameboardArr.splice(num,1,tempHolder);
        isHorizontalWin(gameboardArr,0);
        isHorizontalWin(gameboardArr,3);
        isHorizontalWin(gameboardArr,6);

      }
      else{
         alert("Input only X or O");
         isHorizontalWin(gameboardArr,0);
         isHorizontalWin(gameboardArr,3);
         isHorizontalWin(gameboardArr,6);

      }
    } 
  }

  return {gameboardArr, printGameboardArr, addItem};
})();

gameboard.printGameboardArr();

//If a row is full victory condition will not active find out why
gameboard.addItem(0,"o");
gameboard.addItem(1,"o");
gameboard.addItem(2,"x");

gameboard.addItem(3,"x");
// gameboard.addItem(4,"x");
// gameboard.addItem(5,"x");

gameboard.addItem(6,"o");
gameboard.addItem(7,"o");
gameboard.addItem(8,"o");



gameboard.printGameboardArr();



