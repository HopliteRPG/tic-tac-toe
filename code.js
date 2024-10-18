const gameboard = (function () {
  let gameboardArr = [];
  const printGameboardArr = () => console.log(gameboardArr);

  //DOM Stuff
  const mainDom = document.querySelector(".main");
  const gameboardArrDom = document.createElement("div");
  gameboardArrDom.classList.add("gameboardArrDom");
  mainDom.appendChild(gameboardArrDom);

  //Checking Win Conditions
  let winStatus = false;
  const checkWinCondition = function(){
    const isHorizontalWin = function(array,firstCell){
      if(array[firstCell].icon === "X" && array[firstCell+1].icon === "X" && array[firstCell+2].icon === "X"){
        alert("X Player Victory");
        winStatus = true;
      }
      else if(array[firstCell].icon === "O" && array[firstCell+1].icon === "O" && array[firstCell+2].icon === "O"){
        alert("O Player Victory");
        winStatus = true;
      }
    }
  
    const isVerticalWin = function(array,firstCell){
      if(array[firstCell].icon === "X" && array[firstCell+3].icon === "X" && array[firstCell+6].icon === "X"){
        alert("X Player Victory");
        winStatus = true;
      }
      else if(array[firstCell].icon === "O" && array[firstCell+3].icon === "O" && array[firstCell+6].icon === "O"){
        alert("O Player Victory");
        winStatus = true;
      }
    }

    const isDiagonalWin = function(array,firstCell){
      if(array[firstCell].icon === "X" && array[firstCell+4].icon === "X" && array[firstCell+8].icon === "X"){
        alert("X Player Victory");
        winStatus = true;
      }
      else if(array[firstCell].icon === "O" && array[firstCell+4].icon === "O" && array[firstCell+8].icon === "O"){
        alert("O Player Victory");
        winStatus = true;
      }
      else if(array[firstCell+2].icon === "X" && array[firstCell+4].icon === "X" && array[firstCell+6].icon === "X"){
        alert("X Player Victory");
        winStatus = true;
      }
      else if(array[firstCell+2].icon === "O" && array[firstCell+4].icon === "O" && array[firstCell+6].icon === "O"){
        alert("O Player Victory");
        winStatus = true;
      }
    }

    const isTie = function(array){
      if(array[0,1,2,3,4,5,6,7,8].icon != "" && winStatus === false){
        alert("Tie");
        winStatus = true;
      }
    }


    isHorizontalWin(gameboardArr,0);
    isHorizontalWin(gameboardArr,3);
    isHorizontalWin(gameboardArr,6);

    isVerticalWin(gameboardArr,0);
    isVerticalWin(gameboardArr,1);
    isVerticalWin(gameboardArr,2);

    isDiagonalWin(gameboardArr,0)

    isTie(gameboardArr);
  }

  //Adding Icons
  const addItem = (num,icon) => {
    const tempHolder = icon.toUpperCase();

    if(num <= 8 && gameboardArr[num].icon === "" && winStatus === false){
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
    const iconHTML = document.createElement("p");
    const cloneIconHTML = iconHTML.cloneNode(true);

    const addCellToDom = (id) => {
      dom.appendChild(cloneGameboardCell);
      cloneGameboardCell.setAttribute("id",id);
      cloneIconHTML.setAttribute("class","iconHTML")
      cloneGameboardCell.appendChild(cloneIconHTML);
      
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
    let iconHTML = dom.querySelectorAll(".iconHTML")
    for(let i = 0; i<array.length; i++){
      if(gameboardCell[i].id == array[i].id){

        iconHTML[i].innerText = array[i].icon;



      }
    }
  }  



  createDOM();
  clickAndGetId(gameboardArrDom);

  return {gameboardArr, printGameboardArr, addItem};
})();

gameboard.printGameboardArr();

gameboard.addItem(0,"O");
gameboard.addItem(1,"X");
gameboard.addItem(2,"X");

gameboard.addItem(3,"X");
gameboard.addItem(4,"O");
gameboard.addItem(5,"O");

gameboard.addItem(6,"X");
gameboard.addItem(7,"O");
gameboard.addItem(8,"X");



gameboard.printGameboardArr();



