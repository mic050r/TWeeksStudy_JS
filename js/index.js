const inputSelector = document.querySelector('#input_selector');
const outputSelector = document.querySelector('#output_selector');
const changeBtn = document.querySelector('#changeBtn');

function getValue(element){
    let value = element.value;
    return value;
}

inputSelector.addEventListener('change', function() {
    getValue(inputSelector);
});

outputSelector.addEventListener('change', function() {
    getValue(outputSelector);
});


