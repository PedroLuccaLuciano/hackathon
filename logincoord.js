const button = document.querySelector('#button')

button.addEventListener('click', () => {
    const email = document.querySelector('#email').value
    const senha = document.querySelector('#password').value

    if (email == 'pedro1@gmail.com' && senha == '123456') {
        window.location = 'coordenador.html'
    }
})