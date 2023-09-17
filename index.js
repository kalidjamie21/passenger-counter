let count = 0;
let countButton = document.querySelector(".add-btn");
let saveButton = document.querySelector(".save-btn");

addNumber();
saveNumber();


function addNumber() {
    countButton.addEventListener("click", function () {
        count++;
        document.querySelector(".count").innerHTML = count;

})}

function saveNumber() {
    saveButton.addEventListener("click", function() {   
        let countDash = count + " - ";
        document.querySelector(".saved-count").innerHTML += countDash;
        document.querySelector(".count").innerHTML = 0;
        count = 0;

    })
}
