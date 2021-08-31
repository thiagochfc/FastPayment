import ITransactionRepository from '../../domain/interfaces/ITransactionRepository'
import { Transaction } from '../../domain/model/Transaction';

export class TransactionRepositoryMemory implements ITransactionRepository {
    private transaction: Transaction[];

    constructor() {
        this.transaction = [];
    }

    async registry(transaction: Transaction): Promise<void> {
        this.transaction.push(transaction);
    }
    async getAll(): Promise<Transaction[]> {
        return this.transaction;
    }

}
