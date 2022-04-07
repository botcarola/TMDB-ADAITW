const useSplice = ( elementos, valor) => {

    const elementosRecortados = elementos.slice(0,5)   
    const verificarRecortarArray = () => valor === true ? elementosRecortados : elementos
    const arrayVerificado = verificarRecortarArray()

    return arrayVerificado
}

export default useSplice
