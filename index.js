import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_TAlWx8HCDAEM6lnK2zkbXetkZV5fUJWlaybtPaR5');

export async function convertcurrency(fromCurrency , toCurreny, units){
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurreny    
    });

    const multiplier = res.data[toCurreny];

    return multiplier * units
}