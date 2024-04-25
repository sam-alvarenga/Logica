const form = document.querySelector('form')
const h2 = document.querySelector('h2')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    let condutor = Number(form.inVelocidadeCondutor.value)
    let permitida = Number(form.inVelocidadePermitida.value)

    const VelocidadePermitida20Porcent = permitida * 0.2


    if (condutor <= permitida) {
        h2.innerText = `Sem multas`
    } else if (condutor <= (permitida + VelocidadePermitida20Porcent)) {
        h2.innerText = `Multa Leve`
    } else {
        h2.innerText = `Multa Grave`

    }


})