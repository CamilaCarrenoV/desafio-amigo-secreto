// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [];

function agregarAmigo() {
    let nombreAgregado = document.getElementById('amigo').value.trim();
        
    if (nombreAgregado === '') {
        alert('Por favor ingrese un nombre');
    } else if (!isNaN(nombreAgregado)) { 
        alert('No se permiten números, ingrese un nombre válido');
    } else {
        amigos.push(nombreAgregado);
        document.getElementById('reset').removeAttribute('disabled');
    }
    document.getElementById('amigo').value = '';
}

function listaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let nombreAmigo = document.createElement('li');
        nombreAmigo.textContent = amigos[i];
        listaAmigos.appendChild(nombreAmigo);
    };  
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor ingresar el nombre de tus amigos');
        return
    } 
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

        console.log(amigoSorteado);
        
        document.getElementById('resultado').innerHTML = `
          <li>
            <label class="parrafo">El amigo secreto es:</label>
            ${amigoSorteado}
          </li>
        `;
        
        
}

function reiniciarSorteo() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('reset').setAttribute('disabled', true);

};