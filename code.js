const gameboard = (function () {
  let gameboardArr = ["","","","","","","","",""];
  const printGameboardArr = () => console.log(gameboardArr);

  const checkWinCondition = (array) => {
    for(let i = 0; i < array.length-1; i++){
      if(array[0] === "X" && array[1] === "X" && array[2] === "X"){
        alert("X Player Victory");
        break;
      }
      else if(array[0] === "O" && array[1] === "O" && array[2] === "O"){
        alert("O Player Victory");
        break;
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

gameboard.addItem(0,"o");
gameboard.addItem(1,"o");
gameboard.addItem(2,"o");



gameboard.printGameboardArr();



