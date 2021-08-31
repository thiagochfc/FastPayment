import { PaymentMethod } from "../enum/PaymentMethod";
import { Card } from "./Card";

export class Transaction {
    
    private value: number;
    private description: string;
    private paymentMethod: PaymentMethod;
    private card: Card;

    public constructor(value: number,
        description: string,
        paymentMethod: PaymentMethod,
        card: Card) {
            this.value = value;
            this.description = description;
            this.paymentMethod = paymentMethod;
            this.card = card;
    }

    public getValue(): number {
        return this.value;
    }

    public getDescription(): string {
        return this.description;
    }

    public getPaymentMethod(): PaymentMethod {
        return this.paymentMethod;
    }

    public getCard(): Card {
        return this.card;
    }
}