const gameboard = (function () {
  const gameboardArr = [];
  const printGameboardArr = () => console.log(gameboardArr);
  const addItem = (x) => {
    const tempHolder = x.toUpperCase();
    if(tempHolder === "X" || tempHolder === "O"){
      gameboardArr.push(tempHolder);
    }
    else{
      return alert("Input only X or O");
    }

  }

  return {gameboardArr, printGameboardArr, addItem};
})();

gameboard.printGameboardArr();
gameboard.addItem("o")
gameboard.printGameboardArr();

