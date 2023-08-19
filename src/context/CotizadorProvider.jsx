import { createContext } from "react"
import { useState } from "react"
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from "../helpers"


const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {
    
    const [ datos, setDatos ] = useState({
        marca:'',
        year:'',
        plan:''
    })

    // States
    const [ error, setError ] = useState('')
    const [ resultado, setResultado ] = useState(0)
    const [ cargando, setCargando ] = useState(false)

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const cotizarSeguro = () => {
        // Una base
        let resultado = 2000

        // Obtener diferencia de años
        const diferencia = obtenerDiferenciaYear(datos.year)

        // Hay que restar 3% por cada año
        resultado -= (diferencia * 3 * resultado / 100)

        // Americano 15%
        // Europeo 30%
        // Asiatico 10%
        resultado *= calcularMarca(datos.marca)

        // Básico 20%
        // Completo 50%
        resultado *= calcularPlan(datos.plan)

        // Formatear dinero
        resultado = formatearDinero(resultado)
        
        setCargando(true)
        setTimeout( () => {
            setResultado(resultado)
            setCargando(false)
        }, 1000)

    }

    return (
        <CotizadorContext.Provider
            value={{
                handleChangeDatos,
                datos,
                error,
                setError,
                cotizarSeguro,
                resultado,
                cargando
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}
export default CotizadorContext 