const view = {}
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case 'registerPage':
            document.getElementById('app').innerHTML = component.registerPage
            const registerForm = document.getElementById('register_form')
            const loginBtn = document.getElementById('login_page')
            loginBtn.addEventListener('click', () => {
                view.setActiveScreen('loginPage')
            })
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const errors = document.getElementsByClassName('error')
                for(let item of errors){
                    item.innerHTML = ''
                }
                const data = {
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value
                }
                controller.register(data)
            })
            break
        case 'loginPage':
            document.getElementById('app').innerHTML = component.loginPage
            const registerBtn = document.getElementById('register_page')
            const loginForm = document.getElementById('login_form')
            registerBtn.addEventListener('click', () => {
                view.setActiveScreen('registerPage')
            })
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const errors = document.getElementsByClassName('error')
                for(let item of errors){
                    item.innerHTML = ''
                }
                const data = {
                    email: loginForm.email.value,
                    password: loginForm.password.value
                }
                controller.login(data)
            })
            break
    }
}