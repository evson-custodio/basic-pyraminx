// Funcao que retorna um objeto com as medidas de um tetraedro regular de tamanho passado
function TetraedronMath(tamanhoAresta) {
    // Funcao que calcula a altura de um tetraedro regular
    function altura() {
        return tamanhoAresta * Math.sqrt(6) / 3; // retorna uma altura
    }

    // Funcao que calcula o baricentro de um tetraedro regular
    function baricentro() {
        return altura() / 4; // retorna um baricentro
    }

    // Funcao que calcula a altura do triangulo de uma face de um tetraedro regular
    function alturaBase() {
        return tamanhoAresta * Math.sqrt(3) / 2; // retorna a altura de um triangulo equilatero
    }

    // Funcao que calcula o baricentro do triangulo de uma face de um tetraedro regular
    function baricentroBase() {
        return alturaBase() / 3; // retorna o baricentro de um triangulo equilatero
    }

    // Cria objeto com os valores das medidas de um tetraedro de tamanho passado
    let tetraedroMath = {
        tamanhoAresta: tamanhoAresta, // Tamanho da aresta igual ao tamanho passado para a funcao
        altura: altura(), // Chama a funcao altura() para definir a altura do objeto
        baricentro: baricentro(), // Chama a funcao altura() para definir a baricentro do objeto
        alturaBase: alturaBase(), // Chama a funcao altura() para definir a alturaBase do objeto
        baricentroBase: baricentroBase() // Chama a funcao altura() para definir a baricentroBase do objeto
    }

    return tetraedroMath; // Retorna o objeto com as medidas
}