let euroElement = document.querySelector(".js-euro");

let plnElement = document.querySelector(".js-pln");

let headingElement = document.querySelector(".js-heading");

let resultElement = document.querySelector(".js-result");


headingElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let euro = euroElement.value;
    let pln = plnElement.value;

    let result = euro * pln;
    resultElement.innerText = result.toFixed(2);
    console.log (euro * pln);
});