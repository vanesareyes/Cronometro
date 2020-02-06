window.onload = function() {
    let start = document.getElementById('start')
    let pause = document.getElementById('pause')
    let reset = document.getElementById('reset')

    let segundero = document.querySelector('div.seconds');
    let minutero = document.querySelector('div.minutes')

    let segundos = 0
    let minutos = 0

    let enPausa = false

    let iniciar = function() {
        if (!enPausa) {
            segundos++
            if (segundos == 60) {
                minutos++
                segundos = 0
            }
            segundero.innerHTML = agregarCero(segundos)
            minutero.innerHTML = agregarCero(minutos)
        }
    }

    let timer = null

    start.addEventListener('click', function() {
        deshabilitar(start)
        habilitar(reset)
        habilitar(pause)

        timer = setInterval(iniciar, 1000) //va sin () xq no la estamos ejecutando sino llamando

    })

    pause.addEventListener('click', function() {
        enPausa = !enPausa
    })

    reset.addEventListener('click', function() {
        clearInterval(timer)
        segundos = 0
        minutos = 0
        mostrarTiempo(segundero, segundos)
        mostrarTiempo(minutero, minutos)

        habilitar(start)
        deshabilitar(reset)
        deshabilitar(pause)

        start.removeAttribute('disabled')
        pause.setAttribute('disabled', '')
        reset.setAttribute('disabled', '')
    })

    function agregarCero(n) {
        if (n < 10) {
            return '0' + n
        }
        return n
    }

    function deshabilitar(el) {
        el.setAttribute('disabled', '')
    }

    function habilitar(el) {
        el.removeAttribute('disabled')
    }

    function mostrarTiempo(el, t) {
        el.innerHTML = agregarCero(t)
    }

}