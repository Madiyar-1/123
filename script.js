function calculatePrice() {
    const achievements = parseFloat(document.getElementById('achievements').value) || 0;
    const age = parseFloat(document.getElementById('age').value) || 0;
    const contracts = parseFloat(document.getElementById('contracts').value) || 0;
    const popularity = parseFloat(document.getElementById('popularity').value) || 0;
    const market = parseFloat(document.getElementById('market').value) || 0;
    const economic = parseFloat(document.getElementById('economic').value) || 0;
    const coaching = parseFloat(document.getElementById('coaching').value) || 0;

    const price = achievements + (age * 2) + contracts + popularity + market + economic + coaching;

    displayResult(price);
}

function displayResult(price) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p>Предполагаемая стоимость футболиста: $${price.toFixed(2)} млн</p>`;
}



