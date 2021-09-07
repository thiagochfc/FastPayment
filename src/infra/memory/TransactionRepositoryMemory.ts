import ITransactionRepository from '../../domain/interfaces/ITransactionRepository'
import { Transaction } from '../../domain/model/Transaction';

export class TransactionRepositoryMemory implements ITransactionRepository {
    private static transaction: Transaction[];

    constructor() {
        TransactionRepositoryMemory.transaction = [];
    }

    async registry(transaction: Transaction): Promise<void> {
        TransactionRepositoryMemory.transaction.push(transaction);
    }
    async getAll(): Promise<Transaction[]> {
        return TransactionRepositoryMemory.transaction;
    }
}
