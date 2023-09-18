
export  const entradaTextos = [
    {
        id: '1',
        name: 'email',
        label: 'E-mail',
        pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
        messageError: 'Digite um e-mail válido',
        secureTextEntry: false,
    },
    {
        id: '2',
        name: 'senha',
        label: 'Senha',
        messageError: 'Senha com minimo 06 digitos',
        secureTextEntry: true,
        pattern: '.{6,}',
    },
    {
        id: '3',
        name: 'confirmaSenha',
        label: 'Confirma Senha',
        messageError: 'As senhas não conferem!',
        secureTextEntry: true,
        
    },
]
