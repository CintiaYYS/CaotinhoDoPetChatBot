import Produtos from "../Model/Produtos.js"

export default class ProdutoDAO{

    constructor(){
        this.init();
    }

    async init(){
        try{
            //Criando a tabela, caso ela não exista
            const sql = `CREATE TABLE IF NOT EXISTS produtos(
                    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                    nome VARCHAR(100) NOT NULL,
                    pet VARCHAR(100) NOT NULL,
                    descricao VARCHAR(250) NOT NULL,
                    valor DECIMAL(6,2) NOT NULL,
                    dataInicio DATE NOT NULL,
                    dataFinal DATE NOT NULL
            )`
            const conexao = await conectar();
            await conexao.execute(sql);
            console.log("Tabela Produto iniciada com sucesso!");
        }catch(erro){
            console.log("Não foi possível criar a tabela Produto, erro: "+erro.message);
        }
    }

    async gravar(produto) {
        if (produto instanceof Produtos) {
            const sql = `INSERT INTO produtos(nome,pet,descricao,
                                             valor,dataInicio,dataFinal)
                        VALUES (?,?,?,?,?,?)`;
            const parametros = [produto.nome,
                produto.pet,
                produto.descricao,
                produto.valor,            
                produto.dataInicio,
                produto.dataFinal];
            const conexao = await conectar();
            const resultado = await conexao.execute(sql, parametros);
            produto.id = resultado[0].insertId;
        }
    }

    async alterar(produto) {
        if (produto instanceof Produtos) {
            const sql = `UPDATE produtos SET  nome = ? , pet = ?,
                        descricao = ?, valor = ?, dataInicio = ?,
                        dataFinal = ?
                        WHERE id = ?`;
            const parametros = [produto.nome,
                produto.pet,
                produto.descricao,
                produto.valor,
                produto.dataInicio,
                produto.dataFinal,
                produto.id];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);
        }
    }

    async excluir(produto) {
        if (produto instanceof Produtos) {
            const sql = `DELETE FROM produtos  WHERE id = ?`;
            const parametros = [produto.id];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);
        }
    }

    async consultar() {

        const sql = "SELECT * FROM produto order by nome";
        const conexao = await conectar();
        const [registros, campos] = await conexao.query(sql);
        let listaProdutos=[];
        for (const registro of registros){
            const servico = new Servico(registro['id'],
                                        registro['nome'],
                                        registro['pet'],
                                        registro['descricao'],
                                        registro['valor'],
                                        registro['dataInicio'],
                                        registro['dataFinal']);
                
            listaProdutos.push(produto);
        }
        return listaProdutos;
    }
}