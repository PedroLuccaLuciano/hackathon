const button = document.querySelector('#button1')

button.addEventListener('click', () => {
    const email = document.querySelector('#email').value
    const senha = document.querySelector('#password').value

    if (email == 'pedro2@gmail.com' && senha == '123456') {
        window.location = 'bolsista.html'
    }
})