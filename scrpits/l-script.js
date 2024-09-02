const form = document.getElementById("form");

// Seleciona os campos
const email = document.getElementById("email");
const senha = document.getElementById("senha");

// Seleciona os erros
const emailError = document.getElementById("email-error");
const senhaError = document.getElementById("senha-error");

form.addEventListener("submit", function(e) {
    let isValid = true;

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

    // Se algum campo for inválido, impede o envio do formulário
    if (!isValid) {
        e.preventDefault();
    }
});

// Função de validação
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.trim());
}

function validarSenha(senha) {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    return regex.test(senha);
}

// Validação em tempo real
email.addEventListener("input", function() {
    if (validarEmail(email.value)) {
        emailError.style.display = "none";
        email.classList.remove("invalid");
    } else {
        emailError.style.display = "block";
        emailError.style.color = "red";
        email.classList.add("invalid");
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
