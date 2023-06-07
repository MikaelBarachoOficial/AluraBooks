var darkVerifica = localStorage.getItem('dark-mode')
var darkTexto = document.getElementById('dark-mode__texto')

if (darkVerifica === 'on') {
    document.body.classList.add('dark-mode')
    darkTexto.innerHTML = 'Light mode'
}

document.getElementById('dark-mode').addEventListener('click', () => {
    darkVerifica = localStorage.getItem('dark-mode')

    if (darkVerifica === 'off' || darkVerifica === null){
        document.body.classList.add('dark-mode')
        localStorage.setItem('dark-mode', 'on')
        darkTexto.innerHTML = 'Light mode'

    } else if (darkVerifica === 'on') {
        document.body.classList.remove('dark-mode')
        localStorage.setItem('dark-mode', 'off')
        darkTexto.innerHTML = 'Dark mode'

    }
})
