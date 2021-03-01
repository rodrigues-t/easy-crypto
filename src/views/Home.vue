<template>
  <div class="home">
    <div v-if="homeCurrencies" class="grid sm:grid-cols-4 grid-cols-2">
      <template v-for="(curr, index) in homeCurrencies">
        <RateSummaryCard :currency="curr" v-bind:key="'hc_' + index" />
      </template>
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
