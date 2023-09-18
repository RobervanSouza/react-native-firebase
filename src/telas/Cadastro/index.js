import React, { useState, useEffect } from 'react';
import { Alert, View } from 'react-native';
import Botao from '../../componentes/Botao';
import { EntradaTexto } from '../../componentes/EntradaTexto';
import estilos from './estilos';
import { CadastrarUsuario } from '../../servicos/requisicao';
import { Alerta } from '../../componentes/Alerta';
import {alterarDados, entradaVazia} from '../../utils/alteraDados';
import { entradaTextos } from './cadastroFormulario';

export default function Cadastro({ navigation }) {  
 
  const [statusErro, setEstatusErro] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');
  const [ dados, setDados ] = useState({
    email: '',
    senha: '',
    confirmaSenha:'',
  })
  

async function realizarCadastro() {
  if(entradaVazia(dados, setDados)) return 
  if(dados.senha != dados.confirmaSenha){
    setEstatusErro(true)
    setMensagemErro('As senhas estão diferentes!')
    return
  }
const response = await CadastrarUsuario(dados.email, dados.senha)
  if(response != 'sucesso' ){
    setEstatusErro(true)
    setMensagemErro(response)
  }
}

function verificaSenhas(params) {
  return dados.senha !== dados.confirmaSenha;
}
  return (
    <View style={estilos.container}>
      {
        entradaTextos.map((entrada) => {
          return (
            <EntradaTexto
              key={entrada.id}
              // label={entrada.label}
              // messageError={entrada.messageError}
              // secureTextEntry={entrada.secureTextEntry}
              {...entrada} // substidui esses codigo acima
              value={dados[ entrada.name ]}
              onChangeText={valor => alterarDados(entrada.name, valor, dados, setDados)}
              error={entrada.name != 'confirmaSenha' ? false: verificaSenhas() && dados.confirmaSenha != "" }
            />
          )
        })
      }
      <Alerta
      message={mensagemErro}
      error={statusErro}
      setError={setEstatusErro}
      />
      <Botao onPress={() => realizarCadastro()}>CADASTRAR</Botao>
    </View>
  );
}
