const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generateButton = document.getElementById("gen-btn");
const passwordBoxOne = document.getElementById("pwd-one");
const passwordBoxTwo = document.getElementById("pwd-two");
let passwordOne = []
let passwordTwo = []

function getRandomNumber(){
    return Math.floor(Math.random() * characters.length)
}

function generatePassword() {
    passwordBoxOne.textContent = ""
    for (i = 0; i <= 15; i++){
    passwordBoxOne.textContent += characters[getRandomNumber()]}
    passwordBoxTwo.textContent = ""
    for (i = 0; i <= 15; i++){
    passwordBoxTwo.textContent += characters[getRandomNumber()]}

}

passwordBoxOne.onclick = function() {
  document.execCommand("copy");
}
passwordBoxOne.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", passwordBoxOne.textContent);
    console.log(event.clipboardData.getData("text"))
  }
});

passwordBoxTwo.onclick = function() {
    document.execCommand("copy");
  }
  passwordBoxTwo.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", passwordBoxTwo.textContent);
      console.log(event.clipboardData.getData("text"))
    }
  });