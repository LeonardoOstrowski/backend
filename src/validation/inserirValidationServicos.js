export default function validarInsercaoServico(servico) {
    if (!servico.descricao) {
        throw new Error('Descrição do serviço é obrigatória');
    }
}