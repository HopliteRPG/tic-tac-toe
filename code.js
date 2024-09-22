const gameboard = (function () {
  let gameboardArr = ["","","","","","","","",""];
  const printGameboardArr = () => console.log(gameboardArr);

  const addItem = (num,icon) => {


    const tempHolder = icon.toUpperCase();

    if(num <= 8){
      if(tempHolder === "X" || tempHolder === "O"){
        gameboardArr.splice(num,1,tempHolder);
      }
      else{
         alert("Input only X or O");
      }
    } 
  }

  return {gameboardArr, printGameboardArr, addItem};
})();

gameboard.printGameboardArr();

gameboard.addItem(0,"x")
gameboard.addItem(8,"o")

gameboard.printGameboardArr();



