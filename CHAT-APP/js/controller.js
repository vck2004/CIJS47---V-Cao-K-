const controller = {}
controller.register = (data) => {
    if (data.firstName === '') {
        document.getElementById('first_name_error').innerText = 'Please input firstname'
    }
    if (data.lastName === '') {
        document.getElementById('last_name_error').innerText = 'Please input lastname'
    }
    if (data.email === '') {
        document.getElementById('email_error').innerText = 'Please input email'
    }
    if (data.password === '') {
        document.getElementById('password_error').innerText = 'Please input password'
    }
    if (data.confirmPassword === '') {
        document.getElementById('confirm_password_error').innerText = 'Please input password'
    }
}

controller.login = (data) => {
    if (data.email === '') {
        document.getElementById('email_error').innerText = 'Please input email'
    }
    if (data.password === '') {
        document.getElementById('password_error').innerText = 'Please input password'
    }
}