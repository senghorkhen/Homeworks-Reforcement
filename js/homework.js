
const INPUT_HMTL = document.querySelector('#input');
const BUTTON_HMTL = document.querySelector('#button');
const CARD_HTML = document.querySelector("#card");

let addItems = [];
let id = 0;

document.addEventListener("keyup", event => {
    if (event.code === "Enter") {
        const inputValue = INPUT_HMTL.value;

        if (inputValue != "") {

            // add the card
            addCard(inputValue);

            // clear input
            clearInput();
            changeColor();
        }
    }
});

function clearInput() {
    INPUT_HMTL.value = "";
}
function addCard(addName) {
    addItems.push({ name: addName, id: id, done: false });
    updateList();
}

function updateList() {
    let code = "";
    for (let element of addItems) {
        code += `
      <div class="col-3"><h1>${element.name}</h1><button class="buttonCard">Card</button></div> 
     `;
        CARD_HTML.innerHTML = code;
    }
}

// add card by button add
const ADD_HTML = document.querySelector('#button')
    .addEventListener('click', function () {
        const inputValue = INPUT_HMTL.value;
        if (inputValue != "") {
            changeColor();

            // add the card
            addCard(inputValue);
            
            // clear input
            clearInput();
        }
});

function changeColor() { 
    const arrayColor = ["#7b1fa2", "#1e88e5", "#c2185b", "#00897b", "#039be5", "#ffd0a8"];
    var randomAllColor = arrayColor[Math.floor(Math.random() * arrayColor.length)];
    document.body.style.background = randomAllColor;
} 