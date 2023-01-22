{


    const headingElement = document.querySelector(".js-heading");


    
    const onFormSubmit = (event) => {
        event.preventDefault();


        const plnElement = document.querySelector(".js-pln");


        const resultElement = document.querySelector(".js-result");

        const euroElement = document.querySelector(".js-euro");



        const result = euro * pln;
        resultElement.innerText = result.toFixed(2);

    };
const CalculateResult =(euro,pln) =>{
        const euro = euroElement.value;
        const pln = plnElement.value;}
    const init = () => {

        headingElement.addEventListener("submit", onFormSubmit);

    };

    init();

}
