const view = {}
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case 'registerPage':
            document.getElementById('app').innerHTML = component.registerPage
            const registerForm = document.getElementById('register_form')
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const data = {
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value
                }
                controller.register(data)
            })
            document.getElementById('redirect_to_login').addEventListener('click', () => {
                view.setActiveScreen('loginPage')
            })
            break
        case 'loginPage':
            document.getElementById('app').innerHTML = component.loginPage
            const loginForm = document.getElementById('login_form')
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const data = {
                    email: loginForm.email.value,
                    password: loginForm.password.value
                }
                controller.login(data)
            })
            document.getElementById('redirect_to_register').addEventListener('click', () => {
                view.setActiveScreen('registerPage')
            })
            break
        case 'chatPage':
            document.getElementById('app').innerHTML = component.chatPage
            const sendMessageForm = document.getElementById('send_message_form')
            sendMessageForm.addEventListener('submit', (e) => {
                e.preventDefault()
                if(sendMessageForm.message.value !== ''){
                    const message = {
                        content: sendMessageForm.message.value,
                        owner: model.currentUser.email
                    }
                    const messageFromBot = {
                        content: sendMessageForm.message.value,
                        owner: 'Bot'
                    }
                    view.addMessage(message)
                    view.addMessage(messageFromBot)
                    sendMessageForm.message.value = ''
                }
            })
            break
    }
}

view.setErrorMessage = (elementId, content) => {
    document.getElementById(elementId).innerText = content
}

view.addMessage = (message) => {
    const messageWrapper = document.createElement('div')
    messageWrapper.classList.add('message')
    if (message.owner === model.currentUser.email) {
        messageWrapper.classList.add('mine')
        messageWrapper.innerHTML = `<div class="content">${message.content}</div>`
    } else {
        messageWrapper.classList.add('their')
        messageWrapper.innerHTML = `
        <div class="owner">${message.owner}</div>
        <div class="content">${message.content}</div>
        `
    }
    document.querySelector('.list_messages').appendChild(messageWrapper)
}