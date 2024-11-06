import clienteController from './controller/clienteController.js';
import serviceController from './controller/serviceController.js';
import usersController from "./controller/loginController.js";

export default function adicionarRotas(servidor) {
    servidor.use('/api/clientes', clienteController);
    servidor.use('/api/servicos', serviceController);
    servidor.use('/api/users', usersController);
}
