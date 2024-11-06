import con from "./connection.js"

export async function login(credenciais) {
    const comando = `SELECT * FROM users WHERE name = ? AND password = ?`;

    const [registros] = await con.query(comando, [credenciais.name, credenciais.password])
    return registros[0];
}
