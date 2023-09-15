import React, { useState, useEffect } from 'react';
import { Alert, View } from 'react-native';
import Botao from '../../componentes/Botao';
import { EntradaTexto } from '../../componentes/EntradaTexto';
import estilos from './estilos';
import { CadastrarUsuario } from '../../servicos/requisicao';
import { Alerta } from '../../componentes/Alerta';

export default function Cadastro({ navigation }) {  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [statusErro, setEstatusErro] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');
  

async function realizarCadastro() {
  if (email == ''){
    setMensagemErro('Digite com seu email')
    setEstatusErro('email')
  } else if (senha == '') {
    setMensagemErro('Digite com sua senha')
    setEstatusErro('senha')
  } else if (confirmaSenha == '') {
    setMensagemErro('Confirme sua senha')
    setEstatusErro('confirmaSenha')
  } else if (confirmaSenha != senha ) {
    setMensagemErro('As senhas estão diferentes')
    setEstatusErro('confirmaSenha')
  }else {
   const response= await CadastrarUsuario(email, senha) // limpar input

   if(response == 'sucesso'){
     setMensagemErro('Usuario casdastrado com sucesso!')
     
     setEmail('')
     setSenha('')
     setConfirmaSenha('')
     
   } else {
   
     setMensagemErro(response)
    }
    setEstatusErro('firebase')
   
    
  }


}

  return (
    <View style={estilos.container}>
      <EntradaTexto 
        label="E-mail"
        value={email}
        onChangeText={texto => setEmail(texto)}
        error={statusErro == 'email'}
        messageError={mensagemErro}

      />
      <EntradaTexto
        label="Senha"
        value={senha}
        onChangeText={texto => setSenha(texto)}
        error={statusErro == 'senha'}
        messageError={mensagemErro}
        secureTextEntry
      />

      <EntradaTexto
        label="Confirmar Senha"
        value={confirmaSenha}
        onChangeText={texto => setConfirmaSenha(texto)}
        error={statusErro == 'confirmaSenha'}
        messageError={mensagemErro}
        secureTextEntry
      />
      <Alerta
      message={mensagemErro}
      error={statusErro == 'firebase'}
      setError={setEstatusErro}
      />
      <Botao onPress={() => realizarCadastro()}>CADASTRAR</Botao>
    </View>
  );
}
