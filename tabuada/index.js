/* const form = document.querySelector('form') */
/* const h2 = document.querySelector('h2') */
/* const h3 = document.querySelector('h3') */

let number = 0;
let cont = 1;

document.querySelector('form').addEventListener('submit', (event)=>{
    event.preventDefault();

   number = Number(document.querySelector('#inValor').value)
   let result = document.querySelector('.result')
   

    while (cont<10){
        let h2 = document.createElement('h2');

        result.append(h2)

        h2.innerHTML = `${cont}*${number}= ${cont*number}`

        cont++
    }

})