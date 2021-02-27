import Currency from "../../models/Currency";
import Rate from "../../models/Rate";

export const convertResponseToCurrency = (rawData: any): Array<Currency> => {
    const currencies = new Array<Currency>();
    const entries = Object.entries(rawData.RAW);
    entries.forEach(entry => {
        const currency = { shortName: entry[0], rates: new Array<Rate>() }
        Object.entries(entry[1] as any).forEach(
            rate => currency.rates.push({
                shortName: rate[0],
                price: Number((rate[1] as any).PRICE)
            })
        );
        currencies.push(currency);
    });
    return currencies;
}