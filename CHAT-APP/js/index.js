window.onload = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyBAtPEiMM-U9m3D15mF9RAjUCwhi0uX1Nw",
    authDomain: "chat-app-792ec.firebaseapp.com",
    databaseURL: "https://chat-app-792ec.firebaseio.com",
    projectId: "chat-app-792ec",
    storageBucket: "chat-app-792ec.appspot.com",
    messagingSenderId: "765171004040",
    appId: "1:765171004040:web:73aca1871f369a3a5da53d",
    measurementId: "G-36E54Y71Y1"
  };
  firebase.initializeApp(firebaseConfig);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      model.currentUser = {
        email: user.email,
        displayName: user.displayName
      }
      if (user.emailVerified) {
        view.setActiveScreen('chatPage')
      } else {
        firebase.auth().signOut()
        alert('Please verified your email')
      }
    } else {
      view.setActiveScreen('loginPage')
    }
  })
}