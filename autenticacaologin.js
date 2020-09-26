
// configuracao inicial do Firebase
        var firebaseConfig = {
          apiKey: "AIzaSyAa0cSK5qbGC7f4dyt5NMg4DyiX4Nrtdxc",
          authDomain: "fir-login-8257e.firebaseapp.com",
          databaseURL: "https://fir-login-8257e.firebaseio.com",
          projectId: "fir-login-8257e",
          storageBucket: "fir-login-8257e.appspot.com",
          messagingSenderId: "285917399622",
          appId: "1:285917399622:web:1b9bd7ce4867940661d847"
        };
// Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function cadastrar(){

    let auth = null;
    firebase.auth().createUserWithEmailAndPassword(document.getElementById('email').value, document.getElementById('senha').value)
    .then(function(user){
        alert('cadastrado com sucesso');
    auth = user;

// Limpar os campos
    document.getElementById('email').value='' 
    document.getElementById('senha').value=''
    window.open('https://console.firebase.google.com/project/fir-login-8257e/authentication/users');
    }).catch(function(error){
        alert('falha ao cadastrar');
    });
}

function login(){

    let auth = null;
    firebase.auth().signInWithEmailAndPassword(document.getElementById('email').value, document.getElementById('senha').value)
    .then(function(user){
        alert('logado com sucesso');
    auth = user;

// Limpar os campos
    document.getElementById('email').value='' 
    document.getElementById('senha').value=''
    window.open('https://console.firebase.google.com/project/fir-login-8257e/authentication/users');
    }).catch(function(error){
        alert('falha ao logar');
    });
}

    