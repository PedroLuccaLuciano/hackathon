const button = document.querySelector('#button')

button.addEventListener('click', () => {
    const email = document.querySelector('#email').value
    const senha = document.querySelector('#password').value

    if (email == 'pedrolucca.luciano@gmail.com' && senha == 'lucca1') {
        window.location = 'coordenador.html'
    }
    if (email == 'pedrolucca.luciano2@gmail.com' && senha == 'lucca2') {
        window.location = 'bolsista.html'
    }
})