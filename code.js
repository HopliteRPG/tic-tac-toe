const gameboard = (function () {
  const gameboardArr = [];
  const printGameboardArr = () => console.log(gameboardArr);
  const addItem = (x) => {
    const tempHolder = x.toUpperCase();
    if(gameboardArr.length >= 9){
       alert("Only 9 items permitted")
    }
    else{
      if(tempHolder === "X" || tempHolder === "O"){
        gameboardArr.push(tempHolder);
      }
      else{
         alert("Input only X or O");
      }
    }
   
  }

  return {gameboardArr, printGameboardArr, addItem};
})();

gameboard.printGameboardArr();
gameboard.addItem("o");
gameboard.addItem("o");
gameboard.addItem("o");
gameboard.addItem("o");
gameboard.addItem("o");
gameboard.addItem("o");
gameboard.addItem("o");
gameboard.addItem("o");
gameboard.addItem("o");


gameboard.printGameboardArr();

