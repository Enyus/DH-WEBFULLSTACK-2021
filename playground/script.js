window.addEventListener('load', () => {
    const formulario = document.getElementById('formulario')
    const emailInput = document.getElementById('email')
    const senhaInput = document.getElementById('password')
    const msgSucesso = document.getElementById('msg-sucesso')
    
    // Código aqui!
    formulario.addEventListener ("submit", function (e) {
        e.preventDefault();
        if (emailInput.value != "" && senhaInput.value != "" ) {
            console.log("deu certo")
            msgSucesso.style.display = "block";
        } else {
            // e.preventDefault();
        }
    });

});

