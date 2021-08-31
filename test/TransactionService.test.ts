import CardDto from "../src/domain/dto/CardDto";
import TransactionDto from "../src/domain/dto/TransactionDto";
import { TransactionService } from "../src/domain/services/TransactionService";
import { TransactionRepositoryMemory } from "../src/infra/memory/TransactionRepositoryMemory";

const cardDto: CardDto = {
    number: 1234567890123456,
    holder_name: 'Holder Name',
    expiration_date: '112030',
    cvv: 1516
}

const transactionDto: TransactionDto = {
    value: 300.00,
    description: 'Air Frye',
    paymentMethod: "credit_card",
    card: cardDto
}

test('Criando uma transação', async function () {
    const transactionService = new TransactionService(new TransactionRepositoryMemory());
    transactionService.process(transactionDto);
    expect((await transactionService.getAll()).length).toBe(1);
})