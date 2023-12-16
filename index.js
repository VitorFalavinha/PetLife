var elementsDuvidas = document.querySelectorAll('.duvida')

elementsDuvidas.forEach(function (duvida){
    duvida.addEventListener('click', function (){
        duvida.classList.toggle('ativa')
    })
})

