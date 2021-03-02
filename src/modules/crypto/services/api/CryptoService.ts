import { Api } from "../../../../shared/services/Api";
import Currency from "../../models/Currency";
import { convertResponseToCurrency, convertResponseListToCurrency } from "../../services/core/Converters";

export default class CryptoService extends Api {
    private getKey = () => process.env.VUE_APP_CP_KEY;

    public async getSingleSymbolsPrice(currencyFrom: string, currenciesTo: Array<string>): Promise<any> {
        return await this.get(
            '/price',
            {
                fsym: currencyFrom,
                tsyms: currenciesTo.join(','),
                api_key: this.getKey()
            },
        );
    }

    public async getMultipleSymbolsPrice(currenciesFrom: Array<string>, currenciesTo: Array<string>): Promise<Array<Currency>> {
        return new Promise((resolve, reject) => {
            try {
                (async () => {
                    const response = await this.get(
                        '/pricemultifull',
                        {
                            fsyms: currenciesFrom.join(','),
                            tsyms: currenciesTo.join(','),
                            api_key: this.getKey()
                        },
                    );
                    resolve(convertResponseToCurrency(response.data));
                })();
            } catch (e) {
                reject(e)
            }
        });
    }

    public async getTopBy24hVol(currencyTo: string, limit = 20): Promise<Array<Currency>> {
        return new Promise((resolve, reject) => {
            try {
                (async () => {
                    const response = await this.get(
                        '/top/totalvolfull',
                        {
                            limit,
                            tsym: currencyTo,
                            api_key: this.getKey()
                        },
                    );
                    resolve(convertResponseListToCurrency(response.data));
                })();
            } catch (e) {
                reject(e)
            }
        });
    }
}