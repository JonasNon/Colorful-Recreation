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
}

const testLog = () => {
  console.log(divList)
}

const onMouseMove = (e) =>{
  for (let i = 0; i < squareCount; i++) {
    let currentDiv = divList[i]
    
    let divColor = avaliableColors[Math.floor(Math.random()*avaliableColors.length)]
    currentDiv.style.background = divColor
    divColor = avaliableColors[Math.floor(Math.random()*avaliableColors.length)]
    currentDiv.style.border = divColor
  }
}
document.addEventListener('mousemove', onMouseMove);


const unHide = () => {
  for (let i = 0; i < squareCount; i++) {
    let currentDiv = divList[i]
    currentDiv.style.visibility = "visible";
  }
  document.getElementById("yes").style.visibility = "hidden";
  document.getElementById("startText").style.visibility = "hidden";

}