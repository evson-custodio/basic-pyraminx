// Funcao que retorna um objeto pyraminx regular, faceA-D sao as cores das faces e FaceB e a cor das faces internas
function Pyraminx(tetraedroMath, faceA, faceB, faceC, faceD, faceE) {
    let pyraminx = new THREE.Object3D(); // Cria um objeto 3D para ser o pyraminx

    // Cria um Array com 10 tetraedros que serao parte do pyraminx
    let tetraedros = [
        Tetraedro(tetraedroMath, faceA, faceB, faceC, faceE),
        Tetraedro(tetraedroMath, faceA, faceB, faceE, faceE),
        Tetraedro(tetraedroMath, faceA, faceE, faceC, faceE),
        Tetraedro(tetraedroMath, faceE, faceB, faceC, faceE),
        Tetraedro(tetraedroMath, faceA, faceB, faceE, faceD),
        Tetraedro(tetraedroMath, faceA, faceE, faceE, faceD),
        Tetraedro(tetraedroMath, faceA, faceE, faceC, faceD),
        Tetraedro(tetraedroMath, faceE, faceB, faceE, faceD),
        Tetraedro(tetraedroMath, faceE, faceE, faceC, faceD),
        Tetraedro(tetraedroMath, faceE, faceB, faceC, faceD)
    ];

    // Cria um Array com 4 octaedros que serao parte do pyraminx
    let octaedros = [
        Octaedro(tetraedroMath, faceE, faceA, faceE, faceB, faceE, faceC, faceE, faceE),
        Octaedro(tetraedroMath, faceD, faceA, faceE, faceB, faceE, faceE, faceE, faceE),
        Octaedro(tetraedroMath, faceD, faceA, faceE, faceE, faceE, faceC, faceE, faceE),
        Octaedro(tetraedroMath, faceD, faceE, faceE, faceB, faceE, faceC, faceE, faceE)
    ];

    // Configura os tetraedros colocando-os nas suas devidas posicoes
    // Translada para o topo
    tetraedros[0].position.set(0, 6 * tetraedroMath.baricentro, 0);
    // Translada para o meio esquerdo
    tetraedros[1].position.set(-tetraedroMath.tamanhoAresta / 2, 2 * tetraedroMath.baricentro, tetraedroMath.baricentroBase);
    // Translada para o meio direito
    tetraedros[2].position.set(tetraedroMath.tamanhoAresta / 2, 2 * tetraedroMath.baricentro, tetraedroMath.baricentroBase);
    // Translada para o meio atras
    tetraedros[3].position.set(0, 2 * tetraedroMath.baricentro, -2 * tetraedroMath.baricentroBase);
    // Translada para base esquerda da base
    tetraedros[4].position.set(-tetraedroMath.tamanhoAresta, -2 * tetraedroMath.baricentro, 2 * tetraedroMath.baricentroBase);
    // Translada para base meio da base
    tetraedros[5].position.set(0, -2 * tetraedroMath.baricentro, 2 * tetraedroMath.baricentroBase);
    // Translada para base direita da base
    tetraedros[6].position.set(tetraedroMath.tamanhoAresta, -2 * tetraedroMath.baricentro, 2 * tetraedroMath.baricentroBase);
    // Translada para o meio esquerdo da base
    tetraedros[7].position.set(-tetraedroMath.tamanhoAresta / 2, -2 * tetraedroMath.baricentro, -tetraedroMath.baricentroBase);
    // Translada para o meio direito da base
    tetraedros[8].position.set(tetraedroMath.tamanhoAresta / 2, -2 * tetraedroMath.baricentro, -tetraedroMath.baricentroBase);
    // Translada para o topo da base
    tetraedros[9].position.set(0, -2 * tetraedroMath.baricentro, -4 * tetraedroMath.baricentroBase);

    // Configura os octaedros colocando-os nas suas devidas posicoes
    // Translada para o topo
    octaedros[0].position.set(0, 2 * tetraedroMath.baricentro, 0);
    // Translada para a base esquerda
    octaedros[1].position.set(-tetraedroMath.tamanhoAresta / 2, -2 * tetraedroMath.baricentro, tetraedroMath.baricentroBase);
    // Translada para a base direita
    octaedros[2].position.set(tetraedroMath.tamanhoAresta / 2, -2 * tetraedroMath.baricentro, tetraedroMath.baricentroBase);
    // Translada para a base atras
    octaedros[3].position.set(0, -2 * tetraedroMath.baricentro, -2 * tetraedroMath.baricentroBase);

    // Adiciona cada um dos tetraedros criados ao objeto pyraminx
    tetraedros.forEach(function(tetraedro) {
        pyraminx.add(tetraedro); // Adiciona o tetraedro
    });

    // Adiciona cada um dos octaedros criados ao objeto pyraminx
    octaedros.forEach(function(octaedro) {
        pyraminx.add(octaedro); // Adiciona o octaedro
    });

    // Adiciona o Array de tetraedros para futura referencia ao objeto pyraminx
    pyraminx.tetraedros = tetraedros;
    // Adiciona o Array de octaedros para futura referencia ao objeto pyraminx
    pyraminx.octaedros = octaedros;
    // Adiciona os vertices de rotacao de um tetraedro para futura referencia ao objeto pyraminx
    pyraminx.verticesRotacao = tetraedros[0].verticesRotacao;

    // Retorna um objeto pyraminx regular configurado com todos os seus componentes tetraedros e octaedros
    return pyraminx;
}