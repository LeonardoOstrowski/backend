import { Router } from 'express';
import { inserirCliente, listarClientes, atualizarCliente, deletarCliente } from '../service/clientesService.js';

const endpoints = Router();

endpoints.post('/', async (req, res) => {
    try {
        const cliente = req.body;
        const id = await inserirCliente(cliente);
        res.status(201).send({ id_cliente: id });
    } catch (err) {
        res.status(400).send({ erro: err.message });
    }
});

endpoints.get('/', async (req, res) => {
    try {
        const clientes = await listarClientes();
        res.send(clientes);
    } catch (err) {
        res.status(500).send({ erro: err.message });
    }
});

endpoints.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = req.body;
        await atualizarCliente(id, cliente);
        res.send({ mensagem: 'Cliente atualizado com sucesso' });
    } catch (err) {
        res.status(400).send({ erro: err.message });
    }
});

endpoints.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await deletarCliente(id);
        res.status(204).send();
    } catch (err) {
        res.status(400).send({ erro: err.message });
    }
});

export default endpoints;
