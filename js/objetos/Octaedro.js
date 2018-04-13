// Funcao que retorna um objeto octaedro regular, faceA-H sao as cores das faces
function Octaedro(tetraedroMath, faceA, faceB, faceC, faceD, faceE, faceF, faceG, faceH) {
    let octaedro = new THREE.Object3D(); // Cria um objeto 3D para ser o octaedro

    let geometria = new THREE.Geometry(); // Cria uma geometria para o octaedro
    let material = new THREE.MeshBasicMaterial({vertexColors: THREE.FaceColors}); // Cria um material para o octaedro

    let geometriaContorno = new THREE.Geometry(); // Cria uma geometria para o contorno de linha do octaedro
    let materialContorno = new THREE.LineBasicMaterial({ // Cria um material para o contorno de linha do octaedro
        color: 0x000000, // A linha sera de cor preta
        transparent: true, // A linha sera transparente
        opacity: 1.0 // A linha tera opacidade maxima
    });

    // Cria os vertices do octaedro regular usando as medidas passadas
    let vertices = [
        new THREE.Vector3(-tetraedroMath.tamanhoAresta / 2, 3 * tetraedroMath.baricentro, tetraedroMath.baricentroBase), // Vertice superior esquerdo A
        new THREE.Vector3(tetraedroMath.tamanhoAresta / 2, 3 * tetraedroMath.baricentro, tetraedroMath.baricentroBase), // Vertice superior direito B
        new THREE.Vector3(0, 3 * tetraedroMath.baricentro, -2 * tetraedroMath.baricentroBase), // Vertice superior atras C
        new THREE.Vector3(-tetraedroMath.tamanhoAresta / 2, -tetraedroMath.baricentro, -tetraedroMath.baricentroBase), // Vertice inferior esquerdo D
        new THREE.Vector3(tetraedroMath.tamanhoAresta / 2, -tetraedroMath.baricentro, -tetraedroMath.baricentroBase), // Vertice inferior direito E
        new THREE.Vector3(0, -tetraedroMath.baricentro, 2 * tetraedroMath.baricentroBase) // Vertice inferior frente F
    ];

    geometria.vertices = vertices; // A geometria do octaedro recebe os vertices criados

    // Adiciona os vertices criados a geometria do contorno de linha usando segmentos
    geometriaContorno.vertices = [
        // Segmentos A-B, A-C, A-D, A-E e A-F
        vertices[0], vertices[1], vertices[0], vertices[2], vertices[0], vertices[3], vertices[0], vertices[4], vertices[0], vertices[5],
        // Segmentos B-C, B-D, B-E e B-F
        vertices[1], vertices[2], vertices[1], vertices[3], vertices[1], vertices[4], vertices[1], vertices[5],
        // Segmentos C-D, C-E e C-F
        vertices[2], vertices[3], vertices[2], vertices[4], vertices[2], vertices[5],
        // Segmentos D-E e D-F
        vertices[3], vertices[4], vertices[3], vertices[5],
        // Segmento E-F
        vertices[4], vertices[5]
    ];

    // Adiciona as faces do octaedro
    geometria.faces.push(
        new THREE.Face3(3, 4, 5, null, new THREE.Color(faceA)), // Face A utilizando os vertices D, E e F com a cor passada
        new THREE.Face3(0, 5, 1, null, new THREE.Color(faceB)), // Face B utilizando os vertices A, F e B com a cor passada
        new THREE.Face3(0, 3, 5, null, new THREE.Color(faceC)), // Face C utilizando os vertices A, D e F com a cor passada
        new THREE.Face3(0, 2, 3, null, new THREE.Color(faceD)), // Face D utilizando os vertices A, C e D com a cor passada
        new THREE.Face3(2, 4, 3, null, new THREE.Color(faceE)), // Face E utilizando os vertices C, E e D com a cor passada
        new THREE.Face3(1, 4, 2, null, new THREE.Color(faceF)), // Face F utilizando os vertices B, E e C com a cor passada
        new THREE.Face3(1, 5, 4, null, new THREE.Color(faceG)), // Face G utilizando os vertices B, F e E com a cor passada
        new THREE.Face3(0, 1, 2, null, new THREE.Color(faceH)) // Face H utilizando os vertices A, B e C com a cor passada
    );

    // Adiciona ao objeto octaedro seus componentes
    octaedro.add(
        new THREE.Mesh(geometria, material), // Cria uma malha contendo a geometria do octaedro e seu material
        new THREE.LineSegments(geometriaContorno, materialContorno) // Cria uma linha de segmentos com a geometria e material do contorno
    );

    return octaedro; // Retorna o objeto octaedro
}
