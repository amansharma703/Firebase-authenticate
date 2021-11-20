document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();
});

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        location.replace('welcome.html');
    }
});

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            document.getElementById('error').innerHTML = 'login Successfully';
            location.replace('welcome.html');
        })
        .catch((error) => {
            document.getElementById('error').innerHTML = 'Invalid Credentials';
        });
    console.log('login click');
    console.log(email);
    console.log(password);
}
function signUp() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            document.getElementById('error').innerHTML = 'Signup Successfully';
        })
        .catch((error) => {
            document.getElementById('error').innerHTML = error.message;
        });
}

function forgotPass() {
    const email = document.getElementById('email').value;
    firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(() => {
            alert('Password reset link sent to your email id');
        })
        .catch((error) => {
            document.getElementById('error').innerHTML = error.message;
        });
}
