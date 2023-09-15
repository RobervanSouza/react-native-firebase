import React, { useState } from 'react';
import { View } from 'react-native';
import Botao from '../../componentes/Botao';
import { EntradaTexto } from '../../componentes/EntradaTexto';
import estilos from './estilos';
import { logar } from '../../servicos/requisicao';
import { Alerta} from '../../componentes/Alerta/index';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [ statusErro, setEstatusErro ] = useState('');
  const [ mensagemErro, setMensagemErro ] = useState('');
  async function login(){
    if (email == '') {
      setMensagemErro('Digite com seu email')
      setEstatusErro('email')
    } else if (senha == '') {
      setMensagemErro('Digite com sua senha')
      setEstatusErro('senha')
    }
    else if (senha.length < 6) {
      setMensagemErro('A senha precisa ter no mínimo 6 dígitos/caracteres')
      setEstatusErro('senha')
    } else {
      const response = await logar(email, senha)
      if ( typeof response === 'string') {
        setEstatusErro('firebase')
        setMensagemErro(response)
      }
      else {
        navigation.navigate('Principal')
      }
    }

  
  }
  
  return (
    <View style={estilos.container}>
      <EntradaTexto 
        label="E-mail"
        value={email}
        error={statusErro == 'email'}
        messageError={mensagemErro}
        onChangeText={texto => setEmail(texto)}
      />
      <EntradaTexto
        label="Senha"
        value={senha}
        error={statusErro == 'senha'}
        messageError={mensagemErro}
        onChangeText={texto => setSenha(texto)}
        secureTextEntry
      />
      
      
      <Alerta
        message={mensagemErro}
        error={statusErro == 'firebase'}
        setError={setEstatusErro}
        />
    

      <Botao onPress={() => login()}>LOGAR</Botao>
      <Botao 
        onPress={() => { navigation.navigate('Cadastro') }}
        >
        CADASTRAR USUÁRIO
      </Botao>
    </View>
  );
}
