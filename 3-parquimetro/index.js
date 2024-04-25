const form = document.querySelector('form')
const h2 = document.querySelector('h2')
const h3 = document.querySelector('h3')
let troco;

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let valor = Number(form.inValor.value)

    if (valor >= 1 && valor < 1.75) {
        h2.innerText = `Tempo: 30 minutos`;
        troco = (valor - 1).toFixed(2)
        h3.innerText = `Troco: ${troco}`;
    } else if (valor >= 1.75 && valor < 3) {
        h2.innerText = `Tempo: 60 minutos`;
        troco = (valor - 1.75).toFixed(2)
        h3.innerText = `Troco: ${troco}`
    } else {
        h2.innerText = `Tempo: 120 minutos`;
        troco = (valor - 3.0).toFixed(2)
        h3.innerText = `Troco: ${troco}`

    }

})