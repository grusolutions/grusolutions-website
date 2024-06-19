let simulador = document.getElementById('simulador')

function simularPrecios() {

    let metrosCuadrados = document.getElementById('metrosCuadrados').value * 250,
        pinchosPalomas = document.getElementById('pinchosPalomas').value,
        redesPalomas = document.getElementById('redesPalomas').value,
        gelRep = document.getElementById('gelRep').value,
        dispUltra = document.getElementById('dispUltra').value,
        aveFalsa = document.getElementById('aveFalsa').value,
        malla = document.getElementById('malla').value;

    let total = parseInt(metrosCuadrados) + parseInt(pinchosPalomas) + parseInt(redesPalomas) + parseInt(gelRep) + parseInt(dispUltra) + parseInt(aveFalsa) + parseInt(malla) + 20000

    UI(total)
}


function UI(total) {
    let precioTotal = document.getElementById('resultado')
    let dataPrint = document.createElement('div')

    dataPrint.innerHTML = `
        <div>
            <div>
                <h6>El valor estimado del servicio de: $${total}</h6>
            </div>
        </div>
    `
    precioTotal.appendChild(dataPrint)

    reset();
}

function reset() {
    document.getElementById('simulador').reset()
}