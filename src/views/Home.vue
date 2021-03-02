<template>
  <div>
    <div v-if="homeCurrencies" class="grid sm:grid-cols-4 grid-cols-2 gap-2">
      <template v-for="(curr, index) in homeCurrencies">
        <RateSummaryCard :currency="curr" v-bind:key="'hc_' + index" />
      </template>
    </div>
    <div class="mt-4" v-if="topCurrencies">
      <RateListTable :currencies="topCurrencies" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RateSummaryCard from "@/modules/crypto/components/RateSummaryCard.vue";
import RateListTable from "@/modules/crypto/components/RateListTable.vue";
import CryptoServices from "@/modules/crypto/services/api/CryptoService";
import Currency from "@/modules/crypto/models/Currency";

@Component({
  components: {
    RateSummaryCard,
    RateListTable,
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
    this.homeCurrencies = await new CryptoServices().getMultipleSymbolsPrice(
      ["BTC", "ETH", "LTC", "DASH"],
      ["USD", "EUR", "BRL"]
    );
    this.topCurrencies = await new CryptoServices().getTopBy24hVol('USD');
  }
}
</script>
