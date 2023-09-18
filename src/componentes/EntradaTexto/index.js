import { useState } from 'react';
import { TextInput, HelperText } from 'react-native-paper';
import estilos from './estilos';

export function EntradaTexto({ 
  label, 
  value, 
  onChangeText, 
  secureTextEntry, 
  error, 
  pattern,
  messageError }) {
  const [secureMode, setSecureMode] = useState(secureTextEntry);


  function regexValidation() {
    if (!value) return false;
    if (pattern) {
      const condition = new RegExp(pattern);
      return !condition.test(value);
    }

    return false;
  }

  const mostraMensagemErro = value == null || error || regexValidation() // para mostrar a mensagem error
  return (
    <>
      <TextInput
        label={label}
        value={value}
        error={mostraMensagemErro}// para o input ficar vermelho
        secureTextEntry={secureMode}
        onChangeText={onChangeText}
        style={estilos.input}
        mode="outlined"
        activeOutlineColor='#1E8187'
        right={
          secureTextEntry ?
          <TextInput.Icon
            name={secureMode ? 'eye-off' : 'eye'}
            onPress={() => setSecureMode(!secureMode)}
          /> : null
        }
      />
      {mostraMensagemErro && <HelperText type="error" visible={mostraMensagemErro}>
        {messageError}
      </HelperText>}
    </>
  );
}
