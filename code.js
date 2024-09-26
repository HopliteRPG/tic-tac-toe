const gameboard = (function () {
  let gameboardArr = ["","","","","","","","",""];
  const printGameboardArr = () => console.log(gameboardArr);

  const checkWinCondition = (array) => {
      const winConditionFunc = function(array,firstCell,secondCell,thirdCell){
        if(array[firstCell] === "X" && array[secondCell] === "X" && array[thirdCell] === "X"){
          alert("X Player Victory");
        }
        else if(array[firstCell] === "O" && array[secondCell] === "O" && array[thirdCell] === "O"){
          alert("O Player Victory");
        }
      }
      //Horizontal Win Conditions
      if(array[0,1,2] !== ""){
        winConditionFunc(array,0,1,2);
      }
      else if(array[3,4,5] !== ""){
        winConditionFunc(array,3,4,5);
      }
      else if(array[6,7,8] !== ""){
        winConditionFunc(array,6,7,8);
      }
    

    
  }

  const addItem = (num,icon) => {
    const tempHolder = icon.toUpperCase();

    if(num <= 8 && gameboardArr[num] === ""){
      if(tempHolder === "X" || tempHolder === "O"){
        gameboardArr.splice(num,1,tempHolder);
        checkWinCondition(gameboardArr);

      }
      else{
         alert("Input only X or O");
         checkWinCondition(gameboardArr);

      }
    } 
  }

  return {gameboardArr, printGameboardArr, addItem};
})();

gameboard.printGameboardArr();

//If a row is full victory condition will not active find out why
gameboard.addItem(0,"o");
gameboard.addItem(1,"o");
// gameboard.addItem(2,"x");
// gameboard.addItem(3,"x");
// gameboard.addItem(4,"x");
// gameboard.addItem(5,"x");
gameboard.addItem(6,"o");
gameboard.addItem(7,"o");
gameboard.addItem(8,"o");



gameboard.printGameboardArr();



