import { PaymentMethod } from "../enum/PaymentMethod";
import { StatusPayable } from "../enum/StatusPayable";
import '../helpers/extensions/DateExtension';

export class Payable {
    //private value: number;
    private status!: StatusPayable;
    private payment_date!: Date;
    private fee!: number;
    private valueToPay!: number;

    public constructor(value: number, paymentMethod: PaymentMethod) {
         this.configureInitial(paymentMethod);
         this.valueToPay = value - (value * this.fee);
    }

    public getStatus(): StatusPayable {
        return this.status;
    }

    public getPaymentDate(): Date {
        return this.payment_date;
    }

    public getValueToPay(): number {
        return this.valueToPay;
    }

    /**
     * configuração inicial das propriedades que dependem do método de pagamento.
     * @param paymentMethod Método de pagamento.
     */
    private configureInitial(paymentMethod: PaymentMethod): void {
        const DIAS_A_SEREM_ADICIONADOS_AO_PAGAMENTO = 30;
        const TRES_PORCENTO = 0.03;
        const CINCO_PORCENTO = 0.05;

        if (paymentMethod == PaymentMethod.debit_card){
            this.status = StatusPayable.paid;
            this.payment_date = new Date();
            this.fee = TRES_PORCENTO;
        }
        else 
        {
            this.status = StatusPayable.waiting_funds;
            this.payment_date = new Date().addDays(DIAS_A_SEREM_ADICIONADOS_AO_PAGAMENTO);
            this.fee = CINCO_PORCENTO;
        }
    }
}
