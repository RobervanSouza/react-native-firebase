import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, AuthErrorCodes } from "firebase/auth";

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
            message= 'A senha precisa ter no minimo 6 digitos/caracteres';
            break;
            default:
                message= 'Erro desconhecido'
    }
    return message;
}

export async function CadastrarUsuario(email, senha, confirmaSenha) {
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