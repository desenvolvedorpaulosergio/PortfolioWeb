function eventiEquiv(){
    if(window.document.getElementById('config-display-opcoes-ocultas').style.display == "block"){
        window.document.getElementById('config-display-opcoes-ocultas').style.animationName = "anicacaoOpcoesOcultas2"
        setTimeout(function(){
            window.document.getElementById('config-display-opcoes-ocultas').style.display = "none"
        },200)
    }else{
        window.document.getElementById('config-display-opcoes-ocultas').style.display = "block"
        window.document.getElementById('config-display-opcoes-ocultas').style.animationName = "anicacaoOpcoesOcultas"
    }
}