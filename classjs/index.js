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



//Modal de Habilidade HTML & CSS
function eventoHTMLCSS(){
    window.document.getElementById('config-display-modal-habilidades-htmlcss').style.display = 'block'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
}

function eventoHTMLCSS2(){
    window.document.getElementById('config-display-modal-habilidades-htmlcss').style.display = 'none'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'auto'
}

//Modal de Habilidade JavaScript

function eventoJavaScript(){
    window.document.getElementById('config-display-modal-habilidades-javascript').style.display = 'block'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
}

function eventoJavaScript2(){
    window.document.getElementById('config-display-modal-habilidades-javascript').style.display = 'none'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'auto'
}

//Modal de Habilidade PHP & MySQL

function eventoPHPMySQL(){
    window.document.getElementById('config-display-modal-habilidades-phpmysql').style.display = 'block'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
}

function eventoPHPMySQL2(){
    window.document.getElementById('config-display-modal-habilidades-phpmysql').style.display = 'none'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'auto'
}

//Modal de Habilidade Canva

function eventoCanva(){
    window.document.getElementById('config-display-modal-habilidades-canva').style.display = 'block'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
}

function eventoCanva2(){
    window.document.getElementById('config-display-modal-habilidades-canva').style.display = 'none'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'auto'
}

//Modal de Habilidade Word

function eventoWord(){
    window.document.getElementById('config-display-modal-habilidades-word').style.display = 'block'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
}

function eventoWord2(){
    window.document.getElementById('config-display-modal-habilidades-word').style.display = 'none'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'auto'
}

//Modal de Habilidade Excel

function eventoExcel(){
    window.document.getElementById('config-display-modal-habilidades-excel').style.display = 'block'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
}

function eventoExcel2(){
    window.document.getElementById('config-display-modal-habilidades-excel').style.display = 'none'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'auto'
}

//Modal de Habilidade Ed. Imagem

function eventoEdIMG(){
    window.document.getElementById('config-display-modal-habilidades-edimg').style.display = 'block'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
}

function eventoEdIMG2(){
    window.document.getElementById('config-display-modal-habilidades-edimg').style.display = 'none'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'auto'
}

//Modal de Habilidade de Manutenção de Computadores

function eventoManutencao(){
    window.document.getElementById('config-display-modal-habilidades-manutencao').style.display = 'block'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
}

function eventoManutencao2(){
    window.document.getElementById('config-display-modal-habilidades-manutencao').style.display = 'none'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'auto'
}

//Modal de Visualizar Currículo

function eventoVisualizar(){
    window.document.getElementById('config-display-modal-visualizacao').style.display = 'block'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
}

function eventoCertificados(){
    window.document.getElementById('config-display-modal-visualizacao-certificados').style.display = 'block'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
}

function eventoClose(){
    window.document.getElementById('config-display-modal-visualizacao').style.display = 'none'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'auto'
}

function eventoClose2(){
    window.document.getElementById('config-display-modal-visualizacao-certificados').style.display = 'none'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'auto'
}

function eventoVisualizar2(){
    window.document.getElementById('config-display-modal-visualizacao').style.display = 'block'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
}