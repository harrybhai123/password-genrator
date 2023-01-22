const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let randomString = "";

// function genPass(){
//         for (let i = 0; i < 15; i++) {
//         let randomIndex = Math.floor(Math.random() * characters.length);
//         randomString += characters[randomIndex];
//         }
//         console.log(randomString);
// }

document.getElementById("myButton").addEventListener("click", function() {
    
    let randomStringOne = "";
    let randomStringTwo = "";
    for (let i = 5; i <= 20; i++) {
        let randomPassOne = Math.floor(Math.random() * characters.length);
        let randomPassTwo = Math.floor(Math.random() * characters.length);
        randomStringOne += characters[randomPassOne];
        randomStringTwo += characters[randomPassTwo];
    }

    document.getElementById("firstPassword").innerHTML = randomStringOne;
    document.getElementById("secondPassword").innerHTML = randomStringTwo;
});