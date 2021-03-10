import { mount, shallowMount } from '@vue/test-utils';
import CryptoService from '@/modules/crypto/services/api/CryptoService';
import Home from '@/views/Home.vue'
import CoinRateCard from '@/modules/crypto/components/CoinRateCard.vue';
import i18n from '@/shared/i18n'
import store from "@/store";
import CoinRateTable from '@/modules/crypto/components/CoinRateTable.vue';
import flushPromises from 'flush-promises'

const multipleSymbolsResult = [
    { "shortName": "BTC", "rates": [{ "shortName": "USD", "price": 52153.43 }, { "shortName": "EUR", "price": 43963.89 }, { "shortName": "BRL", "price": 302039.38 }] },
    { "shortName": "ETH", "rates": [{ "shortName": "USD", "price": 1819.48 }, { "shortName": "EUR", "price": 1533.73 }, { "shortName": "BRL", "price": 10611.08 }] },
    { "shortName": "LTC", "rates": [{ "shortName": "USD", "price": 189.89 }, { "shortName": "EUR", "price": 160.03 }, { "shortName": "BRL", "price": 1099.72538258 }] },
    { "shortName": "DASH", "rates": [{ "shortName": "USD", "price": 215.85 }, { "shortName": "EUR", "price": 182.042194092827 }, { "shortName": "BRL", "price": 1249.83895444 }] }
];

const top24hVolResult = [
    { "shortName": "BTC", "rates": [{ "shortName": "USD", "price": 54416.66, "totalVol24h": 274741.47753089404 }] },
    { "shortName": "ETH", "rates": [{ "shortName": "USD", "price": 1828.53, "totalVol24h": 3910394.079911824 }] },
    { "shortName": "BNB", "rates": [{ "shortName": "USD", "price": 287.97, "totalVol24h": 12707408.578157516 }] },
    { "shortName": "CHZ", "rates": [{ "shortName": "USD", "price": 0.2743, "totalVol24h": 7776333528.377257 }] },
    { "shortName": "ADA", "rates": [{ "shortName": "USD", "price": 1.179, "totalVol24h": 1534279999.322529 }] },
    { "shortName": "DOT", "rates": [{ "shortName": "USD", "price": 38.29, "totalVol24h": 36179950.4478549 }] },
    { "shortName": "LTC", "rates": [{ "shortName": "USD", "price": 200.17, "totalVol24h": 6452454.19375989 }] },
    { "shortName": "XRP", "rates": [{ "shortName": "USD", "price": 0.4824, "totalVol24h": 1972023528.413266 }] },
    { "shortName": "BUSD", "rates": [{ "shortName": "USD", "price": 0.9997922259706601, "totalVol24h": 0 }] },
    { "shortName": "DOGE", "rates": [{ "shortName": "USD", "price": 0.05808, "totalVol24h": 13787970610.312046 }] },
    { "shortName": "ENJ", "rates": [{ "shortName": "USD", "price": 1.779, "totalVol24h": 383629918.1884561 }] },
    { "shortName": "AVAX", "rates": [{ "shortName": "USD", "price": 33.89, "totalVol24h": 20562947.71739168 }] },
    { "shortName": "USDT", "rates": [{ "shortName": "USD", "price": 1.001, "totalVol24h": 670938475.7077826 }] },
    { "shortName": "UNI", "rates": [{ "shortName": "USD", "price": 32.82, "totalVol24h": 19722643.54115352 }] },
    { "shortName": "CHR", "rates": [{ "shortName": "USD", "price": 0.239433304, "totalVol24h": 2763741349.564152 }] },
    { "shortName": "LINK", "rates": [{ "shortName": "USD", "price": 31.03, "totalVol24h": 20426323.645068064 }] },
    { "shortName": "LUNA", "rates": [{ "shortName": "USD", "price": 11.558098584, "totalVol24h": 50097741.7414424 }] },
    { "shortName": "EOS", "rates": [{ "shortName": "USD", "price": 4.114, "totalVol24h": 137877885.73995328 }] },
    { "shortName": "BCH", "rates": [{ "shortName": "USD", "price": 541.55, "totalVol24h": 977198.002207132 }] },
    { "shortName": "MANA", "rates": [{ "shortName": "USD", "price": 0.5746, "totalVol24h": 920853755.929147 }] }
];

describe("Home View Test", () => {
    beforeEach(() => {
        jest.spyOn(CryptoService.prototype, 'getMultipleSymbolsPrice')
            .mockImplementation(() => Promise.resolve(multipleSymbolsResult));
        jest.spyOn(CryptoService.prototype, 'getTopBy24hVol')
            .mockImplementation(() => Promise.resolve(top24hVolResult));
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("Coin Rate Card Rendering Test (4)", async () => {
        const wrapper = mount(Home, { i18n });
        await wrapper.vm.$nextTick();
        const cards = wrapper.findAllComponents(CoinRateCard);
        expect(cards).toHaveLength(4);
    });

    it("Coin Rate Table Rendering Test", async () => {
        const wrapper = mount(Home, { i18n, store });
        await flushPromises();
        const table = wrapper.findComponent(CoinRateTable);
        expect(table.exists()).toBeTruthy();
    });
});