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
let avaliableColorsArray = [
['red','blue','orange','purple','green','cyan','yellow','pink','black'],
['#618264','#79AC78','#B0D9B1','#D0E7D2'], //green-ish
['#EEF5FF','#B4D4FF','#86B6F6','#176B87'], //blue-ish
['#711DB0','#C21292','#EF4040','#FFA732'], //purple-ish
['red','blue','orange','purple','green','cyan','yellow','pink','black','black','black','black','black','black','black','black','black','black','black','black','black'],

]
let avaliableColors = ['red','blue','orange','purple','green','cyan','yellow','pink','black']

//change above array to determine colors


let colorfulness = false
let static = true
let inMenu = true
const menuItems = document.getElementsByClassName("menuItem");



//get screen length
divCreator = () => {
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
    // console.log(currentLeft)
    // console.log(currentTop)
  
  }

}
divCreator();
//put this for loop in the above funstion when possible


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
    if (colorfulness) {
      currentDiv.style.background = divColor
    }
    
    divColor = avaliableColors[Math.floor(Math.random()*avaliableColors.length)]
    currentDiv.style.outlineColor = divColor

    let currentLeft = currentDiv.style.left
    let currentTop = currentDiv.style.top

    
    if (!static) {
      currentDiv.style.left = e.offsetX + 'px';
      currentDiv.style.top = e.offsetY + 'px';
     //COMMENT OUT ABOVE 2 LINES FOR STATIC MOVEMENT

      currentDiv.style.position = "relative"

    } else  if (!inMenu) {

      currentDiv.style.transform = "none";

    }
    // console.log(e.offsetX)
    

  }
  // for (let i = 0; i < squareCount; i++) {

  //   currentDiv = divList[i];
    
  // }
}
document.addEventListener('mousemove', onMouseMove);


const unHide = (setting) => {
  document.body.style.cursor = 'none';
  colorfulness = setting
  for (let i = 0; i < squareCount; i++) {
    let currentDiv = divList[i]
    currentDiv.style.visibility = "visible";
    

    
  }

  inMenu = false;

  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].style.visibility = "hidden";
  }


  // divCreator();
}


const changeStatic = (option) => {
  static = option
  if (static) {
    // document.querySelectorAll("div").forEach(div.style.transform = "translate(50%,50%);")
    // document.getElementsByTagName('div').style.transform = "translate(50%,50%);";
    // for (let i = 0; i < squareCount; i++) {
    //   let currentDiv = divList[i];
    //   currentDiv.style.transform = "none";
    //   console.log('HERE')
    // }
  }
  
}



const changeColor = (color) => {
  avaliableColors = avaliableColorsArray[color]
  
}