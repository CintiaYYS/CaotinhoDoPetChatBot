export default class Produtos{
    #id
    #nome
    #pet
    #descricao
    #valor
    #dataInicio
    #dataFinal

    constructor(id=0,nome,pet,descricao,valor,dataInicio,dataFinal){
        this.#id=id;
        this.#nome = nome;
        this.#pet = pet;
        this.#descricao=descricao;
        this.#valor=valor;
        this.#dataInicio=dataInicio;
        this.#dataFinal=dataFinal;
    }

    get id(){
        return this.#id;
    }

    set id(novoId){
        this.#id = novoId;
    }

    get nome(){
        return this.#nome;
    }

    set nome(novoNome){
        this.#nome = novoNome;
    }
}