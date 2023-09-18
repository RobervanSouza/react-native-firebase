

export const alterarDados = (variavel, valor, dados, setDados) => {
    setDados({
        ...dados, [ variavel ]: valor
    })
}

export  function entradaVazia(dados, setDados) {// modificado dados da entradadetexto, criando uma variavel mostrar mensagem erro
    for (const [ variavel, valor ] of Object.entries(dados)) {
        if (valor == '') {
            setDados({
                ...dados,
                [ variavel ]: null
            })
            return true
        }
    }
    return false;
}