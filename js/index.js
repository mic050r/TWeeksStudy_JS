const inputSelector = document.querySelector('#input_selector');
const outputSelector = document.querySelector('#output_selector');

inputSelector.addEventListener('change', function() {
    let selectedValue = inputSelector.value;
    console.log(selectedValue);
});

outputSelector.addEventListener('change', function() {
    let selectedValue = outputSelector.value;
    console.log(selectedValue);
});