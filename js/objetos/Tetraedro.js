// Funcao que retorna um objeto tetraedro regular, faceA-D sao as cores das faces
function Tetraedro(tetraedroMath, faceA, faceB, faceC, faceD) {
    let tetraedro = new THREE.Object3D(); // Cria um objeto 3D para ser o tetraedro

    let geometria = new THREE.Geometry(); // Cria uma geometria para o tetraedro
    let material = new THREE.MeshBasicMaterial({vertexColors: THREE.FaceColors}); // Cria um material para o tetraedro
    
    let geometriaContorno = new THREE.Geometry(); // Cria uma geometria para o contorno de linha do tetraedro
    let materialContorno = new THREE.LineBasicMaterial({ // Cria um material para o contorno de linha do tetraedro
        color: 0x000000, // A linha sera de cor preta
        transparent: true, // A linha sera transparente
        opacity: 1.0 // A linha tera opacidade maxima
    });

    // Cria os vertices do tetraedro regular usando as medidas passadas
    let vertices = [
        new THREE.Vector3(0, 3 * tetraedroMath.baricentro, 0), // Vertice do topo A
        new THREE.Vector3(-tetraedroMath.tamanhoAresta / 2, -tetraedroMath.baricentro, tetraedroMath.baricentroBase), // Vertice da esquerda B
        new THREE.Vector3(tetraedroMath.tamanhoAresta / 2, -tetraedroMath.baricentro, tetraedroMath.baricentroBase), // Vertice da direita C
        new THREE.Vector3(0, -tetraedroMath.baricentro, -2 * tetraedroMath.baricentroBase) // Vertice de tras D
    ];

    geometria.vertices = vertices; // A geometria do tetraedro recebe os vertices criados

    // Adiciona os vertices criados a geometria do contorno de linha usando segmentos
    geometriaContorno.vertices = [
        vertices[0], vertices[1], vertices[0], vertices[2], vertices[0], vertices[3], // Segmentos A-B, A-C e A-D
        vertices[1], vertices[2], vertices[1], vertices[3], // Segmentos B-C e B-D
        vertices[2], vertices[3] // Segmento C-D
    ];

    // Adiciona as faces do tetraedro
    geometria.faces.push(
        new THREE.Face3(2, 0, 1, null, new THREE.Color(faceA)), // Face A utilizando os vertices C, A e B com a cor passada
        new THREE.Face3(1, 0, 3, null, new THREE.Color(faceB)), // Face B utilizando os vertices B, A e D com a cor passada
        new THREE.Face3(0, 2, 3, null, new THREE.Color(faceC)), // Face C utilizando os vertices A, C e D com a cor passada
        new THREE.Face3(2, 1, 3, null, new THREE.Color(faceD)) // Face D utilizando os vertices C, B e D com a cor passada
    );

    // Adiciona um Array contendo os vertices de rotacao normalizados desse tetraedro
    tetraedro.verticesRotacao = [
        vertices[0].clone().normalize(), // Vertice A normalizado
        vertices[1].clone().normalize(), // Vertice B normalizado
        vertices[2].clone().normalize(), // Vertice C normalizado
        vertices[3].clone().normalize() // Vertice D normalizado
    ];

    // Adiciona ao objeto tetraedo seus componentes
    tetraedro.add(
        new THREE.Mesh(geometria, material), // Cria uma malha contendo a geometria do tetraedro e seu material
        new THREE.LineSegments(geometriaContorno, materialContorno) // Cria uma linha de segmentos com a geometria e material do contorno
    );

    return tetraedro; // Retorna o objeto tetraedro
}