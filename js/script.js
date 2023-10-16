spesa=[];
let input;
const resultEl = document.querySelector(".alert");
const listaSpesa = document.querySelector(".listaSpesa");


while(input !=='stop'){
    input = prompt("Inserisci prodotti che vuoi acquistare:");
    if(input === 'stop'){
        break;
    }
    spesa.push(input);  
    
}

if (spesa.length > 0) {
    // resultEl.innerHTML = `
    //  ecco la tua lista della spesa:
    //  </br>
    //  ${spesa}.
    // `;

    let listaHtml = "ecoo la tua lista : </br> <ul>";
    for (let i = 0; i < spesa.length; i++) {
        listaHtml += `<li>${spesa[i]}</li>`;
    }
    listaHtml += "</ul>";
    listaSpesa.innerHTML = listaHtml;

    } else {
        resultEl.innerHTML = ` nessun prodotto inserito`;
    }

console.log(spesa);
