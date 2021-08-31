import { Transaction } from "../model/Transaction";

export default interface ITransactionRespotiroy {
    registry(transaction: Transaction): Promise<void>;
    getAll(): Promise<Transaction[]>;
}