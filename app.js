const gameboard = document.querySelector("#gameboard")
const infoDisplay = document.querySelector("#info")

const startCells = [

    "","","","","","","","","" 
]


let go = 'circle'
infoDisplay.textContent= "Circle goes first" // status of the game
// function to create Game board
function createBoard(){
    startCells.forEach((cell,index) => {
        const cellElement = document.createElement('div') // create element for each cells i.e. 9
        cellElement.classList.add('square')  // added a class "square" in all div tags 
        cellElement.id = index // adding id in all div tagsfor each cell using index
        cellElement.addEventListener("click", addGo) // event listner
        gameboard.append(cellElement)  //appending cellElement each time         

    });
}

createBoard()// calling create boardfunction


// function adding circle and cross 
function addGo(event){
    const godisplay = document.createElement('div') // creating a element for adding circle or cross
     godisplay.classList.add(go)  // adding circle or cross class 
     event.target.append(godisplay) //

      go = go=== "circle" ? "cross" :"circle"
      infoDisplay.textContent = "it is now " + go + " 's go."
      event.target.removeEventListener("click" , addGo)  // removing event listener
      checkScore()

}


function checkScore(){
    const allSquares = document.querySelectorAll(".square")

    const winningCombos = [
        [0,1,2] ,[3,4,5],[6,7,8],   // horizontal
        [0,3,6],[1,4,7],[2,5,8],    // vertical
        [0,4,8],[2,4,6]             // diagonal
    ]


    //for circle
     winningCombos.forEach(array =>{
         const  circleWins = array.every(cell =>
            allSquares[cell].firstChild?.classList.contains('circle'))
      
            if(circleWins){
                infoDisplay.textContent= " CIRCLE WINS!!!!"
                allSquares.forEach(square => square.replaceWith(square.cloneNode(true)) ) 
                return
            }

     })


     //for CRoss
     winningCombos.forEach(array =>{
        const  crossWins = array.every(cell =>
           allSquares[cell].firstChild?.classList.contains('cross'))
     
           if(crossWins){
               infoDisplay.textContent= " CROSS  WINS!!!!"
               allSquares.forEach(square => square.replaceWith(square.cloneNode(true)) ) 
               return
           }

    })




}
