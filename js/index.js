const inputSelector = document.querySelector('#input_selector');
const outputSelector = document.querySelector('#output_selector');
const inputText = document.querySelector('#input_text');
const outputText = document.querySelector('#output_text');
const changeBtn = document.querySelector('#changeBtn');

function getValue(element){
    let value = element.value;
    return value;
}

function convertBitTo(byteType, bits) {
    const byte = bits / 8;
    if (byteType === 'byte') {
        return byte + ' byte';
    }
    const kb = byte / 1024;
    if (byteType === 'kb') {
        return kb + ' kb';
    }
    const mb = kb / 1024;
    if (byteType === 'mb') {
        return mb + ' mb';
    }
    return 'Invalid type';
}

inputSelector.addEventListener('change', function() {
    getValue(inputSelector);
});

outputSelector.addEventListener('change', function() {
    getValue(outputSelector);
});

changeBtn.addEventListener('click', function() {
    var byteType = getValue(outputSelector);
    console.log(byteType);
    var bits = parseInt(inputText.value);
    console.log(convertBitTo(byteType, bits));
} );
