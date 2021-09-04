const firebaseConfig;

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);



    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
}

function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
}


const auth = firebase.auth();
var database = firebase.database();

auth.onAuthStateChanged((user) => {
    if (user) {
        database.ref('users/' + user.uid).update({
            email: user.email,
            lastLoggedInAt: new Date()
        });
        setData(user);
        setMessages();
        document.getElementById("user").innerHTML = user.email;
        document.getElementById("login_box").style.display = "none";
        document.getElementById("welcome_box").style.display = "block";
    } else {
        document.getElementById("login_box").style.display = "block";
        document.getElementById("welcome_box").style.display = "none";
    }
});

const setData = (user) => {
    const databaseRef = database.ref('users/' + user.uid);
    databaseRef.on('value', (snapshot) => {
        const data = snapshot.val();
        const lastLoggedInAt = data.lastLoggedInAt;
        const lastLoggedInSpan = document.getElementById("lastLoggedIn");
        lastLoggedInSpan.innerHTML = lastLoggedInAt;

    });
}

const setMessages = () => {
    const databaseRef = database.ref('messages');
    databaseRef.on('child_added', (data) => {
        createElementsForMessage(data.val());
    });
};

const sendMessage = () => {
    const user = auth.currentUser.email;
    const message = document.getElementById("message").value;
    const databaseRef = database.ref('messages');
    const time = Date().toString();
    databaseRef.push({
        user, message, time
    })
};

const createElementsForMessage = (childData) => {
    const messagesDiv = document.getElementById("messages");
    const childDiv = document.createElement('div');
    childDiv.classList.add("single-message-body");
    const messageTextDiv = document.createElement('div');
    messageTextDiv.classList.add("message-text");
    const senderDiv = document.createElement('div');
    senderDiv.classList.add("message-sender");
    messageTextDiv.innerHTML = childData.message;
    const userEmail = auth.currentUser.email;
    if (childData.user === userEmail) {
        senderDiv.innerHTML = "You";
        childDiv.classList.add("sender");
    } else {
        senderDiv.innerHTML = childData.user;
        childDiv.classList.add("reciever");
    }
    childDiv.appendChild(senderDiv);
    childDiv.appendChild(messageTextDiv);
    messagesDiv.appendChild(childDiv);
};

