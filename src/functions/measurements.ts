const calculateIMC = (height: number, weight: number): number => {
    const parsedHeight = height / 100
    const imc = (weight / (parsedHeight * parsedHeight)).toFixed(1)
    return Number(imc)
}

const imcValue = (value: number) => {
    if(value < 18.5) return {label: 'Abaixo do Peso', color: 'yellow'}
    else if(value >= 18.5 && value < 25) return {label: 'Peso Normal', color: 'green'}
    else if(value >= 25 && value < 30) return {label: 'Acima do Peso', color: 'yellow'}
    else if(value >= 30 && value < 40) return {label: 'Obesidade', color: 'orange'}
    else if(value >= 40) return {label: 'Obesidade Grave', color: 'red'}
    else return {label: '???', color: 'gray'}
}

export {
    calculateIMC,
    imcValue
}