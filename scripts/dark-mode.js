var darkVerifica = localStorage.getItem('dark-mode')

if (darkVerifica === 'on') {
    document.body.classList.add('dark-mode')
}

document.getElementById('dark-mode').addEventListener('click', () => {
    darkVerifica = localStorage.getItem('dark-mode')

    if (darkVerifica === 'off' || darkVerifica === null){
        document.body.classList.add('dark-mode')
        localStorage.setItem('dark-mode', 'on')

    } else if (darkVerifica === 'on') {
        document.body.classList.remove('dark-mode')
        localStorage.setItem('dark-mode', 'off')

    }
})