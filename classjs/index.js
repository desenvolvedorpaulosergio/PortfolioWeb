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
