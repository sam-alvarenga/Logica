const form = document.querySelector("form")
const h2 = document.querySelector("h2")
const h3 = document.querySelector("h3")


form.addEventListener('submit', (event) => {
    event.preventDefault()

    let nome = form.inNome.value
    let nota1 = Number(form.inNota1.value)
    let nota2 = Number(form.inNota2.value)

    let media = ((nota1 + nota2) / 2).toFixed(2)

    h2.innerText = `Média das notas ${media}`

    if (media >= 7.00) {
        h3.innerText = `Parabéns, ${nome}. Você está aprovado(a)!`
        h3.style.color = "green"

    } else if (media <= 4.00) {
        h3.innerText = `você ${nome} foi reprovado ${media}`
        h3.style.color = "red"
    } else {
        h3.innerText = `você ${nome} ficou de recuperação ${media}`
        h3.style.color = "yellow"
    }


})




