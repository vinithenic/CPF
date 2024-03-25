function verificarCPF() {
    var cpf = document.getElementById('cpfInput').value.replace(/[^\d]+/g,'');
    if(cpf.length !== 11) {
        document.getElementById('resultado').innerText = 'CPF inválido. O CPF deve conter 11 dígitos.';
        return;
    }
    var soma = 0;
    for (var i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    var resto = soma % 11;
    var digitoVerificador1 = resto < 2 ? 0 : 11 - resto;

    soma = 0;
    for (var i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    var digitoVerificador2 = resto < 2 ? 0 : 11 - resto;

    if (parseInt(cpf.charAt(9)) === digitoVerificador1 && parseInt(cpf.charAt(10)) === digitoVerificador2) {
        document.getElementById('resultado').innerText = 'CPF válido.';
    } else {
        document.getElementById('resultado').innerText = 'CPF inválido.';
    }
}
