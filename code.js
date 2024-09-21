const gameboard = (function () {
  const gameboardArr = [];
  const printGameboardArr = () => console.log(gameboardArr);
  const addGameboardArr = (x) => gameboardArr.push(x);

  return {gameboardArr, printGameboardArr, addGameboardArr};
})();

gameboard.printGameboardArr();
gameboard.addGameboardArr("x")
gameboard.printGameboardArr();

