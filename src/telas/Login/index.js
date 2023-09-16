import React, { useState, useEffect } from 'react';
import { View, Image} from 'react-native';
import Botao from '../../componentes/Botao';
import { EntradaTexto } from '../../componentes/EntradaTexto';
import estilos from './estilos';
import { logar } from '../../servicos/requisicao';
import { Alerta} from '../../componentes/Alerta/index';
import { auth } from '../../config/firebase';
import animacao from'../../../.images/gif-loading.gif';


export default function Login({ navigation }) {

  const [dados, setDados] = useState( {
    email: '',
    senha: '',
  })
  const alterarDados = (variavel, valor) => {
    setDados({
      ...dados , [variavel]: valor
    })
  }
  const [ statusErro, setEstatusErro ] = useState('');
  const [ mensagemErro, setMensagemErro ] = useState('');
  const [ carregando, setCarregando ] = useState(true);


  useEffect(() => {
    const usuarioLogar = auth.onAuthStateChanged( usuario => {
      if (usuario) {
        navigation.replace('Principal')
      }
      setCarregando(false)
    })

    return () => usuarioLogar();
  }, []);

  if (carregando) {
    return (
      <View style={estilos.containerAnimacao} >
        <Image 
        source={animacao}
        style={estilos.imagemAnimacao}
        />
      </View>
    )
  }

  async function login(){
    if (dados.email == '') {
      setMensagemErro('Digite com seu email')
      setEstatusErro('email')
    } else if (dados.senha == '') {
      setMensagemErro('Digite com sua senha')
      setEstatusErro('senha')
    }
    else if (dados.senha.length < 6) {
      setMensagemErro('A senha precisa ter no mínimo 6 dígitos/caracteres')
      setEstatusErro('senha')
    } else {
      const response = await logar(dados.email, dados.senha)
      if (response === 'erro') {
        setEstatusErro('firebase')
        setMensagemErro('email ou  senha invalida')
      }
      else {
        navigation.replace('Principal')
      }
    }

  
  }
  
  return (
    <View style={estilos.container}>
      <EntradaTexto 
        label="E-mail"
        value={dados.email}
        error={statusErro == 'email'}
        messageError={mensagemErro}
        onChangeText={texto => alterarDados('email', texto)}
        
      />
      <EntradaTexto
        label="Senha"
        value={dados.senha}
        error={statusErro == 'senha'}
        messageError={mensagemErro}
        onChangeText={texto => alterarDados( 'senha',texto)}
        secureTextEntry
      />
      
      
      <Alerta
        message={mensagemErro}
        error={statusErro == 'firebase'}
        setError={setEstatusErro}
        />
    

      <Botao onPress={() => login()}>LOGAR </Botao>
      <Botao 
        onPress={() => { navigation.navigate('Cadastro') }}
        >
        CADASTRAR USUÁRIO
      </Botao>
    </View>
  );
}
