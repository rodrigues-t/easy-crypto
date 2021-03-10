<template>
  <div>
    <div v-if="homeCurrencies" class="grid sm:grid-cols-4 grid-cols-2 gap-2">
      <template v-for="(curr, index) in homeCurrencies">
        <CoinRateCard :currency="curr" v-bind:key="'hc_' + index" />
      </template>
    </div>
    <div class="mt-4" v-if="topCurrencies">
      <CoinRateTable :currencies="topCurrencies" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CoinRateCard from "@/modules/crypto/components/CoinRateCard.vue";
import CoinRateTable from "@/modules/crypto/components/CoinRateTable.vue";
import CryptoServices from "@/modules/crypto/services/api/CryptoService";
import Currency from "@/modules/crypto/models/Currency";

@Component({
  components: {
    CoinRateCard,
    CoinRateTable,
  },
})
export default class Home extends Vue {
  public homeCurrencies!: Array<Currency> | null;
  public topCurrencies!: Array<Currency> | null;

  constructor() {
    super();
    this.homeCurrencies = null;
    this.topCurrencies = null;
  }

  async created() {
    [this.homeCurrencies, this.topCurrencies] = await Promise.all([
      (this.homeCurrencies = await new CryptoServices().getMultipleSymbolsPrice(
        ["BTC", "ETH", "LTC", "DASH"],
        ["USD", "EUR", "BRL"]
      )),
      (this.topCurrencies = await new CryptoServices().getTopBy24hVol("USD")),
    ]);
  }
}
</script>
