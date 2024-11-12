export default function validarInsercaoCliente(cliente) {
    if (!cliente.nome) {
        throw new Error('Nome do cliente é obrigatório');
    }
    if (cliente.nome.length < 3) {
        throw new Error('Nome do cliente deve ter pelo menos 3 caracteres');
    }

    if (!cliente.servico_id) {
        throw new Error('ID do serviço é obrigatório');
    }
    if (isNaN(cliente.servico_id) || cliente.servico_id <= 0) {
        throw new Error('ID do serviço deve ser um número válido');
    }

    if (!cliente.endereco) {
        throw new Error('Endereço é obrigatório');
    }

    if (!cliente.telefone) {
        throw new Error('Telefone é obrigatório');
    }
    if (!cliente.cpf) {
        throw new Error('CPF é obrigatório');
    }
}
