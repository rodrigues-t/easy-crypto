import { mount } from '@vue/test-utils';
import CryptoService from '@/modules/crypto/services/api/CryptoService';
import Home from '@/views/Home.vue'
import CoinRateCard from '@/modules/crypto/components/CoinRateCard.vue';
import i18n from '@/shared/i18n'

const multipleSymbolsResult = [
    { "shortName": "BTC", "rates": [{ "shortName": "USD", "price": 52153.43 }, { "shortName": "EUR", "price": 43963.89 }, { "shortName": "BRL", "price": 302039.38 }] },
    { "shortName": "ETH", "rates": [{ "shortName": "USD", "price": 1819.48 }, { "shortName": "EUR", "price": 1533.73 }, { "shortName": "BRL", "price": 10611.08 }] },
    { "shortName": "LTC", "rates": [{ "shortName": "USD", "price": 189.89 }, { "shortName": "EUR", "price": 160.03 }, { "shortName": "BRL", "price": 1099.72538258 }] },
    { "shortName": "DASH", "rates": [{ "shortName": "USD", "price": 215.85 }, { "shortName": "EUR", "price": 182.042194092827 }, { "shortName": "BRL", "price": 1249.83895444 }] }
];

describe("Home View Test", () => {
    it("Coin Rate Card Test", async () => {
        jest.spyOn(CryptoService.prototype, 'getMultipleSymbolsPrice')
            .mockImplementation(() => Promise.resolve(multipleSymbolsResult));

        const wrapper = mount(Home, { i18n });
        await wrapper.vm.$nextTick();
        const cards = wrapper.findAllComponents(CoinRateCard);
        expect(cards).toHaveLength(4);

        jest.restoreAllMocks();
    });
});