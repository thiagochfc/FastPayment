import { PaymentMethod } from "../src/domain/enum/PaymentMethod";
import { StatusPayable } from "../src/domain/enum/StatusPayable";
import { Payable } from "../src/domain/model/Payable";

const payablePaid = new Payable(100.00, PaymentMethod.debit_card);
const payableWaitingFunds = new Payable(100.00, PaymentMethod.credit_card);

test('Ao criar Payable com método de pagamento cartão de débito, deve retornar status paid (pago)', function() {
    expect(payablePaid.getStatus()).toBe(StatusPayable.paid);
});

test('Ao criar Payable com método de pagamento cartão de débito, deve retornar data atual', function() {
    expect(payablePaid.getPaymentDate().toString()).toBe(new Date().toString());
});

test('Ao criar Payable com método de pagamento cartão de crédito, deve retornar status waiting_funds (aguardando pagamento)', function() {
    expect(payableWaitingFunds.getStatus()).toBe(StatusPayable.waiting_funds);
});

test('Ao criar Payable com método de pagamento cartão de crédito, deve retornar Data daqui a 30 dias (D+30)', function() {
    jest.useFakeTimers('modern').setSystemTime(new Date(2021, 6, 30));
    const payable = new Payable(100.00, PaymentMethod.credit_card);
    expect(payable.getPaymentDate().toString()).toBe(new Date(2021, 7, 29).toString());
});

test('Ao criar Payable com método de pagamento cartão de débito e com valor de 100.00, reve retornar valor a pagar de 97.00', function() {
    expect(payablePaid.getValueToPay()).toBe(97.00);
});

test('Ao criar Payable com método de pagamento cartão de crédito e com valor de 100.00, reve retornar valor a pagar de 95.00', function() {
    expect(payableWaitingFunds.getValueToPay()).toBe(95.00);
});