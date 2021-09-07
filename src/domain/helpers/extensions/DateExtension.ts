interface Date {
    /**
     * Adiciona dia(s) na data atual.
     * @param days Quantidade de dia(s) a ser(e)m adicionado(s).
     * @returns Retorna a data com o(s) dia(s) adicionado.
     */
    addDays(days: number) : Date;
}

Date.prototype.addDays = function(days: number): Date {
    const date = new Date();

    if (days > 0) {
        date.setDate(date.getDate() + days);
    }

    return date;
}
