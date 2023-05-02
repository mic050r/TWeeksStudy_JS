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
    if(byteType == 'bit'){
        return bits;
    }else if (byteType === 'byte') {
        return bits / 8 + ' byte';
    } else if (byteType === 'kb') {
        return bits / ( 1024 * 8 )+ ' kb';
    } else if (byteType === 'mb') {
        return bits / (1024 * 1024 * 8) + ' mb';
    } else {
        return 'Invalid type';
    }
}

function convertByteTo(byteType, bytes) {
    if(byteType == 'bit'){
        return bytes * 8 + ' bit';
    }else if (byteType === 'byte') {
        return bytes + ' byte';
    } else if (byteType === 'kb') {
        return bytes / 1024 + ' KB';
    } else if (byteType === 'kb') {
        return bytes / (1024 * 1024) + ' mb';
    } else {
        return 'Invalid type';
    }
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
