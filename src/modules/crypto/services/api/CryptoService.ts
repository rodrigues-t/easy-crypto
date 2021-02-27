import { Api } from "../../../../shared/services/Api";
import { convertResponseToCurrency } from "../../services/core/Converters";

export default class CryptoService extends Api {
    public async getSingleSymbolsPrice(): Promise<any> {
        return await this.get(
            '/price',
            {
                fsym: 'BTC',
                tsyms: 'USD,EUR,BRL',
                api_key: 'c60a00c5e7c979b5ad49a1d7792d875e89a1d71795fc3409e58a51ed5a0abb4a'
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
                            fsyms: 'BTC,ETH,LTC',
                            tsyms: 'USD,EUR,BRL',
                            api_key: 'c60a00c5e7c979b5ad49a1d7792d875e89a1d71795fc3409e58a51ed5a0abb4a'
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