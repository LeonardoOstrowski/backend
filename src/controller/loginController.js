import { gerarToken } from '../utils/jwt.js';

import { Router } from 'express';
import logarService from "../service/logarService.js";
const endpoints = Router();


endpoints.post('/login', async (req, resp) => {
    try {
        let credenciais = req.body;

        let info = await logarService(credenciais);

        let token = gerarToken(info)

        resp.send({ token });

    } catch (err) {
        resp.status(401).send({ erro: err.message });
    }
})

export default endpoints;