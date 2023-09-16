import React, { useState, useEffect } from 'react';
import { Alert, View } from 'react-native';
import Botao from '../../componentes/Botao';
import { EntradaTexto } from '../../componentes/EntradaTexto';
import estilos from './estilos';
import { CadastrarUsuario } from '../../servicos/requisicao';
import { Alerta } from '../../componentes/Alerta';
import {alterarDados} from '../../utils/alteraDados';

export default function Cadastro({ navigation }) {  
 
  const [statusErro, setEstatusErro] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');
  const [ dados, setDados ] = useState({
    email: '',
    senha: '',
    confirmaSenha:'',
  })
  

async function realizarCadastro() {
  if (dados.email == ''){
    setMensagemErro('Digite com seu email')
    setEstatusErro('email')
  } else if (dados.senha == '') {
    setMensagemErro('Digite com sua senha')
    setEstatusErro('senha')
  } else if (dados.confirmaSenha == '') {
    setMensagemErro('Confirme sua senha')
    setEstatusErro('confirmaSenha')
  } else if (dados.confirmaSenha != dados.senha ) {
    setMensagemErro('As senhas estão diferentes')
    setEstatusErro('confirmaSenha')
  }else {
   const response= await CadastrarUsuario(dados.email, dados.senha) // limpar input

   if(response == 'sucesso'){
     setMensagemErro('Usuario casdastrado com sucesso!')

     
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
        value={dados.email}
        onChangeText={texto => alterarDados('email',texto, dados, setDados)}
        error={statusErro == 'email'}
        messageError={mensagemErro}

      />
      <EntradaTexto
        label="Senha"
        value={dados.senha}
        onChangeText={texto => alterarDados("senha",texto, dados, setDados)}
        error={statusErro == 'senha'}
        messageError={mensagemErro}
        secureTextEntry
      />

      <EntradaTexto
        label="Confirmar Senha"
        value={dados.confirmaSenha}
        onChangeText={texto => alterarDados("confirmaSenha",texto, dados, setDados)}
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
