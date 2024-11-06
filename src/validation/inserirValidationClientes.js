export default function validarInsercaoCliente(cliente) {
    if (!cliente.nome) {
        throw new Error('Nome do cliente é obrigatório');
    }
    if (cliente.nome.length < 3) {
        throw new Error('Nome do cliente deve ter pelo menos 3 caracteres');
    }
    if (!cliente.data) {
        throw new Error('Data é obrigatória');
    }
    if (!cliente.servico) {
        throw new Error('Serviço é obrigatório');
    }
}