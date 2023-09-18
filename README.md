AULA 01

Aprendemos que o Firebase é um serviço online oferecido pelo Google que contém diversas ferramentas para integrar em nossas aplicações, e uma delas é a autenticação;
Vimos como criar um projeto no console do Firebase, adicionando o nome do projeto;
Registramos nossa aplicação criada como Web, visto que o projeto Web funciona tanto para aplicações React quanto React Native;
Ativamos a ferramenta Authentication no Firebase console para poder usar os recursos de autenticação;
Instalamos o Firebase no projeto base e configuramos nossas chaves de acesso no projeto base para conectar com os serviços do Firebase que criamos no console do Firebase;
E aprendemos a cadastrar usuário com o Firebase Authentication, usando a funcionalidade createUserWithEmailAndPassword;
Configuramos nossas chaves de acesso usando variáveis de ambiente, com o .env, permitindo uma maior segurança para a nossa aplicação.

AULA 02

Aprendemos a usar a função "createUserWithEmailAndPassword" para criar usuários com email e senha e salvar com o Firebase;
Modularizamos o nosso código, mantendo boas práticas de programação com a criação de um arquivo específico para as requisições do Firebase;
Tratamos os possíveis erros que poderiam ser retornados do Firebase usando o AuthErrorCodes e criando um switch case para retornar mensagens personalizadas para os erros;
Criamos um componente usando o SnackBar do react-native-paper para poder exibir as mensagens de erro para o usuário de uma forma sutil e agradável.

AULA 03

A implementar a função signInWithEmailAndPassword do Firebase para fazer a autenticação e verificar se o login, ou seja, email e senha digitados estavam corretos;
Tratamos os erros do login de forma segura para evitar que pessoas maliciosas descubram o email e senha de algum usuário;
Aplicamos o componente do SnackBar para exibir mensagens de erro para o usuário.
Caso esteja com alguma dúvida ou dificuldade, revise o material, assista novamente as aulas ou pratique mais uma vez. E, se ainda estiver com dificuldade em prosseguir, procure o fórum e compartilhe sua dúvida com outras pessoas para que possam se ajudar

AULA 04

Aprendemos sobre a verificação do usuário autenticado com a funcionalidade auth.onAuthStateChanged no useEffect na tela de login;
Fizemos a leitura dos dados do usuário salvos na memória interna;
E aprendemos a realizar a implementação do logout com funções do Firebase.

AULA 05


Aprendemos a fazer a refatoração do armazenamento dos dados do nosso formulário;
Fizemos a refatoração da criação dos inputs do formulário;
E aprendemos como fazer a refatoração das validações de entradas vazias e adição de Regex para validações mais específicas