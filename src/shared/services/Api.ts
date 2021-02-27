import axios, { AxiosResponse } from "axios";

export abstract class Api {
    protected baseUrl = "https://min-api.cryptocompare.com/data";

    protected async get(route: string, params?: object, headers?: object): Promise<AxiosResponse<any>> {
        return await axios.get(`${this.baseUrl}${route}`, {
            params: params ? params : null,
            headers: headers ? headers : null,
        })
    }
}