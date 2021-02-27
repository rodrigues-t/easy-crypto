import Rate from "./Rate"

export default interface Currency {
    shortName: string;
    rates: Array<Rate>;
}