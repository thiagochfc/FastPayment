import CardDto from "./CardDto";

export default interface TransactionDto {
    value: number;
    description: string;
    paymentMethod: string;
    card: CardDto;
}