let aspecto = window.innerWidth / window.innerHeight; // Calcula o aspecto inicial com os dados da janela
let frustum = 10; // Frustum base da camera

// Criando objetos Three.js para a cena
let cena     = new THREE.Scene(); // Cria uma cena
// Cria uma camera orthografica
let camera   = new THREE.OrthographicCamera(-frustum * aspecto / 2, frustum * aspecto / 2, frustum / 2, -frustum / 2, 1, 2000);
let renderer = new THREE.WebGLRenderer({antialias: true}); // Cria um renderizador com anti aliases
let orbita   = new THREE.OrbitControls(camera, renderer.domElement); // Cria uma orbita usando a camera e o elemento DOM do renderizador

// Configuracao basica da cena
document.body.appendChild(renderer.domElement); // Adiciona o elemento DOM do renderizador ao documento
renderer.setPixelRatio(window.devicePixelRatio); // Atribui o DPI da janela ao renderizador
renderer.setClearColor(0xffffff, 1); // Atribui a cor branca aos pixels nao renderizados
orbita.enableKeys = false; // Desativa os eventos de teclado da orbita
orbita.enablePan = false; // Desativa o evento de arrastar da orbita
atualizarCamera(); // Atualiza a camera

// Atualiza a camera com as medidas atuais da janela
function atualizarCamera() {
    aspecto = window.innerWidth / window.innerHeight; // Calcula o aspecto atual da janela
    camera.left = -frustum * aspecto / 2; // Calcula frustum esquerdo
    camera.right = frustum * aspecto / 2; // Calcula frustum direito
    camera.position.set(0, 0, 10); // Translada a camera 10 posicoes no eixo Z
    camera.updateProjectionMatrix(); // Atualiza a matriz de projecao da camera
    renderer.setSize(window.innerWidth, window.innerHeight); // Atribui o novo tamanho da janela no renderizador
}

// Funcao de renderizacao da cena
function render() {
    renderer.render(cena, camera); // Renderiza a cena com a camera usando o renderizador
}

// Adicao de um evento a orbita utilizada para chamar a funcao render() sempre que for alterada
orbita.addEventListener('change', function() {
    render(); // Renderiza de novo a cena sempre que a orbita for alterada
});

// Adicao de um evento de redimencionamento da janela 
window.addEventListener('resize', function() {
    atualizarCamera(); // Atualiza a camera com as novas medidas da janela
    render(); // Renderiza de novo a cena
});

// Adicao de um evento de teclado
window.addEventListener('keydown', function(event) {
    eventos.push(event); // Adicionando o evento capturado no final do Array Eventos
});

// Cores utilizadas nos objetos
let vermelho = 0xff0000; // Vermelho
let verde    = 0x00ff00; // Verde
let azul     = 0x0000ff; // Azul
let amarelo  = 0xffff00; // Amarelo
let preto    = 0x777777; // Preto

// Objetos da cena
let tetraedroMath = TetraedroMath(2); // Objeto contendo medidas de um tetraedro regular de aresta 2
let pyraminx = Pyraminx(tetraedroMath, vermelho, verde, azul, amarelo, preto); // Objeto Pyraminx
let grupo = Grupo(pyraminx); // Grupo que ira manipular os tetraedros e octaedros componentes do Pyraminx passado

// Adicao de objetos a cena
cena.add(pyraminx); // Pyraminx adicionado
cena.add(grupo); // Grupo adicionado

// Variáveis de controle do comportamento
let eventos = []; // Array de eventos gerados pelo teclado
let nomeGrupo = 'Tetraedro'; // String contendo o tipo de rotacao atual
let rotacao; // Variável que recebe a funcao de rotacao atual, inicializada com 

// Funcao que trata os eventos de teclado para a animacao
function tratarEventos() {
    if (eventos.length != 0) { // Verifica se existe mais alguma animacao a ser realizada
        switch (eventos[0].key) { // Pega a proxima a animacao na variavel eventos
            case 'ArrowUp': // Caso a tecla pressionada seja a seta para cima do teclado
            rotacao = grupo.rotacionar(nomeGrupo + 'A'); // A variavel rotacao recebe uma funcao de rotacao do grupo desejado no vertice A
            break;
            case 'ArrowLeft': // Caso a tecla pressionada seja a seta para esquerda do teclado
            rotacao = grupo.rotacionar(nomeGrupo + 'B'); // A variavel rotacao recebe uma funcao de rotacao do grupo desejado no vertice B
            break;
            case 'ArrowRight': // Caso a tecla pressionada seja a seta para direita do teclado
            rotacao = grupo.rotacionar(nomeGrupo + 'C'); // A variavel rotacao recebe uma funcao de rotacao do grupo desejado no vertice C
            break;
            case 'ArrowDown': // Caso a tecla pressionada seja a seta para baixo do teclado
            rotacao = grupo.rotacionar(nomeGrupo + 'D'); // A variavel rotacao recebe uma funcao de rotacao do grupo desejado no vertice D
            break;
            case '1': // Caso a tecla pressionada seja o numero 1 do teclado
            nomeGrupo = 'Tetraedro'; // O grupo a ser utilizado sera Tetraedro
            break;
            case '2': // Caso a tecla pressionada seja o numero 2 do teclado
            nomeGrupo = 'Octaedro'; // O grupo a ser utilizado sera Octaedro
            break;
            case '3': // Caso a tecla pressionada seja o numero 3 do teclado
            nomeGrupo = 'Pyraminx'; // O grupo a ser utilizado sera Pyraminx
            break;
            case '4': // Caso a tecla pressionada seja o numero 4 do teclado
            nomeGrupo = 'Linha'; // O grupo a ser utilizado sera Linha
            break;
            case '5': // Caso a tecla pressionada seja o numero 5 do teclado
            nomeGrupo = 'Face'; // O grupo a ser utilizado sera Face
            break;
        }
        eventos.shift(); // Remove a animacao tratada do inicio fila
    }
}

// Cria a funcao de animacao da cena
function animate() {
    window.requestAnimationFrame(animate); // Obtem os frames da janela atual passando a funcao de animacao como callback
    if (grupo.estaVazio()) { // Verifica se o grupo esta vazio, se uma animacao terminou
        tratarEventos(); // Trata as animacoes de grupo seguintes caso existam
    }
    else { // Caso o grupo nao esteja vazio
        rotacao(); // Chama a animacao atual
    }
    render(); // Renderiza a cena
}

// Chamada da funcao animate()
animate(); // Inicia a animacao e trata os eventos