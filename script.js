
const unitLenghtList = ['millimeter', 'centimeter', 'meter', 'kilometer', 'inch', 'foot', 'yard', 'mile'];
const unitTemperatureList = ['celcius', 'fahrenheit', 'kelvin'];
const unitWeightList = ['milligram', 'gram', 'kilogram', 'ounce', 'pound'];

const unitLenghtListValues = {
    millimeter: 0.001,
    centimeter: 0.01,
    meter: 1,
    kilometer: 1000,
    inch: 0.0254,
    foot: 0.3048,
    yard: 0.9144,
    mile: 1609.34
}

const unitWeightListValues = {
    milligram: 0.000001,
    gram: 0.001,
    kilogram: 1,
    ounce: 0.0283495,
    pound: 0.453592
}

function calculateUnit() {
    const inputElementFrom = document.getElementById('input-element-from');
    const unitFrom = document.getElementById('unit-from');
    const inputElementTo = document.getElementById('input-element-to');
    const unitTo = document.getElementById('unit-to');
    const activeType = document.querySelector('.selected-unit');
    let result = Number(inputElementFrom.value);

    if (activeType.id === 'lenght') {
        Object.keys(unitLenghtListValues).forEach((key) => {
            if (unitFrom.value === key) {
                result *= unitLenghtListValues[key] / unitLenghtListValues[unitTo.value];
            }
        })
    }
    else if (activeType.id === 'temperature') {
        if (unitFrom.value === 'celcius') {
            result = result;
        }
        else if (unitFrom.value === 'fahrenheit') {
            result = (result - 32) * 5/9;
        }
        else if (unitFrom.value === 'kelvin') {
            result -= 273.15;
        }
        
        if (unitTo.value === 'celcius') {
            result = result;
        }
        else if (unitTo.value === 'fahrenheit') {
            result = result * 9/5 + 32;
        }
        else if (unitTo.value === 'kelvin') {
            result += 273.15;
        }
    }
    else if (activeType.id === 'weight') {
        Object.keys(unitWeightListValues).forEach((key) => {
        if (unitFrom.value === key) {
            result *= unitWeightListValues[key] / unitWeightListValues[unitTo.value];
        }
        })
    }

    inputElementFrom.value = inputElementFrom.value;
    inputElementTo.value = result;
}

function changeUnitType(unitType) {
    const activeUnitType = document.querySelector('.selected-unit');

    if (activeUnitType) {
    activeUnitType.classList.remove('selected-unit');
    }
    document.getElementById(unitType).classList.add('selected-unit')
    loadOptions(unitType)
}

function loadOptions(unitType) {
    let optionsHtml;

    if (unitType === 'lenght') {
    unitLenghtList.forEach((unit) => {
        optionsHtml += `<option value="${unit}">${unit}</option>`
    });
    }
    else if (unitType === 'temperature') {
    unitTemperatureList.forEach((unit) => {
        optionsHtml += `<option value="${unit}">${unit}</option>`
    });
    }
    else if (unitType === 'weight') {
    unitWeightList.forEach((unit) => {
        optionsHtml += `<option value="${unit}">${unit}</option>`
    });
    }
    document.querySelectorAll('.unit-selector').forEach((element) => {
    element.innerHTML = optionsHtml;
    })
}