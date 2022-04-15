var modalBtns = document.querySelectorAll(".modal-open");

modalBtns.forEach(function(btn){ //Abrir os modais
    btn.onclick = function(){
        var modal = btn.getAttribute("data-modal");
        document.getElementById(modal).style.display = "block";
    };
});

var closeBtns = document.querySelectorAll(".modal-close");

closeBtns.forEach(function(btn){ //Fechar os Modais
    btn.onclick = function(){
        var modal = (btn.closest(".modal").style.display = "none");
    };
});

window.onclick = function(e){ //Fechar modais ao clicar na tela
    if(e.target.className === "modal" ){
        e.target.style.display = "none";
    }
}

// || e.target.className == "modal-content" || e.target.className == "modal-header" || e.target.className == "modal-body" || e.target.className == "tectocima" || e.target.className == "animalmodal"   