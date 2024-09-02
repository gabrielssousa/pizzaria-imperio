const form = document.getElementById("form");

const nome = document.getElementById("txt-nome");
const email = document.getElementById("txt-email");
const tel = document.getElementById("txt-tel");
const mensagem = document.getElementById("txt-mensagem");

const nomeError = nome.nextElementSibling;
const emailError = email.nextElementSibling;
const telError = tel.nextElementSibling;
const mensagemError = mensagem.nextElementSibling;

form.addEventListener("submit", function(e) {
    let isValid = true;

    if (!validarNome(nome.value)) {
        nomeError.style.display = "block";
        nomeError.style.color = "red";
        nome.classList.add("invalid");
        isValid = false;
    } else {
        nomeError.style.display = "none";
        nome.classList.remove("invalid");
    }

    // Validação do E-mail
    if (!validarEmail(email.value)) {
        emailError.style.display = "block";
        emailError.style.color = "red";
        email.classList.add("invalid");
        isValid = false;
    } else {
        email.classList.remove("invalid");
        emailError.style.display = "none";
    }

    // Validação do Telefone
    if (!validarTelefone(tel.value)) {
        telError.style.display = "block";
        telError.style.color = "red";
        tel.classList.add("invalid");
        isValid = false;
    } else {
        tel.classList.remove("invalid");
        telError.style.display = "none";
    }

    // Validação da Mensagem
    if (!validarMensagem(mensagem.value)) {
        mensagemError.style.display = "block";
        mensagemError.style.color = "red";
        mensagem.classList.add("invalid");
        isValid = false;
    } else {
        mensagem.classList.remove("invalid");
        mensagemError.style.display = "none";
    }

    // Se algum campo for inválido, impede o envio do formulário
    if (!isValid) {
        e.preventDefault();
    }
});

// Função para validar o Nome (mais de 2 caracteres e apenas letras)
function validarNome(nome) {
    const regex = /^[A-Za-zÀ-ÿ\s]{3,}$/;
    return regex.test(nome.trim());
}

// Função para validar o E-mail
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.trim());
}

// Função para validar o Telefone
function validarTelefone(tel) {
    const regex = /^\(?\d{2}\)?[\s-]?[\d\s-]{8,}$/;
    return regex.test(tel.trim());
}

// Função para validar a Mensagem
function validarMensagem(mensagem) {
    return mensagem.trim().length > 0;
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

tel.addEventListener("input", function() {
    if (validarTelefone(tel.value)) {
        telError.style.display = "none";
        tel.classList.remove("invalid");
    }
});

mensagem.addEventListener("input", function() {
    if (validarMensagem(mensagem.value)) {
        mensagemError.style.display = "none";
        mensagem.classList.remove("invalid");
    }
});