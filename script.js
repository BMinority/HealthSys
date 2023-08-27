const loadingOverlay = document.getElementById("loading-overlay");
const content = document.getElementById("content");

window.addEventListener('load', () => {
    loadingOverlay.style.display = "none";
    content.style.display = "block";
})

document.addEventListener('DOMContentLoaded', function() {
    var sairLi = document.getElementById('sair');
    sairLi.addEventListener('click', function() {
        window.location.href = 'login_screen.html';
    });
});

//--------------------------------------------------------------------

const pacientesBtn = document.getElementById("pacientes");
const homeBtn = document.getElementById("home");
const prontBtn = document.getElementById("prontuarios");
const farmaBtn = document.getElementById("farmacia");
const equipeBtn = document.getElementById("equipe");
const contatosBtn = document.getElementById("contatos");
const menuUserBtn = document.querySelector(".usuario");
const perfiBtn = document.querySelector(".perfil");
const fecharBtn = document.getElementById("fechar");


const menuDeUsuario = document.getElementById("menu_usuario");
const dadosHospital = document.getElementById("dadosHospital");
const dadosPacientes = document.getElementById("dadosPacientes");
const dadosPront = document.getElementById("dadosProntuario");
const dadosFarma = document.getElementById("dadosFarmacia");
const dadosEquipe = document.getElementById("dados_equipe");
const dadosContatos = document.getElementById("dados_contatos");

let verificacao = true;

menuUserBtn.addEventListener('click', () => {
    if (verificacao) {
        menuDeUsuario.style.display="block";
    } else {
        menuDeUsuario.style.display="none";
    }

    verificacao = !verificacao;
});

exibicao.addEventListener('click', () => {
    menu_usuario.style.display="none";
});

homeBtn.addEventListener('click', () => {
    dadosHospital.style.display="flex";
    dadosPacientes.style.display="none";
    dadosPront.style.display="none";
    dadosFarma.style.display="none"
    dadosEquipe.style.display="none";
    dadosContatos.style.display="none";
});

pacientesBtn.addEventListener('click', () => {
    dadosHospital.style.display="none";
    dadosPacientes.style.display="flex";
    dadosPront.style.display="none";
    dadosFarma.style.display="none"
    dadosEquipe.style.display="none";
    dadosContatos.style.display="none";
});

prontBtn.addEventListener('click', () => {
    dadosHospital.style.display="none";
    dadosPacientes.style.display="none";
    dadosPront.style.display="block";
    dadosFarma.style.display="none"
    dadosEquipe.style.display="none";
    dadosContatos.style.display="none";
});

farmaBtn.addEventListener('click', () => {
    dadosHospital.style.display="none";
    dadosPacientes.style.display="none";
    dadosPront.style.display="none";
    dadosFarma.style.display="block";
    dadosEquipe.style.display="none";
    dadosContatos.style.display="none";
});

equipeBtn.addEventListener('click', () => {
    dadosHospital.style.display="none";
    dadosPacientes.style.display="none";
    dadosPront.style.display="none";
    dadosFarma.style.display="none";
    dadosEquipe.style.display="block";
    dadosContatos.style.display="none";
});

contatosBtn.addEventListener('click', () => {
    dadosHospital.style.display="none";
    dadosPacientes.style.display="none";
    dadosPront.style.display="none";
    dadosFarma.style.display="none";
    dadosEquipe.style.display="none";
    dadosContatos.style.display="block";
});

perfiBtn.addEventListener('click', () => {
    perfil_user.style.display="flex"
    menu_usuario.style.display="none"
});

fecharBtn.addEventListener('click', () => {
    perfil_user.style.display="none";
});

transfer_btn.addEventListener('click', () => {
    form_transfer.style.display="flex";
});

fechar_transfer.addEventListener('click', () => {
    form_transfer.style.display="none";
});

lista_transfer_btn.addEventListener('click', () => {
    lista_transfer.style.display="flex";
});

fechar_lista_transfer.addEventListener('click', () => {
    lista_transfer.style.display="none";
});

add_usuario.addEventListener('click', () => {
    acesso_equipe.style.display="flex";
});

//--------------------------------------------------------------------------

fechar_acesso_equipe.addEventListener('click', () => {
    acesso_equipe.style.display="none";
})

    // Pega todos os botões do menu
    const buttons = document.querySelectorAll('.menu button');

    // Adiciona um evento de clique a cada botão
    buttons.forEach(button => {
        button.addEventListener('click', () => {
        // Remove a classe 'active' de todos os ícones e textos
        buttons.forEach(b => {
            b.querySelector('i').classList.remove('active');
            b.querySelector('span').classList.remove('active');
        });

        // Adiciona a classe 'active' apenas ao ícone e texto do botão clicado
        button.querySelector('i').classList.add('active');
        button.querySelector('span').classList.add('active');
    });
});