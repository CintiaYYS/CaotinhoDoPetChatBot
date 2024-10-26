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

    get pet(){
        return this.#pet;
    }

    set pet(novoPet){
        this.#pet = novoPet;
    }

    get descricao(){
        return this.#descricao;
    }

    set descricao(novoDescricao){
        this.#descricao = novoDescricao;
    }

    get valor(){
        return this.#valor;
    }

    set valor(novoValor){
        this.#valor = novoValor;
    }

    get dataInicio(){
        return this.#dataInicio;
    }

    set dataInicio(novoDataInicio){
        this.#dataInicio = novoDataInicio;
    }

    get dataFinal(){
        return this.#dataFinal;
    }

    set dataFinal(novoDataFinal){
        this.#dataFinal = novoDataFinal;
    }

    toJSON(){
        return{
            id:this.#id,
            nome:this.#nome,
            pet:this.#pet,
            descricao:this.#descricao,
            valor:this.#valor,
            dataInicio:this.#dataInicio,
            dataFinal:this.#dataFinal
        }
    }
}