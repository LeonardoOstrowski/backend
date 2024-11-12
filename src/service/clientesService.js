import con from "../repository/connection.js";
import validarInsercaoCliente from "../validation/inserirValidationClientes.js";

export async function inserirCliente(cliente) {
    validarInsercaoCliente(cliente);

    const comando = `
        INSERT INTO clientes (nome, servico_id, endereco, telefone, cpf)
        VALUES (?, ?, ?, ?, ?)
    `;

    let [resultado] = await con.query(comando, [
        cliente.nome,
        cliente.servico_id,
        cliente.endereco,
        cliente.telefone,
        cliente.cpf
    ]);

    return resultado.insertId;
}

export async function listarClientes() {
    const comando = `SELECT * FROM clientes`;
    let [clientes] = await con.query(comando);
    return clientes;
}

export async function atualizarCliente(id, cliente) {
    validarInsercaoCliente(cliente);

    const comando = `
        UPDATE clientes
        SET
            nome = ?,
            servico_id = ?,
            endereco = ?,
            telefone = ?,
            cpf = ?
        WHERE id = ?
    `;

    await con.query(comando, [
        cliente.nome,
        cliente.servico_id,
        cliente.endereco,
        cliente.telefone,
        cliente.cpf,
        id
    ]);
}

export async function deletarCliente(id) {
    const comando = `DELETE FROM clientes WHERE id = ?`;
    await con.query(comando, [id]);
}
