const form = document.getElementById("form");

// Seleciona os campos
const cep = document.getElementById("txt-cep");
const num = document.getElementById("num");

// Seleciona as mensagens de erro
const cepError = document.getElementById("cep-error");
const numError = document.getElementById("num-error");

form.addEventListener("submit", function(e) {
    let isValid = true;

    // Validação do CEP
    if (!validarCEP(cep.value)) {
        cepError.style.display = "block";
        cepError.style.color = "red";
        cep.classList.add("invalid");
        isValid = false;
    } else {
        cepError.style.display = "none";
        cep.classList.remove("invalid");
    }

    // Validação do número de residência
    if (!validarNumeroResidencia(num.value)) {
        numError.style.display = "block";
        numError.style.color = "red";
        num.classList.add("invalid");
        isValid = false;
    } else {
        numError.style.display = "none";
        num.classList.remove("invalid");
    }

    // Se algum campo for inválido, impede o envio do formulário
    if (!isValid) {
        e.preventDefault();
    }
});

// Funções de validação
function validarCEP(cep) {
    const regex = /^[0-9]{8}$/;
    return regex.test(cep.trim());
}

function validarNumeroResidencia(num) {
    return num !== "" && num > 0;
}

// Validações em tempo real
cep.addEventListener("input", function() {
    if (validarCEP(cep.value)) {
        cepError.style.display = "none";
        cep.classList.remove("invalid");
    } else {
        cepError.style.display = "block";
        cepError.style.color = "red";
        cep.classList.add("invalid");
    }
});

num.addEventListener("input", function() {
    if (validarNumeroResidencia(num.value)) {
        numError.style.display = "none";
        num.classList.remove("invalid");
    } else {
        numError.style.display = "block";
        numError.style.color = "red";
        num.classList.add("invalid");
    }
});
