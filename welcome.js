firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        document.getElementById('user').innerHTML = 'hello ' + user.email;
    } else {
        location.replace('index.html');
    }
});

function logout() {
    firebase.auth().signOut();
    location.replace('index.html');
}
