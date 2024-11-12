import mysql from 'mysql2/promise';

async function connectToDatabase() {
    let connection;
    const connect = async () => {
        try {
            connection = await mysql.createConnection({
                host: process.env.MYSQL_HOST,
                user: process.env.MYSQL_USER,
                password: process.env.MYSQL_PWD,
                database: process.env.MYSQL_DB,
                port: process.env.MYSQL_PORT,
            });
            console.log('--> BD conectado');

            connection.on('error', async (err) => {
                console.error('Erro na conexão com o BD:', err);
                if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                    console.log('--> Tentando reconectar...');
                    await connect(); // Tenta reconectar
                } else {
                    throw err;
                }
            });

            setInterval(async () => {
                try {
                    await connection.ping();
                    console.log('--> Ping bem-sucedido para manter a conexão ativa');
                } catch (pingError) {
                    console.error('--> Erro ao tentar ping:', pingError);
                    await connect();
                }
            }, 30000);

        } catch (error) {
            console.error('Erro ao conectar no BD:', error);
            setTimeout(connect, 2000);
        }
    };

    await connect();
    return connection;
}

const con = await connectToDatabase();
export default con;
