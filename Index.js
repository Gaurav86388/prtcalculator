const displayBox = document.getElementById('display-box');
displayBox.value = 0

    document.getElementById("1").addEventListener("click", ()=>{

        numberRegister(1)
  
    })
    document.getElementById("2").addEventListener("click", ()=>{
        numberRegister(2)
     
    })
    document.getElementById("3").addEventListener("click", ()=>{
        numberRegister(3)
    })
    document.getElementById("4").addEventListener("click", ()=>{
        numberRegister(4)
    })
    document.getElementById("5").addEventListener("click", ()=>{
        numberRegister(5)
    })
    document.getElementById("6").addEventListener("click", ()=>{
        numberRegister(6)
    })
    document.getElementById("7").addEventListener("click", ()=>{
        numberRegister(7)
    })
    document.getElementById("8").addEventListener("click", ()=>{
        numberRegister(8)
    })

    document.getElementById("9").addEventListener("click", ()=>{
        numberRegister(9)
    })
    document.getElementById("0").addEventListener("click", ()=>{
        numberRegister(0)
    })
    document.getElementById("C").addEventListener("click", ()=>{
        clearDisplay()
    })
    document.getElementById("/").addEventListener("click", ()=>{
        operationRegister("/")
    
    })
    document.getElementById("-").addEventListener("click", ()=>{
        operationRegister("-")
 
    })
    document.getElementById("+").addEventListener("click", ()=>{
        operationRegister("+")

    })
    document.getElementById("*").addEventListener("click", ()=>{
        operationRegister("*")
    })
    document.getElementById("=").addEventListener("click", ()=>{
        perform()
    })

let res, firstNum, secondNum, thirdNum = 0
let lastOperation = ""
function numberRegister(value){

    if (lastOperation !== '') {

        thirdNum = 0;
      }
      thirdNum += value;
      display(value);

}


function operationRegister(operation){
    if (thirdNum === '') {
        return;
      }
      firstNum = parseFloat(thirdNum);
      thirdNum = 0;
      lastOperation = operation;
      display(lastOperation)

}

function perform(){
    if (firstNum === 0 || lastOperation === '' || thirdNum === 0) {

        return;

}


const secondNum = parseFloat(thirdNum);
let result = 0;


switch (lastOperation) {
  case '+':
    result = firstNum + secondNum;
    break;
  case '-':
    result = firstNum - secondNum;
    break;
  case '*':
    result = firstNum * secondNum;
    break;
  case '/':
    if (secondNum=== 0) {
      alert('Division by 0 not possible');
      clearDisplay();
      return;
    }
    result = firstNum / secondNum;
    break;
  default:
    alert('Invalid operation');
}

displayBox.value = result;
firstNum = result;
lastOperation = '';
thirdNum = 0;

}

function display(value){
    if(displayBox.value == 0){
        displayBox.value = value
    }
    else{
        displayBox.value += value;
    }
    
}

function clearDisplay() {
    displayBox.value = '0';
    secondNum = '';
    firstNum = 0;
    lastOperation = '';
  }

    



