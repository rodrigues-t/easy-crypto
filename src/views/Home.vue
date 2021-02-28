<template>
  <div class="home">
    <div v-if="homeCurrencies" class="summary-cards-row">
      <div v-for="(curr, index) in homeCurrencies" v-bind:key="'hc_' + index">
        <RateSummaryCard :currency="curr" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RateSummaryCard from "@/modules/crypto/components/RateSummaryCard.vue";
import CryptoServices from "@/modules/crypto/services/api/CryptoService";
import Currency from "@/modules/crypto/models/Currency";

@Component({
  components: {
    RateSummaryCard,
  },
})
export default class Home extends Vue {
  public homeCurrencies!: Array<Currency> | null;
  constructor() {
    super();
    this.homeCurrencies = null;
  }
  async created() {
    this.homeCurrencies = await new CryptoServices().getMultipleSymbolsPrice();
  }
}
</script>

<style scoped>
.summary-cards-row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
