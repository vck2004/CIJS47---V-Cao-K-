const model = {}

model.register = async (data) => {
    try {
        const response = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        firebase.auth().currentUser.updateProfile({
            displayName: `${data.firstName} ${data.lastName}`
        })
        firebase.auth().currentUser.sendEmailVerification()
    } catch (err) {
        alert(err.message)
        console.log(err)
    }
}

model.login = (data) => {
    try {
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        // if(response && response.user.emailVerified){
        //     model.currentUser = {
        //         email: response.user.email,
        //         displayName: response.user.displayName
        //     }
        //     view.setActiveScreen('chatPage')
        // } else {
        //     alert('Please verify your email')
        // }
    } catch (err) {
        alert(err.message)
        console.log(err)
    }
}