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
    if(byteType == "bit"){
        return bits;
    }
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

function convertByteTo(byteType, bytes) {
    if(byteType == "byte"){
        return bytes;
    }
    const bit = bytes * 8;
    if (byteType === 'bit') {
        return bit + ' bit';
    }
    const kb = bytes / 1024;
    if (byteType === 'kb') {
        return kb + ' kb';
    }
    const mb = kb / 1024;
    if (byteType === 'kb') {
        return mb + ' kb';
    }
    return 'Invalid type';
}

changeBtn.addEventListener('click', function() {

    var byteType = getValue(outputSelector);
    var values = parseInt(inputText.value);
    var returnValue = 0;

    if(getValue(inputSelector) == "bit"){
        returnValue = convertBitTo(byteType, values);
    }else if(getValue(inputSelector) == "byte"){
        returnValue = convertByteTo(byteType, values);
    }

    outputText.value = returnValue
    
} );
