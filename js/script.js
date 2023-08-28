// Selectioning elements

const multiplicationForm = document.querySelector('#multiplication-form')
const numberInput = document.querySelector('#number')
const multiplicatorInput = document.querySelector('#multiplicator')

const multiplicationOperations = document.querySelector('#multiplicator-operations')
const resultsOperations = document.querySelector('#results-operations')
const tagP = document.querySelector('#multiplicator-operations p')
const tagSpan = document.querySelector('#multiplicator-title span')
// Functions
const createTable = (number, multiplicator) => {

    tagP.innerHTML = '';
    resultsOperations.innerHTML = '';
    tagSpan.innerHTML = number;

    for (let i = 1; i <= multiplicator; i++) {
       
        const result = number * i

        const templateCenter = `
        <div class="results row dp-flex">
            <div class="operation">${number} x ${i} =</div>
            <div class="result">${result}</div>
        </div>
        `;
        
        const parser = new DOMParser()

        const htmlTemplate = parser.parseFromString(templateCenter, "text/html");

        const className = htmlTemplate.querySelector(".results.row.dp-flex");

        resultsOperations.appendChild(className);
        
    }
    
    
}   
// Events

multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numberValue = +numberInput.value;
    const multiplicatorValue = +multiplicatorInput.value;

    if (!numberValue || !multiplicatorValue) return alert("Preencha todos os campos");
    

    createTable(numberValue, multiplicatorValue);
})