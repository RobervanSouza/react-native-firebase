

export const alterarDados = (variavel, valor, dados, setDados) => {
    setDados({
        ...dados, [ variavel ]: valor
    })
}