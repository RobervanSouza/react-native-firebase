import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, AuthErrorCodes, signInWithEmailAndPassword } from "firebase/auth";

function errosFirebase (error){
    let message = '';
    switch(error.code){
        case AuthErrorCodes.EMAIL_EXISTS:
            message= "Esse email já existe";
            break;
        case AuthErrorCodes.INVALID_EMAIL:
            message= 'Email invalido';
            break;
        case AuthErrorCodes.WEAK_PASSWORD:
            message= 'A senha precisa ter no minimo 6 digitos';
            break;
            default:
                message= 'Erro desconhecido'
    }
    return message;
}

function errosLogin (error){
    let message = '';
    switch(error.code){
        case AuthErrorCodes.INVALID_EMAIL:
            message= 'Email incorreto';
            break;       
            default:
                message= 'Email ou senha invalido'
    }
    return message;
}

export async function CadastrarUsuario(email, senha) {
    const response = await createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            console.log(userCredential)
            return "sucesso"
        })
        .catch((error) => {
            console.log(error)
            return errosFirebase(error)
        });
        
        return response;
}

export async function logar(email, senha) {
    const response = await signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            console.log(userCredential)
            return "sucesso"
        })
        .catch((error) => {
            console.log(error)
          return 'erro'
        });
        
        return response;
}