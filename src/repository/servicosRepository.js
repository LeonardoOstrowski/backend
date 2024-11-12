import con from './connection.js';

export async function inserirServico(servico) {
    const comando = `INSERT INTO servicos (descricao, data, custo) VALUES (?, ?, ?)`;
    let [resultado] = await con.query(comando, [servico.descricao, servico.data, servico.custo]);
    return resultado.insertId;
}

export async function listarServicos() {
    const comando = `SELECT * FROM servicos`;
    let [servicos] = await con.query(comando);
    return servicos;
}

export async function atualizarServico(id, servico) {
    const comando = `UPDATE servicos SET descricao = ?, data = ?, custo = ? WHERE id = ?`;
    await con.query(comando, [servico.descricao, servico.data, servico.custo, id]);
}

export async function deletarServico(id) {
    const comando = `DELETE FROM servicos WHERE id = ?`;
    await con.query(comando, [id]);
}
