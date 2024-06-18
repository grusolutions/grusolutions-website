let simulador = document.getElementById('simulador')

function simularPrecios() {

    let metrosCuadrados = document.getElementById('metrosCuadrados').value * 250,
        fumigacion = document.getElementById('fumigacion').value;

    let total = parseInt(metrosCuadrados) + parseInt(fumigacion)

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