// 1.   No campo de nome, conforme o usuário for digitando ( Evento
//      KeyPress) deve existir uma regra que não deixe o usuário colocar
//      números no nome dele.

const nameInput = document.getElementById("nome");

nameInput.onkeypress = function (e) {
    // console.log (e.key)
    if ( ['0','1','2','3','4','5','6','7','8','9'].includes(e.key) ) {
        // console.log("contém um dígito");
        e.preventDefault();
        alert("O seu nome não pode conter um dígito numérico")
    }
};


// 2.   No campo de usuário (nickname) não deve ser possível usar os
//      seguintes caracteres especiais: @, $, % e espaços.

const usernameInput = document.getElementById("username");

usernameInput.onkeydown = function (e) {
    // console.log(e.key) //a e.key de espaço é exatamente " " (uma string de um espaço haha)
    if ( ["@", "$", "%", " "].includes(e.key) ) {
        e.preventDefault();
        alert("O seu nome de usuário não pode ter os caracteres @, $, % ou um espaço vazio")
    }
}


// 3.   Deverá ser criado mais um input para password, para que o usuário
//      possa confirmar a senha dele.
// 4.   Deverá ser validado se a senha digitada no input de confirmação de
//      senha criado no passo 3 é igual a senha digitada. Caso seja igual a
//      borda dos dois inputs, deverá ficar na verde, caso contrário, deverá
//      ficar na cor vermelha.

const passwordInput = document.getElementById("password")
const confirmInput = document.getElementById("passconfirm")

function checkPassword () {
    if (passwordInput.value == '' && confirmInput.value == ''){
        passwordInput.style.borderColor = "";
        confirmInput.style.borderColor = "";
    } else if(passwordInput.value === confirmInput.value) {
        passwordInput.style.borderColor = "green";
        confirmInput.style.borderColor = "green";
    } else {
        passwordInput.style.borderColor = "red";
        confirmInput.style.borderColor = "red";
    }
}

// checkPassword();

passwordInput.onblur = function (e) { checkPassword() }
confirmInput.onblur = function (e) { checkPassword() };