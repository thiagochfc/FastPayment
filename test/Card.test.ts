import { Card } from "../src/domain/model/Card";

test('Ao informar um cartão e depois obter o número, deve retornar apenas os últimos 4 digitos!', function() {
    const card = new Card(1234567890123456, "Holder Name", "112030", 5611);
    expect(card.getNumber()).toBe(3456);
});