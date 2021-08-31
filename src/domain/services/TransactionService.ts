import TransactionDto from "../dto/TransactionDto";
import { PaymentMethod } from "../enum/PaymentMethod";
import ITransactionRepository from "../interfaces/ITransactionRepository";
import { Card } from "../model/Card";
import { Transaction } from "../model/Transaction";

export class TransactionService {
    private readonly _repository: ITransactionRepository;

    constructor(repository: ITransactionRepository) {
        this._repository = repository;
    }

    /**
     * Processa a transação.
     * @param transactionDto Informações da transação.
     */
    async process(transactionDto: TransactionDto): Promise<void> {
        const paymentMethod = transactionDto.paymentMethod == "debit_card" ? PaymentMethod.debit_card : PaymentMethod.credit_card;
        const card = new Card(transactionDto.card.number, transactionDto.card.holder_name, transactionDto.card.expiration_date, transactionDto.card.cvv);
        const transaction = new Transaction(transactionDto.value, transactionDto.description, paymentMethod, card);
        
        await this._repository.registry(transaction);
    }

    /**
     * Obtém todas as transações.
     * @returns Informações da transação.
     */
    async getAll(): Promise<TransactionDto[]> {
        const transactions = await this._repository.getAll();
        const mapperTransactionForTransactionDto = this.mapperTransactionForTransactionDto;
        const transactionsDto = transactions.map(function(transaction) {
            return mapperTransactionForTransactionDto(transaction);
        });

        return transactionsDto;
    }

    /**
     * Mapeia um objeto Transaction para um Dto de Transaction.
     * @param transaction Transação.
     * @returns Retorna um Dto de Transaction.
     */
    private mapperTransactionForTransactionDto(transaction: Transaction): TransactionDto {
        const transactionCardDto = transaction.getCard();
        const transactionDto: TransactionDto = {
            value: transaction.getValue(),
            description: transaction.getDescription(),
            paymentMethod: transaction.getPaymentMethod() == PaymentMethod.debit_card ? "debit_card" : "credit_card",
            card: {
                number: transactionCardDto.getNumber(),
                holder_name: transactionCardDto.getHolderName(),
                expiration_date: transactionCardDto.getExpirationDate(),
                cvv: transactionCardDto.getCvv()
            }
        };

        return transactionDto;
    }
}
