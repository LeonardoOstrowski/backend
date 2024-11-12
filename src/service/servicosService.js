import con from "../repository/connection.js";
import validarInsercaoServico from "../validation/inserirValidationServicos.js";

export async function inserirServico(servico) {
    validarInsercaoServico(servico);

    const comando = `INSERT INTO servicos (descricao, data, custo) VALUES (?, ?, ?)`;
    let [resultado] = await con.query(comando, [servico.descricao, servico.data, servico.custo]);
    return resultado.insertId;
}

export async function listarServicos() {
    const comando = `SELECT * FROM servicos`;
    let [servicos] = await con.query(comando);
    return servicos;
}

export async function consultarServicoPorId(id) {
    const comando = `SELECT * FROM servicos WHERE id = ?`;
    const [servico] = await con.query(comando, [id]);
    return servico[0];
}

export async function atualizarServico(id, servico) {
    validarInsercaoServico(servico);

    const comando = `UPDATE servicos SET descricao = ?, data = ?, custo = ? WHERE id = ?`;
    await con.query(comando, [servico.descricao, servico.data, servico.custo, id]);
}

export async function deletarServico(id) {
    const comando = `DELETE FROM servicos WHERE id = ?`;
    await con.query(comando, [id]);
}
