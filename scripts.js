const holder = document.getElementById("square-holder")

// const node = document.createElement("div");
// // const textnode = document.createTextNode("Water");
// node.style.background = "red";
// // node.style.width = "100%";
// // node.style.height = "100%";
// document.getElementById("square-holder").appendChild(node);
// const para = document.getElementById("para");
// para.style.background = "green";


let divList = []
let squareCount = 100
let avaliableColors = ['red','blue','orange','purple','green','cyan','black','yellow','pink']

//get screen length

for (let i = 0; i < squareCount; i++) {
  let newDiv = document.createElement("div");
  // newDiv.style.border = "white"
  newDiv.style.visibility = "hidden";
  holder.appendChild(newDiv)
  divList.push(newDiv)

  let rect = newDiv.getBoundingClientRect();
  let currentLeft = rect.left
  let currentTop = rect.top
  
  
  
  newDiv.style.left = currentLeft
  newDiv.style.top = currentTop
  console.log(currentLeft)
  // console.log(currentTop)

}

const testLog = () => {
  // console.log(divList)

}

const onMouseMove = (e) =>{
  for (let i = 0; i < squareCount; i++) {
    let currentDiv = divList[i];
    // console.log(currentDiv.style.border)
    
    // console.log(rect)
    // let rectLeft = rect.left
    // let rectTop = rect.top
    // console.log(rectTop)





    let divColor = avaliableColors[Math.floor(Math.random()*avaliableColors.length)]
    
    // currentDiv.style.background = divColor
    // COMMENT OUT ABOVE LINE FOR VAST CHANGE
    divColor = avaliableColors[Math.floor(Math.random()*avaliableColors.length)]
    currentDiv.style.outlineColor = divColor

    let currentLeft = currentDiv.style.left
    let currentTop = currentDiv.style.top


    console.log(e.offsetX)
    currentDiv.style.left = e.offsetX + 'px';
    currentDiv.style.top = e.offsetY + 'px';
    //COMMENT OUT ABOVE 3 LINES FOR STATIC MOVEMENT

    currentDiv.style.position = "relative"


  }
  // for (let i = 0; i < squareCount; i++) {

  //   currentDiv = divList[i];
    
  // }
}
document.addEventListener('mousemove', onMouseMove);


const unHide = () => {
  document.body.style.cursor = 'none';

  for (let i = 0; i < squareCount; i++) {
    let currentDiv = divList[i]
    currentDiv.style.visibility = "visible";
    

    
  }
  document.getElementById("yes").style.visibility = "hidden";
  document.getElementById("startText").style.visibility = "hidden";

}