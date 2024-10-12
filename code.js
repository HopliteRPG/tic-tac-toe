const gameboard = (function () {
  let gameboardArr = [];
  const printGameboardArr = () => console.log(gameboardArr);

  //DOM Stuff
  const mainDom = document.querySelector(".main");
  const gameboardArrDom = document.createElement("div");
  gameboardArrDom.classList.add("gameboardArrDom");
  mainDom.appendChild(gameboardArrDom);

  const checkWinCondition = function(){
    const isHorizontalWin = function(array,firstCell){
      if(array[firstCell] === "X" && array[firstCell+1] === "X" && array[firstCell+2] === "X"){
        alert("X Player Victory");
      }
      else if(array[firstCell] === "O" && array[firstCell+1] === "O" && array[firstCell+2] === "O"){
        alert("O Player Victory");
      }
    }
  
    const isVerticalWin = function(array,firstCell){
      if(array[firstCell] === "X" && array[firstCell+3] === "X" && array[firstCell+6] === "X"){
        alert("X Player Victory");
      }
      else if(array[firstCell] === "O" && array[firstCell+3] === "O" && array[firstCell+6] === "O"){
        alert("O Player Victory");
      }
    }

    const isDiagonalWin = function(array,firstCell){
      if(array[firstCell] === "X" && array[firstCell+4] === "X" && array[firstCell+8] === "X"){
        alert("X Player Victory");
      }
      else if(array[firstCell] === "O" && array[firstCell+4] === "O" && array[firstCell+8] === "O"){
        alert("O Player Victory");
      }
      else if(array[firstCell+2] === "X" && array[firstCell+4] === "X" && array[firstCell+6] === "X"){
        alert("X Player Victory");
      }
      else if(array[firstCell+2] === "O" && array[firstCell+4] === "O" && array[firstCell+6] === "O"){
        alert("O Player Victory");
      }
    }


    isHorizontalWin(gameboardArr,0);
    isHorizontalWin(gameboardArr,3);
    isHorizontalWin(gameboardArr,6);

    isVerticalWin(gameboardArr,0);
    isVerticalWin(gameboardArr,1);
    isVerticalWin(gameboardArr,2);

    isDiagonalWin(gameboardArr,0)
  }

  const addItem = (num,icon) => {
    const tempHolder = icon.toUpperCase();

    if(num <= 8 && gameboardArr[num].icon === ""){
      if(tempHolder === "X" || tempHolder === "O"){
        gameboardArr[num].icon = icon
        checkWinCondition();

      }
      else{
         alert("Input only X or O");
         checkWinCondition();
      }
    } 
  }

  function createCell (id,icon,array,dom){
    const gameboardCell = document.createElement("div");
    gameboardCell.classList.add("gameboardCell");
    const cloneGameboardCell = gameboardCell.cloneNode(true);

    const addCellToDom = (id) => {
      dom.appendChild(cloneGameboardCell)
      cloneGameboardCell.setAttribute("id",id)
    }
    

    return{id,icon,array,dom,addCellToDom}
  }




  function createDOM(){
    for(let i = 0; i <= 8; i++){


      const tempCell = createCell(i,"",gameboardArr,gameboardArrDom)
      tempCell.addCellToDom(tempCell.id);

      function extractIconAndId({id:id,icon:icon}){
        return {id,icon}
      }

      gameboardArr.push(extractIconAndId(tempCell))
    }
  }

  createDOM();

  return {gameboardArr, printGameboardArr, addItem};
})();

gameboard.printGameboardArr();

//If a row is full victory condition will not active find out why
gameboard.addItem(0,"O");
// gameboard.addItem(1,"");
// gameboard.addItem(2,"X");

// gameboard.addItem(3,"");
// gameboard.addItem(4,"X");
// gameboard.addItem(5,"");

// gameboard.addItem(6,"X");
// gameboard.addItem(7,"");
// gameboard.addItem(8,"O");



gameboard.printGameboardArr();



