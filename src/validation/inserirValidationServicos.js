export default function validarInsercaoServico(servico) {
    if (!servico.descricao) {
        throw new Error('Descrição do serviço é obrigatória');
    }
    if (servico.descricao.length < 3) {
        throw new Error('Descrição do serviço deve ter pelo menos 3 caracteres');
    }
}