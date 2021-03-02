import { Api } from "../../../../shared/services/Api";
import { convertResponseToCurrency } from "../../services/core/Converters";

export default class CryptoService extends Api {
    private getKey = () => process.env.VUE_APP_CP_KEY;

    public async getSingleSymbolsPrice(): Promise<any> {
        return await this.get(
            '/price',
            {
                fsym: 'BTC',
                tsyms: 'USD,EUR,BRL',
                api_key: this.getKey()
            },
        );
    }

    public async getMultipleSymbolsPrice(): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                (async () => {
                    const response = await this.get(
                        '/pricemultifull',
                        {
                            fsyms: 'BTC,ETH,LTC,DASH',
                            tsyms: 'USD,EUR,BRL',
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
}