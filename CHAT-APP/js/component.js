const component = {}
component.welcomePage = `
    <h1>Welcome to chat app</h1>
`

component.registerPage = `
<div class="register_container">
<form id="register_form">
    <div class="register_header">MindX chat</div>
    <div class="name_wrapper">
        <div class="input_wrapper">
            <input type="text" placeholder="First name" name="firstName" autocomplete="off">
            <div class="error" id="first_name_error"></div>
        </div>
        <div class="input_wrapper">
            <input type="text" placeholder="Last name" name="lastName" autocomplete="off">
            <div class="error" id="last_name_error"></div>
        </div>
    </div>
    <div class="input_wrapper">
        <input type="email" placeholder="Email" name="email" autocomplete="off">
        <div class="error" id="email_error"></div>
    </div>
    <div class="input_wrapper">
        <input type="text" placeholder="Password" name="password" autocomplete="off">
        <div class="error" id="password_error"></div>
    </div>
    <div class="input_wrapper">
        <input type="text" placeholder="Confirm password" name="confirmPassword" autocomplete="off">
        <div class="error" id="confirm_password_error"></div>
    </div>
    <div class="form_action">
        <div>Already have an account ? <span class="cursor_pointer" id="login_page">Login</span></div>
        <button class="btn cursor_pointer" type="submit">Register</button>
    </div>
</form>
</div>
`

component.loginPage = `
<div class="login_container">
        <form id="login_form">
            <div class="login_header">MindX chat</div>
            <div class="input_wrapper">
                <input type="email" placeholder="Email" name="email" autocomplete="off">
                <div class="error" id="email_error"></div>
            </div>
            <div class="input_wrapper">
                <input type="text" placeholder="Password" name="password" autocomplete="off">
                <div class="error" id="password_error"></div>
            </div>
            <div class="form_action">
                <div>Don't have an account ? <span class="cursor_pointer" id="register_page">Register</span></div>
                <button class="btn cursor_pointer" type="submit">Login</button>
            </div>
        </form>
    </div>
`