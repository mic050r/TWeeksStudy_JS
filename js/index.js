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
    if (byteType === 'B') {
        return byte + ' B';
    }
    const kb = byte / 1024;
    if (byteType === 'KB') {
        return kb + ' KB';
    }
    const mb = kb / 1024;
    if (byteType === 'MB') {
        return mb + ' MB';
    }
    return 'Invalid type';
}

inputSelector.addEventListener('change', function() {
    getValue(inputSelector);
});

outputSelector.addEventListener('change', function() {
    getValue(outputSelector);
});

