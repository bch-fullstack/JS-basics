document.getElementById('submit').addEventListener('submit', () => {
    const money = parseInt(document.getElementById('money'))
    const price = parseInt(document.getElementById('price'))
    document.getElementById('answer').innerText = money/price
})