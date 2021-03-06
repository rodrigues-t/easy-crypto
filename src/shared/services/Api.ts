/* eslint-disable @typescript-eslint/no-explicit-any*/
import axios from "axios";

export abstract class Api {
    protected baseUrl = "https://min-api.cryptocompare.com/data";

    protected async get(route: string, params?: object, headers?: object): Promise<any> {
        return await axios.get(`${this.baseUrl}${route}`, {
            params: params ? params : null,
            headers: headers ? headers : null,
        })
    }
}