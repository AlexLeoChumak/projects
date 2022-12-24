var countrysH = {};

function addCountry(countryName, capitalName) {
    var countryName = prompt('Введите название страны');
    var capitalName = prompt('Введите название столицы');
    countrysH[countryName] = capitalName;
}

function getCountryInfo(countryName) {
    var countryName = prompt('Введите название страны');
    if (countryName in countrysH)
        console.log('страна: ' + countryName + ' ' + 'столица: ' + countrysH[countryName]);
    else
        console.log ('нет инфы о стране ' + countryName + '!');    
}

function listCountrys() {
    for (var CN in countrysH)
        console.log( 'страна: ' + CN + ' столица: ' + countrysH[CN]);
}

function deleteCountry(countryName) {
    var countryName = prompt('Введите название страны');
    delete countrysH[countryName];
}