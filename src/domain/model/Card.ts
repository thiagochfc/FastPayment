export class Card {
    private number: number;
    private holder_name: string;
    private expiration_date: string;
    private cvv: number;

    constructor(number: number, 
        holder_name: string, 
        expiration_date: string, 
        cvv: number) {
            this.number = this.leftFourDigits(number);
            this.holder_name = holder_name;
            this.expiration_date = expiration_date;
            this.cvv = cvv;
    }

    public getNumber(): number {
        return this.number;
    }

    public getHolderName(): string {
        return this.holder_name;
    }

    public getExpirationDate(): string {
        return this.expiration_date;
    }

    public getCvv(): number {
        return this.cvv;
    }

    private leftFourDigits(number: number): number {
        try {
            return Number.parseFloat(number.toString().substr(-4));
        }
        catch (error) {
            throw new Error(`Não foi possível converter o valor ${number} para número!`);
        }
    }
}