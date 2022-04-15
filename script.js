var modalBtns = document.querySelectorAll(".modal-open"); //seleciona aquele que tem classe modal-open

modalBtns.forEach(function(btn){ //Abrir os modais, de acordo com o ID
    btn.onclick = function(){
        var modal = btn.getAttribute("data-modal");
        document.getElementById(modal).style.display = "block";
    };
});

var closeBtns = document.querySelectorAll(".modal-close"); //seleciona aquele que tem classe modal-close

closeBtns.forEach(function(btn){ //Fechar o Modal aberto, no botao
    btn.onclick = function(){
        var modal = (btn.closest(".modal").style.display = "none");
    };
});

window.onclick = function(e){ //Fechar modais ao clicar na tela
    if(e.target.className === "modal" ){
        e.target.style.display = "none";
    }
}

