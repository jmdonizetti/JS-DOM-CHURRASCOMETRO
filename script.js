const body = document.querySelector('body');

const style = document.createElement('style');
style.textContent = `body {
    background-image: url(./background.jpg);
}`

document.head.appendChild(style);

const app = document.querySelector('app');

const container = document.createElement('div');
container.classList.add('container');

const h1 = document.createElement('h1');
h1.innerText = 'Churrascometro';

const calculator = document.createElement('div');
calculator.classList.add('calculator');

const firstRow = document.createElement('div');
firstRow.classList.add('row');

const firstInputGroup = document.createElement('div');
firstInputGroup.classList.add('input-group');

const label = document.createElement('label');
label.setAttribute('for','people');
label.innerText = 'Pessoas';

const input = document.createElement('input');
input.style='color: rgb(166, 247, 80)';
input.setAttribute('type', 'number');
input.setAttribute('id', 'people');
input.setAttribute('value', '0');
input.classList.add('input-valid');

const buttonGroup = document.createElement('div');
buttonGroup.classList.add('button-group');

const buttonPlus = document.createElement('button');
buttonPlus.classList.add('input-group__button--small');
buttonPlus.innerText = '+';

//adicionando pessoas
buttonPlus.addEventListener('click', () =>{
    input.value = parseInt(input.value)+1;
    calculator.appendChild(secondRow);
    secondInputGroup.append(buttonCalculate);
});

const minusButton = document.createElement('button');
minusButton.classList.add('input-group__button--small');
minusButton.innerText = '-';

//removendo pessoas
minusButton.addEventListener('click', () =>{
    if(input.value > 0){
        input.value = parseInt(input.value) -1;
    }
});

const secondRow = document.createElement('div');
secondRow.classList.add('row');

const secondInputGroup = document.createElement('div');
secondInputGroup.classList.add('input-group');

const buttonCalculate = document.createElement('button');
buttonCalculate.classList.add('input-group__button--big')
buttonCalculate.innerText = 'Calcular';

//
buttonCalculate.addEventListener('click', () =>{
    container.appendChild(result);

});

const result = document.createElement('div');
result.classList.add('result');

const firstUl = document.createElement('ul');
firstUl.classList.add('firstUl');

const carne = document.createElement('li');
carne.innerText = 'CARNE';

const picanha = document.createElement('li');
picanha.innerText = 'PICANHA:';

const fraldinha = document.createElement('li');
fraldinha.innerText = 'FRALDINHA:';

const total = document.createElement('li');
total.innerText = 'TOTAL:';

firstUl.appendChild(carne);
firstUl.appendChild(picanha);
firstUl.appendChild(fraldinha);
firstUl.appendChild(total);

const secondUl = document.createElement('ul');
secondUl.classList.add('secondUl');

const valor = document.createElement('li');
valor.innerText = 'VALOR';

const peso1 = document.createElement('li');
const peso2 = document.createElement('li');
const soma = document.createElement('li');

secondUl.appendChild(valor);
secondUl.appendChild(peso1);
secondUl.appendChild(peso2);
secondUl.appendChild(soma);


container.appendChild(h1);
container.appendChild(calculator);

calculator.appendChild(firstRow);
firstRow.appendChild(firstInputGroup);
firstInputGroup.appendChild(label);

firstInputGroup.appendChild(input);
firstInputGroup.appendChild(buttonGroup);
buttonGroup.appendChild(minusButton);
buttonGroup.appendChild(buttonPlus);


secondRow.appendChild(secondInputGroup);

result.appendChild(firstUl);
result.appendChild(secondUl);

app.appendChild(container);





