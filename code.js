const gameboard = (function () {
  let gameboardArr = [];
  const printGameboardArr = () => console.log(gameboardArr);

  //DOM Stuff
  const mainDom = document.querySelector(".main");
  const gameboardArrDom = document.createElement("div");
  gameboardArrDom.classList.add("gameboardArrDom");
  mainDom.appendChild(gameboardArrDom);

  //Checking Win Conditions
  const checkWinCondition = function(){
    const isHorizontalWin = function(array,firstCell){
      if(array[firstCell].icon === "X" && array[firstCell+1].icon === "X" && array[firstCell+2].icon === "X"){
        alert("X Player Victory");
      }
      else if(array[firstCell].icon === "O" && array[firstCell+1].icon === "O" && array[firstCell+2].icon === "O"){
        alert("O Player Victory");
      }
    }
  
    const isVerticalWin = function(array,firstCell){
      if(array[firstCell].icon === "X" && array[firstCell+3].icon === "X" && array[firstCell+6].icon === "X"){
        alert("X Player Victory");
      }
      else if(array[firstCell].icon === "O" && array[firstCell+3].icon === "O" && array[firstCell+6].icon === "O"){
        alert("O Player Victory");
      }
    }

    const isDiagonalWin = function(array,firstCell){
      if(array[firstCell].icon === "X" && array[firstCell+4].icon === "X" && array[firstCell+8].icon === "X"){
        alert("X Player Victory");
      }
      else if(array[firstCell].icon === "O" && array[firstCell+4].icon === "O" && array[firstCell+8].icon === "O"){
        alert("O Player Victory");
      }
      else if(array[firstCell+2].icon === "X" && array[firstCell+4].icon === "X" && array[firstCell+6].icon === "X"){
        alert("X Player Victory");
      }
      else if(array[firstCell+2].icon === "O" && array[firstCell+4].icon === "O" && array[firstCell+6].icon === "O"){
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

  //Adding Icons
  const addItem = (num,icon) => {
    const tempHolder = icon.toUpperCase();

    if(num <= 8 && gameboardArr[num].icon === ""){
      if(tempHolder === "X" || tempHolder === "O"){
        gameboardArr[num].icon = icon
        updateDomDisplay(gameboardArrDom,gameboardArr);
        checkWinCondition();

      }
      else{
         alert("Input only X or O");
         checkWinCondition();
      }
    } 
  }

  //Creating Cell object
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



  //Creating DOM
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

  //Add event listener
  function clickAndGetId(dom){
    let gameboardCell = dom.querySelectorAll(".gameboardCell");
    
    gameboardCell.forEach(element => {
      element.addEventListener("click", event =>{
        console.log(event.target.id)

      })
      
    });
  }

  //Update DOM Display
  function updateDomDisplay(dom,array){
    let gameboardCell = dom.querySelectorAll(".gameboardCell");
    for(let i = 0; i<array.length; i++){
      if(gameboardCell[i].id == array[i].id){
        // console.log("true")
        // console.log(array[i].icon);
        console.log(gameboardCell[i])
        let iconHTML = document.createElement("p");
        let cloneIconHTML = iconHTML.cloneNode(true);
        gameboardCell[i].appendChild(cloneIconHTML);
        cloneIconHTML = array[i].icon;


      }
    }
  }  



  createDOM();
  clickAndGetId(gameboardArrDom);

  return {gameboardArr, printGameboardArr, addItem};
})();

gameboard.printGameboardArr();

gameboard.addItem(0,"X");
gameboard.addItem(1,"X");
// gameboard.addItem(2,"X");

// gameboard.addItem(3,"X");
// gameboard.addItem(4,"X");
// gameboard.addItem(5,"X");

// gameboard.addItem(6,"O");
// gameboard.addItem(7,"O");
// gameboard.addItem(8,"O");



gameboard.printGameboardArr();



