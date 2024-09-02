const form = document.getElementById("form");

// Seleciona os campos.
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmaSenha = document.getElementById("confirma-senha");

// Seleciona os erros.
const nomeError = nome.nextElementSibling;
const emailError = email.nextElementSibling;
const senhaError = senha.nextElementSibling;
const confirmaSenhaError = confirmaSenha.nextElementSibling;

form.addEventListener("submit", function (e) {
   let isValid = true;
   
    // Validação do nome
    if (!validarNome(nome.value)) {
        nomeError.style.display = "block";
        nomeError.style.color = "red";
        nome.classList.add("invalid");
        isValid = false;
    } else {
        nomeError.style.display = "none";
        nome.classList.remove("invalid");
    }

    // Validação do email
    if (!validarEmail(email.value)) {
        emailError.style.display = "block";
        emailError.style.color = "red";
        email.classList.add("invalid");
        isValid = false;
    } else {
        email.classList.remove("invalid");
        emailError.style.display = "none";
    }

    // Validação da senha
    if (!validarSenha(senha.value)) {
        senhaError.style.display = "block";
        senhaError.style.color = "red";
        senha.classList.add("invalid");
        isValid = false;
    } else {
        senhaError.style.display = "none";
        senha.classList.remove("invalid");
    }

    if (!validarConfirmaSenha(confirmaSenha.value, senha.value)) {
        confirmaSenhaError.style.display = "block";
        confirmaSenhaError.style.color = "red";
        confirmaSenha.classList.add("invalid");
        isValid = false;
    } else {
        confirmaSenhaError.style.display = "none";
        confirmaSenha.classList.remove("invalid");
    }    

    // Se algum campo for inválido, impede o envio do formulário
    if (!isValid) {
        e.preventDefault();
    }
});

// Funções de validação.
function validarNome(nome) {
    const regex = /^[A-Za-zÀ-ÿ\s]{3,}$/;
    return regex.test(nome.trim());
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.trim());
}


function validarSenha(senha) {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    return regex.test(senha);
}

function validarConfirmaSenha(confirmaSenha, senha) {
    if (confirmaSenha === "" || confirmaSenha !== senha) {
        return false;
    } 
    return true;
}

// Validações em tempo real
nome.addEventListener("input", function() {
    if (validarNome(nome.value)) {
        nomeError.style.display = "none";
        nome.classList.remove("invalid");
    }
});

email.addEventListener("input", function() {
    if (validarEmail(email.value)) {
        emailError.style.display = "none";
        email.classList.remove("invalid");
    }
});

senha.addEventListener("input", function() {
    if (validarSenha(senha.value)) {
        senhaError.style.display = "none";
        senha.classList.remove("invalid");
    } else {
        senhaError.style.display = "block";
        senhaError.style.color = "red";
        senha.classList.add("invalid");
    }
});

confirmaSenha.addEventListener("input", function() {
    if (validarConfirmaSenha(confirmaSenha.value, senha.value)) {
        confirmaSenhaError.style.display = "none";
        confirmaSenha.classList.remove("invalid");
    } else {
        confirmaSenhaError.style.display = "block";
        confirmaSenhaError.style.color = "red";
        confirmaSenha.classList.add("invalid");
    }
});
