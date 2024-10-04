function comprimentoBody(){
    if(window.innerWidth > 550){
        window.document.getElementById('config-display-opcoes-ocultas').style.display = "none"
    }
}

function eventiEquiv(){
    if(window.document.getElementById('config-display-opcoes-ocultas').style.display == "block"){
        window.document.getElementById('config-display-opcoes-ocultas').style.animationName = "anicacaoOpcoesOcultas2"
        setTimeout(function(){
            window.document.getElementById('config-display-opcoes-ocultas').style.display = "none"
        },200)
        window.document.getElementById('config-opcoes-curriculo').style.display = "none"
        window.document.getElementById('config-opcoes-projetos').style.display = "none"
        window.document.getElementById('config-opcoes-sobre').style.display = "none"
    }else{
        window.document.getElementById('config-display-opcoes-ocultas').style.display = "block"
        window.document.getElementById('config-display-opcoes-ocultas').style.animationName = "anicacaoOpcoesOcultas"
        window.document.getElementById('config-sobree').style.color = "white"
    }
}

// Eventos de Opções Ocultas

function eventoCurriculo(){
    if(window.document.getElementById('config-opcoes-curriculo').style.display == "block"){
        window.document.getElementById('config-opcoes-curriculo').style.display = "none"
    }else{
        window.document.getElementById('config-opcoes-curriculo').style.display = "block"
    }
}

function eventoProjetos(){
    if(window.document.getElementById('config-opcoes-projetos').style.display == "block"){
        window.document.getElementById('config-opcoes-projetos').style.display = "none"
    }else{
        window.document.getElementById('config-opcoes-projetos').style.display = "block"
    }
}

function eventoSobre(){
    if(window.document.getElementById('config-opcoes-sobre').style.display == "block"){
        window.document.getElementById('config-opcoes-sobre').style.display = "none"
    }else{
        window.document.getElementById('config-opcoes-sobre').style.display = "block"
    }
}

//Configurações JavaScript Parte 1 do Projeto Index de Section:

window.document.addEventListener('DOMContentLoaded', function(){
    window.setInterval(function(){
        let idPerfil = Math.floor(Math.random() * 3) + 1
        if(idPerfil == 1){
            window.document.querySelector('#estilo-meu-perfil').src = "./resources/imgs/profile1.jpg"
        }else if(idPerfil == 2){
            window.document.querySelector('#estilo-meu-perfil').src = "./resources/imgs/profile2.png"
        }else{
            window.document.querySelector('#estilo-meu-perfil').src = "./resources/imgs/profile3.png"
        }
    },3000)
})

//Configurações de Modais:

//Modal de Carregamento:

window.document.addEventListener('DOMContentLoaded', function(){
    setTimeout(function(){
        window.document.getElementById('config-display-modal-carregamento').style.display = 'none'
        window.document.getElementsByTagName('body')[0].style.overflowY = 'auto'
    },2000)
})