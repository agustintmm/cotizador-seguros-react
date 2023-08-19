export function obtenerDiferenciaYear(year){
    return new Date().getFullYear() - year;
}

export function calcularMarca(marca){
    let incremento

    switch(marca) {
        case "1":
            // Europeo
            incremento = 1.3
            break;
        case "2":
            // Americano
            incremento = 1.15
            break;
        case "3":
            // Asiatico
            incremento = 1.1
            break;
    }

    return incremento
}

export function calcularPlan(plan){
    return (plan == "1") ? 1.2 : 1.5
}

export function formatearDinero(cantidad){
    return cantidad.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}