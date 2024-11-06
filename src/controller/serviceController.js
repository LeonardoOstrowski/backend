import { Router } from 'express';
import {
    inserirServico,
    listarServicos,
    atualizarServico,
    deletarServico,
    consultarServicoPorId
} from '../service/servicosService.js';

const endpoints = Router();

endpoints.post('/', async (req, res) => {
    try {
        const servico = req.body;
        const id = await inserirServico(servico);
        res.status(201).send({ id_servico: id });
    } catch (err) {
        res.status(400).send({ erro: err.message });
    }
});

endpoints.get('/', async (req, res) => {
    try {
        const servicos = await listarServicos();
        res.send(servicos);
    } catch (err) {
        res.status(500).send({ erro: err.message });
    }
});

endpoints.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const servico = await consultarServicoPorId(id);
        if (!servico) {
            return res.status(404).send({ erro: 'Serviço não encontrado' });
        }
        res.send(servico);
    } catch (err) {
        res.status(500).send({ erro: err.message });
    }
});

endpoints.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const servico = req.body;
        await atualizarServico(id, servico);
        res.send({ mensagem: 'Serviço atualizado com sucesso' });
    } catch (err) {
        res.status(400).send({ erro: err.message });
    }
});

endpoints.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await deletarServico(id);
        res.status(204).send();
    } catch (err) {
        res.status(400).send({ erro: err.message });
    }
});

export default endpoints;
