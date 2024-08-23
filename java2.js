// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Valores de usuário e senha esperados
    const validUsername = 'usuario';
    const validPassword = 'senha123';

    // Obtém os valores inseridos pelo usuário
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Valida o login
    if (username === validUsername && password === validPassword) {
        // Redireciona para a página principal ou área restrita
        window.location.href = 'welcome.html'; // Substitua com o caminho da página protegida
    } else {
        // Exibe mensagem de erro
        document.getElementById('error-message').textContent = 'Usuário ou senha incorretos.';
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores inseridos
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Verifica se o usuário já existe
    if (localStorage.getItem(newUsername)) {
        document.getElementById('register-message').textContent = 'Usuário já existe. Tente outro nome.';
        return;
    }

    // Salva o novo usuário e senha
    localStorage.setItem(newUsername, newPassword);

    // Redireciona para a página de login
    window.location.href = 'login.html';
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores inseridos
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Verifica se o usuário já existe
    if (localStorage.getItem(newUsername)) {
        document.getElementById('register-message').textContent = 'Usuário já existe. Tente outro nome.';
        return;
    }

    // Salva o novo usuário e senha
    localStorage.setItem(newUsername, newPassword);

    // Redireciona para a página de login
    window.location.href = 'login.html';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores inseridos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica se o usuário existe e a senha está correta
    const storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
        // Redireciona para a página protegida
        window.location.href = 'index.html';
    } else {
        // Exibe mensagem de erro
        document.getElementById('login-message').textContent = 'Usuário ou senha incorretos.';
    }
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    
    // Obtém os valores dos campos
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Valida se a senha e a confirmação da senha são iguais
    if (password === confirmPassword) {
        // Redireciona para outro site
        window.location.href = 'index.html'; // Substitua com o URL desejado
    } else {
        // Exibe uma mensagem de erro se as senhas não coincidirem
        alert('As senhas não coincidem. Por favor, tente novamente.');
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Valores de usuário e senha esperados
    const validUsername = 'usuario';
    const validPassword = 'senha123';

    // Obtém os valores inseridos pelo usuário
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Valida o login
    if (username === validUsername && password === validPassword) {
        // Redireciona para a página de descoberta
        window.location.href = 'discovery.html'; // Página onde o usuário descobre o site real
    } else {
        // Exibe mensagem de erro
        document.getElementById('error-message').textContent = 'Usuário ou senha incorretos.';
    }
});