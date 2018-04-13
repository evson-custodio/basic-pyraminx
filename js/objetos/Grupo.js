// Funcao que retorna um objeto Grupo que manipula as rotacoes e componentes de um Pyraminx passado
function Grupo(pyraminx) {
    let grupo = new THREE.Object3D(); // Cria um objeto 3D para o grupo

    grupo.pyraminx = pyraminx; // Adiciona o pyraminx manipulado ao grupo

    // Monta um determinado grupo dentro do pyraminx, os nomes podem ser:
    // Tetraedro, Octaedro, Pyraminx, Linha e Face, seguido das letras A, B, C e D
    grupo.montar = function(nome) { // Essa funcao possui todas as combinacoes possiveis de rotacao do pyraminx
        switch (nome) { // Verifica o nome do grupo passado
            case 'TetraedroA':
            // Utiliza o vertice de rotacao do Topo A
            grupo.verticeRotacao = grupo.pyraminx.verticesRotacao[0];
            // Remove os componentes necessarios do pyraminx
            grupo.pyraminx.remove(
                grupo.pyraminx.tetraedros[0]
            );
            // Adiciona os componentes necessarios ao grupo
            grupo.add(
                grupo.pyraminx.tetraedros[0]
            );
            break;
            case 'TetraedroB':
            // Utiliza o vertice de rotacao da esquerda B
            grupo.verticeRotacao = grupo.pyraminx.verticesRotacao[1];
            // Remove os componentes necessarios do pyraminx
            grupo.pyraminx.remove(
                grupo.pyraminx.tetraedros[4]
            );
            // Adiciona os componentes necessarios ao grupo
            grupo.add(
                grupo.pyraminx.tetraedros[4]
            );
            break;
            case 'TetraedroC':
            // Utiliza o vertice de rotacao da direita C
            grupo.verticeRotacao = grupo.pyraminx.verticesRotacao[2];
            // Remove os componentes necessarios do pyraminx
            grupo.pyraminx.remove(
                grupo.pyraminx.tetraedros[6]
            );
            // Adiciona os componentes necessarios ao grupo
            grupo.add(
                grupo.pyraminx.tetraedros[6]
            );
            break;
            case 'TetraedroD':
            // Utiliza o vertice de rotacao de tras D
            grupo.verticeRotacao = grupo.pyraminx.verticesRotacao[3];
            // Remove os componentes necessarios do pyraminx
            grupo.pyraminx.remove(
                grupo.pyraminx.tetraedros[9]
            );
            // Adiciona os componentes necessarios ao grupo
            grupo.add(
                grupo.pyraminx.tetraedros[9]
            );
            break;
            case 'LinhaA':
            // Utiliza o vertice de rotacao do topo A
            grupo.verticeRotacao = grupo.pyraminx.verticesRotacao[0];
            // Remove os componentes necessarios do pyraminx
            grupo.pyraminx.remove(
                grupo.pyraminx.octaedros[0],
                grupo.pyraminx.tetraedros[1],
                grupo.pyraminx.tetraedros[2],
                grupo.pyraminx.tetraedros[3]
            );
            // Adiciona os componentes necessarios ao grupo
            grupo.add(
                grupo.pyraminx.octaedros[0],
                grupo.pyraminx.tetraedros[1],
                grupo.pyraminx.tetraedros[2],
                grupo.pyraminx.tetraedros[3]
            );
            break;
            case 'LinhaB':
            // Utiliza o vertice de rotacao da esquerda B
            grupo.verticeRotacao = grupo.pyraminx.verticesRotacao[1];
            // Remove os componentes necessarios do pyraminx
            grupo.pyraminx.remove(
                grupo.pyraminx.octaedros[1],
                grupo.pyraminx.tetraedros[1],
                grupo.pyraminx.tetraedros[5],
                grupo.pyraminx.tetraedros[7]
            );
            // Adiciona os componentes necessarios ao grupo
            grupo.add(
                grupo.pyraminx.octaedros[1],
                grupo.pyraminx.tetraedros[1],
                grupo.pyraminx.tetraedros[5],
                grupo.pyraminx.tetraedros[7]
            );
            break;
            case 'LinhaC':
            // Utiliza o vertice de rotacao da direita C
            grupo.verticeRotacao = grupo.pyraminx.verticesRotacao[2];
            // Remove os componentes necessarios do pyraminx
            grupo.pyraminx.remove(
                grupo.pyraminx.octaedros[2],
                grupo.pyraminx.tetraedros[2],
                grupo.pyraminx.tetraedros[5],
                grupo.pyraminx.tetraedros[8]
            );
            // Adiciona os componentes necessarios ao grupo
            grupo.add(
                grupo.pyraminx.octaedros[2],
                grupo.pyraminx.tetraedros[2],
                grupo.pyraminx.tetraedros[5],
                grupo.pyraminx.tetraedros[8]
            );
            break;
            case 'LinhaD':
            // Utiliza o vertice de rotacao de tras D
            grupo.verticeRotacao = grupo.pyraminx.verticesRotacao[3];
            // Remove os componentes necessarios do pyraminx
            grupo.pyraminx.remove(
                grupo.pyraminx.octaedros[3],
                grupo.pyraminx.tetraedros[3],
                grupo.pyraminx.tetraedros[7],
                grupo.pyraminx.tetraedros[8]
            );
            // Adiciona os componentes necessarios ao grupo
            grupo.add(
                grupo.pyraminx.octaedros[3],
                grupo.pyraminx.tetraedros[3],
                grupo.pyraminx.tetraedros[7],
                grupo.pyraminx.tetraedros[8]
            );
            break;
            case 'OctaedroA':
            // Utiliza o vertice de rotacao do topo A
            grupo.verticeRotacao = grupo.pyraminx.verticesRotacao[0];
            // Remove os componentes necessarios do pyraminx
            grupo.pyraminx.remove(
                grupo.pyraminx.octaedros[0],
                grupo.pyraminx.tetraedros[0],
                grupo.pyraminx.tetraedros[1],
                grupo.pyraminx.tetraedros[2],
                grupo.pyraminx.tetraedros[3]
            );
            // Adiciona os componentes necessarios ao grupo
            grupo.add(
                grupo.pyraminx.octaedros[0],
                grupo.pyraminx.tetraedros[0],
                grupo.pyraminx.tetraedros[1],
                grupo.pyraminx.tetraedros[2],
                grupo.pyraminx.tetraedros[3]
            );
            break;
            case 'OctaedroB':
            // Utiliza o vertice de rotacao da esquerda B
            grupo.verticeRotacao = grupo.pyraminx.verticesRotacao[1];
            // Remove os componentes necessarios do pyraminx
            grupo.pyraminx.remove(
                grupo.pyraminx.octaedros[1],
                grupo.pyraminx.tetraedros[1],
                grupo.pyraminx.tetraedros[4],
                grupo.pyraminx.tetraedros[5],
                grupo.pyraminx.tetraedros[7]
            );
            // Adiciona os componentes necessarios ao grupo
            grupo.add(
                grupo.pyraminx.octaedros[1],
                grupo.pyraminx.tetraedros[1],
                grupo.pyraminx.tetraedros[4],
                grupo.pyraminx.tetraedros[5],
                grupo.pyraminx.tetraedros[7]
            );
            break;
            case 'OctaedroC':
            // Utiliza o vertice de rotacao da direita C
            grupo.verticeRotacao = grupo.pyraminx.verticesRotacao[2];
            // Remove os componentes necessarios do pyraminx
            grupo.pyraminx.remove(
                grupo.pyraminx.octaedros[2],
                grupo.pyraminx.tetraedros[2],
                grupo.pyraminx.tetraedros[5],
                grupo.pyraminx.tetraedros[6],
                grupo.pyraminx.tetraedros[8]
            );
            // Adiciona os componentes necessarios ao grupo
            grupo.add(
                grupo.pyraminx.octaedros[2],
                grupo.pyraminx.tetraedros[2],
                grupo.pyraminx.tetraedros[5],
                grupo.pyraminx.tetraedros[6],
                grupo.pyraminx.tetraedros[8]
            );
            break;
            case 'OctaedroD':
            // Utiliza o vertice de rotacao de tras D
            grupo.verticeRotacao = grupo.pyraminx.verticesRotacao[3];
            // Remove os componentes necessarios do pyraminx
            grupo.pyraminx.remove(
                grupo.pyraminx.octaedros[3],
                grupo.pyraminx.tetraedros[3],
                grupo.pyraminx.tetraedros[7],
                grupo.pyraminx.tetraedros[8],
                grupo.pyraminx.tetraedros[9]
            );
            // Adiciona os componentes necessarios ao grupo
            grupo.add(
                grupo.pyraminx.octaedros[3],
                grupo.pyraminx.tetraedros[3],
                grupo.pyraminx.tetraedros[7],
                grupo.pyraminx.tetraedros[8],
                grupo.pyraminx.tetraedros[9]
            );
            break;
            case 'FaceA':
            // Utiliza o vertice de rotacao do topo A
            grupo.verticeRotacao = grupo.pyraminx.verticesRotacao[3];
            // Remove os componentes necessarios do pyraminx
            grupo.pyraminx.remove(
                grupo.pyraminx.octaedros[0],
                grupo.pyraminx.octaedros[1],
                grupo.pyraminx.octaedros[2],
                grupo.pyraminx.tetraedros[0],
                grupo.pyraminx.tetraedros[1],
                grupo.pyraminx.tetraedros[2],
                grupo.pyraminx.tetraedros[4],
                grupo.pyraminx.tetraedros[5],
                grupo.pyraminx.tetraedros[6]
            );
            // Adiciona os componentes necessarios ao grupo
            grupo.add(
                grupo.pyraminx.octaedros[0],
                grupo.pyraminx.octaedros[1],
                grupo.pyraminx.octaedros[2],
                grupo.pyraminx.tetraedros[0],
                grupo.pyraminx.tetraedros[1],
                grupo.pyraminx.tetraedros[2],
                grupo.pyraminx.tetraedros[4],
                grupo.pyraminx.tetraedros[5],
                grupo.pyraminx.tetraedros[6]
            );
            break;
            case 'FaceB':
            // Utiliza o vertice de rotacao da esquerda B
            grupo.verticeRotacao = grupo.pyraminx.verticesRotacao[2];
            // Remove os componentes necessarios do pyraminx
            grupo.pyraminx.remove(
                grupo.pyraminx.octaedros[0],
                grupo.pyraminx.octaedros[1],
                grupo.pyraminx.octaedros[3],
                grupo.pyraminx.tetraedros[0],
                grupo.pyraminx.tetraedros[1],
                grupo.pyraminx.tetraedros[3],
                grupo.pyraminx.tetraedros[4],
                grupo.pyraminx.tetraedros[7],
                grupo.pyraminx.tetraedros[9]
            );
            // Adiciona os componentes necessarios ao grupo
            grupo.add(
                grupo.pyraminx.octaedros[0],
                grupo.pyraminx.octaedros[1],
                grupo.pyraminx.octaedros[3],
                grupo.pyraminx.tetraedros[0],
                grupo.pyraminx.tetraedros[1],
                grupo.pyraminx.tetraedros[3],
                grupo.pyraminx.tetraedros[4],
                grupo.pyraminx.tetraedros[7],
                grupo.pyraminx.tetraedros[9]
            );
            break;
            case 'FaceC':
            // Utiliza o vertice de rotacao da direita C
            grupo.verticeRotacao = grupo.pyraminx.verticesRotacao[1];
            // Remove os componentes necessarios do pyraminx
            grupo.pyraminx.remove(
                grupo.pyraminx.octaedros[0],
                grupo.pyraminx.octaedros[2],
                grupo.pyraminx.octaedros[3],
                grupo.pyraminx.tetraedros[0],
                grupo.pyraminx.tetraedros[2],
                grupo.pyraminx.tetraedros[3],
                grupo.pyraminx.tetraedros[6],
                grupo.pyraminx.tetraedros[8],
                grupo.pyraminx.tetraedros[9]
            );
            // Adiciona os componentes necessarios ao grupo
            grupo.add(
                grupo.pyraminx.octaedros[0],
                grupo.pyraminx.octaedros[2],
                grupo.pyraminx.octaedros[3],
                grupo.pyraminx.tetraedros[0],
                grupo.pyraminx.tetraedros[2],
                grupo.pyraminx.tetraedros[3],
                grupo.pyraminx.tetraedros[6],
                grupo.pyraminx.tetraedros[8],
                grupo.pyraminx.tetraedros[9]
            );
            break;
            case 'FaceD':
            // Utiliza o vertice de rotacao de tras D
            grupo.verticeRotacao = grupo.pyraminx.verticesRotacao[0];
            // Remove os componentes necessarios do pyraminx
            grupo.pyraminx.remove(
                grupo.pyraminx.octaedros[1],
                grupo.pyraminx.octaedros[2],
                grupo.pyraminx.octaedros[3],
                grupo.pyraminx.tetraedros[4],
                grupo.pyraminx.tetraedros[5],
                grupo.pyraminx.tetraedros[6],
                grupo.pyraminx.tetraedros[7],
                grupo.pyraminx.tetraedros[8],
                grupo.pyraminx.tetraedros[9]
            );
            // Adiciona os componentes necessarios ao grupo
            grupo.add(
                grupo.pyraminx.octaedros[1],
                grupo.pyraminx.octaedros[2],
                grupo.pyraminx.octaedros[3],
                grupo.pyraminx.tetraedros[4],
                grupo.pyraminx.tetraedros[5],
                grupo.pyraminx.tetraedros[6],
                grupo.pyraminx.tetraedros[7],
                grupo.pyraminx.tetraedros[8],
                grupo.pyraminx.tetraedros[9]
            );
            break;
            case 'PyraminxA':
            // Utiliza o vertice de rotacao do topo A
            grupo.verticeRotacao = grupo.pyraminx.verticesRotacao[0];
            // Remove os componentes necessarios do pyraminx
            grupo.pyraminx.remove(
                grupo.pyraminx.octaedros[0],
                grupo.pyraminx.octaedros[1],
                grupo.pyraminx.octaedros[2],
                grupo.pyraminx.octaedros[3],
                grupo.pyraminx.tetraedros[0],
                grupo.pyraminx.tetraedros[1],
                grupo.pyraminx.tetraedros[2],
                grupo.pyraminx.tetraedros[3],
                grupo.pyraminx.tetraedros[4],
                grupo.pyraminx.tetraedros[5],
                grupo.pyraminx.tetraedros[6],
                grupo.pyraminx.tetraedros[7],
                grupo.pyraminx.tetraedros[8],
                grupo.pyraminx.tetraedros[9]
            );
            // Adiciona os componentes necessarios ao grupo
            grupo.add(
                grupo.pyraminx.octaedros[0],
                grupo.pyraminx.octaedros[1],
                grupo.pyraminx.octaedros[2],
                grupo.pyraminx.octaedros[3],
                grupo.pyraminx.tetraedros[0],
                grupo.pyraminx.tetraedros[1],
                grupo.pyraminx.tetraedros[2],
                grupo.pyraminx.tetraedros[3],
                grupo.pyraminx.tetraedros[4],
                grupo.pyraminx.tetraedros[5],
                grupo.pyraminx.tetraedros[6],
                grupo.pyraminx.tetraedros[7],
                grupo.pyraminx.tetraedros[8],
                grupo.pyraminx.tetraedros[9]
            );
            break;
            case 'PyraminxB':
            // Utiliza o vertice de rotacao da esquerda B
            grupo.verticeRotacao = grupo.pyraminx.verticesRotacao[1];
            // Remove os componentes necessarios do pyraminx
            grupo.pyraminx.remove(
                grupo.pyraminx.octaedros[0],
                grupo.pyraminx.octaedros[1],
                grupo.pyraminx.octaedros[2],
                grupo.pyraminx.octaedros[3],
                grupo.pyraminx.tetraedros[0],
                grupo.pyraminx.tetraedros[1],
                grupo.pyraminx.tetraedros[2],
                grupo.pyraminx.tetraedros[3],
                grupo.pyraminx.tetraedros[4],
                grupo.pyraminx.tetraedros[5],
                grupo.pyraminx.tetraedros[6],
                grupo.pyraminx.tetraedros[7],
                grupo.pyraminx.tetraedros[8],
                grupo.pyraminx.tetraedros[9]
            );
            // Adiciona os componentes necessarios ao grupo
            grupo.add(
                grupo.pyraminx.octaedros[0],
                grupo.pyraminx.octaedros[1],
                grupo.pyraminx.octaedros[2],
                grupo.pyraminx.octaedros[3],
                grupo.pyraminx.tetraedros[0],
                grupo.pyraminx.tetraedros[1],
                grupo.pyraminx.tetraedros[2],
                grupo.pyraminx.tetraedros[3],
                grupo.pyraminx.tetraedros[4],
                grupo.pyraminx.tetraedros[5],
                grupo.pyraminx.tetraedros[6],
                grupo.pyraminx.tetraedros[7],
                grupo.pyraminx.tetraedros[8],
                grupo.pyraminx.tetraedros[9]
            );
            break;
            case 'PyraminxC':
            // Utiliza o vertice de rotacao da direita C
            grupo.verticeRotacao = grupo.pyraminx.verticesRotacao[2];
            // Remove os componentes necessarios do pyraminx
            grupo.pyraminx.remove(
                grupo.pyraminx.octaedros[0],
                grupo.pyraminx.octaedros[1],
                grupo.pyraminx.octaedros[2],
                grupo.pyraminx.octaedros[3],
                grupo.pyraminx.tetraedros[0],
                grupo.pyraminx.tetraedros[1],
                grupo.pyraminx.tetraedros[2],
                grupo.pyraminx.tetraedros[3],
                grupo.pyraminx.tetraedros[4],
                grupo.pyraminx.tetraedros[5],
                grupo.pyraminx.tetraedros[6],
                grupo.pyraminx.tetraedros[7],
                grupo.pyraminx.tetraedros[8],
                grupo.pyraminx.tetraedros[9]
            );
            // Adiciona os componentes necessarios ao grupo
            grupo.add(
                grupo.pyraminx.octaedros[0],
                grupo.pyraminx.octaedros[1],
                grupo.pyraminx.octaedros[2],
                grupo.pyraminx.octaedros[3],
                grupo.pyraminx.tetraedros[0],
                grupo.pyraminx.tetraedros[1],
                grupo.pyraminx.tetraedros[2],
                grupo.pyraminx.tetraedros[3],
                grupo.pyraminx.tetraedros[4],
                grupo.pyraminx.tetraedros[5],
                grupo.pyraminx.tetraedros[6],
                grupo.pyraminx.tetraedros[7],
                grupo.pyraminx.tetraedros[8],
                grupo.pyraminx.tetraedros[9]
            );
            break;
            case 'PyraminxD':
            // Utiliza o vertice de rotacao de tras D
            grupo.verticeRotacao = grupo.pyraminx.verticesRotacao[3];
            // Remove os componentes necessarios do pyraminx
            grupo.pyraminx.remove(
                grupo.pyraminx.octaedros[0],
                grupo.pyraminx.octaedros[1],
                grupo.pyraminx.octaedros[2],
                grupo.pyraminx.octaedros[3],
                grupo.pyraminx.tetraedros[0],
                grupo.pyraminx.tetraedros[1],
                grupo.pyraminx.tetraedros[2],
                grupo.pyraminx.tetraedros[3],
                grupo.pyraminx.tetraedros[4],
                grupo.pyraminx.tetraedros[5],
                grupo.pyraminx.tetraedros[6],
                grupo.pyraminx.tetraedros[7],
                grupo.pyraminx.tetraedros[8],
                grupo.pyraminx.tetraedros[9]
            );
            // Adiciona os componentes necessarios ao grupo
            grupo.add(
                grupo.pyraminx.octaedros[0],
                grupo.pyraminx.octaedros[1],
                grupo.pyraminx.octaedros[2],
                grupo.pyraminx.octaedros[3],
                grupo.pyraminx.tetraedros[0],
                grupo.pyraminx.tetraedros[1],
                grupo.pyraminx.tetraedros[2],
                grupo.pyraminx.tetraedros[3],
                grupo.pyraminx.tetraedros[4],
                grupo.pyraminx.tetraedros[5],
                grupo.pyraminx.tetraedros[6],
                grupo.pyraminx.tetraedros[7],
                grupo.pyraminx.tetraedros[8],
                grupo.pyraminx.tetraedros[9]
            );
            break;
            default: // Caso o nome de grupo nao exista
            return null; // Retorna null
        }

        return grupo; // Retorna o grupo
    }

    // Desmonta o grupo atual dentro do pyraminx e salva o estado atual dos componentes caso salvar = true
    grupo.desmontar = function(salvar) {
        while (!grupo.estaVazio()) { // Ate que o grupo esteja vazio
            let parte = grupo.children[0]; // Obtem o primeiro componente do grupo
            grupo.remove(parte); // Remove o componente do grupo
            grupo.pyraminx.add(parte); // Adiciona o de volta o componente no pyraminx
            // Caso salvar = true, aplica as alteracoes feitas pelo grupo no componente
            salvar ? parte.applyMatrix(grupo.matrix) : null;
        }
        grupo.quaternion.set(0, 0, 0, 1); // Reseta o quaternion aplicado no grupo
        grupo.matrix.identity(); // Reseta a matriz de transformacao do grupo
    }

    // Rotaciona um determinado grupo pelo nome
    grupo.rotacionar = function(nome) { // Essa funcao e de padrao TakeUntil, retorna uma funcao configurada
        if (grupo.montar(nome) == null) { // Monta o grupo desejado
            return null; // Retorna null caso o nome de grupo nao exista
        }

        let frames = 60; // Considerando que a tela possui 60 frames por segundo
        let anguloTotal = 2 * Math.PI / 3; // Angulo total igual 120 graus
        let anguloParcial = anguloTotal / frames; // Calcula o angulo parcial por frame

        let quaternion = new THREE.Quaternion(); // Cria um quaternion para o angulo total
        let quaternionParcial = new THREE.Quaternion(); // Cria um quaternion para o angulo parcial

        // Configura o quaternion de angulo total com o vertice de rotacao atual do grupo
        quaternion.setFromAxisAngle(grupo.verticeRotacao, anguloTotal);
        // Configura o quaternion de angulo parcial com o vertice de rotacao atual do grupo
        quaternionParcial.setFromAxisAngle(grupo.verticeRotacao, anguloParcial);

        // Funcao de rotacao
        function aplicarRotacao() {
            if (frames > 0) { // Caso frames seja maior que 0
                grupo.applyQuaternion(quaternionParcial); // Aplica o quaternion parcial no grupo
            }
            else if (frames == 0) { // Caso frames seja 0
                grupo.desmontar(true); // Desmonta o grupo e salva o estado dos componentes
                grupo.organizar(nome); // Reorganiza o grupo reposicionando suas referencias
            }
            frames--; // Decrementa frames
        }

        return aplicarRotacao; // Retorna a funcao de rotacao
    }

    // Reorganiza as referencias dos tetraedros e octaedros pelo grupo
    grupo.organizar = function(nome) { // Essa funcao recebe o nome do grupo utilizado
        switch (nome) { // Testa o nome do grupo
            case 'OctaedroA': case 'LinhaA':
            grupo.trocar('tetraedros', 3, 2, 1); // O tetraedro 3 recebe 2, o 2 recebe 1 e o 1 recebe 3
            break;
            case 'OctaedroB': case 'LinhaB':
            grupo.trocar('tetraedros', 1, 5, 7); // O tetraedro 1 recebe 5, o 5 recebe 7 e o 7 recebe 1
            break;
            case 'OctaedroC': case 'LinhaC':
            grupo.trocar('tetraedros', 5, 2, 8); // O tetraedro 5 recebe 2, o 2 recebe 8 e o 8 recebe 5
            break;
            case 'OctaedroD': case 'LinhaD':
            grupo.trocar('tetraedros', 3, 7, 8); // O tetraedro 3 recebe 7, o 7 recebe 8 e o 8 recebe 3
            break;
            case 'PyraminxA':
            grupo.trocar('octaedros', 3, 2, 1); // O octaedro 3 recebe 2, o 2 recebe 1 e o 1 recebe 3
            grupo.trocar('tetraedros', 4, 9, 6); // O tetraedro 4 recebe 9, o 9 recebe 6 e o 6 recebe 4
            grupo.trocar('tetraedros', 8, 5, 7); // O tetraedro 8 recebe 5, o 5 recebe 7 e o 7 recebe 8
            grupo.trocar('tetraedros', 3, 2, 1); // O tetraedro 3 recebe 2, o 2 recebe 1 e o 1 recebe 3
            break;
            case 'PyraminxB':
            grupo.trocar('octaedros', 0, 2, 3); // O octaedro 0 recebe 2, o 2 recebe 3 e o 3 recebe 0
            grupo.trocar('tetraedros', 0, 6, 9); // O tetraedro 0 recebe 6, o 6 recebe 9 e o 9 recebe 0
            grupo.trocar('tetraedros', 2, 8, 3); // O tetraedro 2 recebe 8, o 8 recebe 3 e o 3 recebe 2
            grupo.trocar('tetraedros', 1, 5, 7); // O tetraedro 1 recebe 5, o 5 recebe 7 e o 7 recebe 1
            break;
            case 'PyraminxC':
            grupo.trocar('octaedros', 0, 3, 1); // O octaedro 0 recebe 3, o 3 recebe 1 e o 1 recebe 0
            grupo.trocar('tetraedros', 0, 9, 4); // O tetraedro 0 recebe 9, o 9 recebe 4 e o 4 recebe 0
            grupo.trocar('tetraedros', 1, 3, 7); // O tetraedro 1 recebe 3, o 3 recebe 7 e o 7 recebe 1
            grupo.trocar('tetraedros', 5, 2, 8); // O tetraedro 5 recebe 2, o 2 recebe 8 e o 8 recebe 5
            break;
            case 'PyraminxD':
            grupo.trocar('octaedros', 0, 1, 2); // O octaedro 0 recebe 1, o 1 recebe 2 e o 2 recebe 0
            grupo.trocar('tetraedros', 0, 4, 6); // O tetraedro 0 recebe 4, o 4 recebe 6 e o 6 recebe 0
            grupo.trocar('tetraedros', 1, 5, 2); // O tetraedro 1 recebe 5, o 5 recebe 2 e o 2 recebe 1
            grupo.trocar('tetraedros', 3, 7, 8); // O tetraedro 3 recebe 7, o 7 recebe 8 e o 8 recebe 3
            break;
            case 'FaceA':
            grupo.trocar('octaedros', 0, 1, 2); // O octaedro 0 recebe 1, o 1 recebe 2 e o 2 recebe 0
            grupo.trocar('tetraedros', 0, 4, 6); // O tetraedro 0 recebe 4, o 4 recebe 6 e o 6 recebe 0
            grupo.trocar('tetraedros', 1, 5, 2); // O tetraedro 1 recebe 5, o 5 recebe 2 e o 2 recebe 1
            break;
            case 'FaceB':
            grupo.trocar('octaedros', 0, 3, 1); // O octaedro 0 recebe 3, o 3 recebe 1 e o 1 recebe 0
            grupo.trocar('tetraedros', 0, 9, 4); // O tetraedro 0 recebe 9, o 9 recebe 4 e o 4 recebe 0
            grupo.trocar('tetraedros', 1, 3, 7); // O tetraedro 1 recebe 3, o 3 recebe 7 e o 7 recebe 1
            break;
            case 'FaceC':
            grupo.trocar('octaedros', 0, 2, 3); // O octaedro 0 recebe 2, o 2 recebe 3 e o 3 recebe 0
            grupo.trocar('tetraedros', 0, 6, 9); // O tetraedro 0 recebe 6, o 6 recebe 9 e o 9 recebe 0
            grupo.trocar('tetraedros', 2, 8, 3); // O tetraedro 2 recebe 8, o 8 recebe 3 e o 3 recebe 2
            break;
            case 'FaceD':
            grupo.trocar('octaedros', 3, 2, 1); // O octaedro 3 recebe 2, o 2 recebe 1 e o 1 recebe 3
            grupo.trocar('tetraedros', 4, 9, 6); // O tetraedro 4 recebe 9, o 9 recebe 6 e o 6 recebe 4
            grupo.trocar('tetraedros', 8, 5, 7); // O tetraedro 8 recebe 5, o 5 recebe 7 e o 7 recebe 8
            break;
            default: // Caso o nome de grupo nao exista
            return null; // Retorna null
        }

        return grupo; // Retorna o grupo atual
    }

    // Funcao que troca a posicao de tres componentes em uma propriedade
    grupo.trocar = function(nomePropriedade, p1, p2, p3) { // Utilizada para as propriedades 'tetraedros' e 'octaedros'
        let p4 = grupo.pyraminx[nomePropriedade][p1]; // p4 recebe p1;
        grupo.pyraminx[nomePropriedade][p1] = grupo.pyraminx[nomePropriedade][p2]; // p1 recebe p2
        grupo.pyraminx[nomePropriedade][p2] = grupo.pyraminx[nomePropriedade][p3]; // p2 recebe p3
        grupo.pyraminx[nomePropriedade][p3] = p4; // p3 recebe p4
        return grupo; // Retorna o grupo
    }

    // Verifica se o grupo esta vazio
    grupo.estaVazio = function() {
        return grupo.children.length == 0; // Retorna true caso o grupo nao tenha nenhum componente
    }

    return grupo; // Retorna o grupo criado e configurado
}