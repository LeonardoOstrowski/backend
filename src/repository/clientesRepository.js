import con from './connection.js';

export async function inserirCliente(cliente) {
    const comando = `INSERT INTO clientes (nome, data, servico) VALUES (?, ?, ?)`;
    let [resultado] = await con.query(comando, [
        cliente.nome,
        cliente.data,
        cliente.servico
    ]);
    return resultado.insertId;
}

export async function listarClientes() {
    const comando = `SELECT * FROM clientes`;
    let [clientes] = await con.query(comando);
    return clientes;
}

export async function atualizarCliente(id, cliente) {
    const comando = `UPDATE clientes SET nome = ?, data = ?, servico = ? WHERE id = ?`;
    await con.query(comando, [
        cliente.nome,
        cliente.data,
        cliente.servico,
        id
    ]);
}

export async function deletarCliente(id) {
    const comando = `DELETE FROM clientes WHERE id = ?`;
    await con.query(comando, [id]);
}
