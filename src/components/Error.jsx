import useCotizador from "../hooks/useCotizador"

export default function Error() {
    const { error } = useCotizador()
  
    return (
        <div 
            className="w-full border border-red-400 bg-red-100 text-red-700 uppercase font-bold text-center py-3"
        >
            <p>{error}</p>
        
        </div>
    )
}
