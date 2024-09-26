const gameboard = (function () {
  let gameboardArr = ["","","","","","","","",""];
  const printGameboardArr = () => console.log(gameboardArr);

  const checkWinCondition = (array) => {
      //Horizontal Win Conditions
      if(array[0] && array[1] && array[2] !== ""){
          if(array[0] === "X" && array[1] === "X" && array[2] === "X"){
            alert("X Player Victory");
          }
          else if(array[0] === "O" && array[1] === "O" && array[2] === "O"){
            alert("O Player Victory");
          }
        }
         else if(array[3] && array[4] && array[5] !== ""){
            if(array[3] === "X" && array[4] === "X" && array[5] === "X"){
              alert("X Player Victory");
            }
            else if(array[3] === "O" && array[4] === "O" && array[5] === "O"){
              alert("O Player Victory");
            }
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

// gameboard.addItem(0,"o");
// gameboard.addItem(1,"o");
// gameboard.addItem(2,"o");
gameboard.addItem(3,"x");
gameboard.addItem(4,"x");
gameboard.addItem(5,"x");



gameboard.printGameboardArr();



