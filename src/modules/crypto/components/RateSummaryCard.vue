<template>
  <div
    class="summary-card bg-gradient-to-br from-purple-900 to-purple-700 shadow-lg"
  >
    <div class="summary-header">
      <span class="summary-title">{{ currency.shortName }}</span>
    </div>
    <div class="summary-card-rates">
      <div
        v-for="(rate, index) in currency.rates"
        v-bind:key="'sc' + currency.shortName + index"
      >
        <span class="summary-rate-name">
          {{ rate.shortName }}
        </span>
        <span class="summary-rate-price">
          {{ _formatPrice(rate.price, rate.shortName) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import Currency from "../models/Currency";
import preferences from "@/store/modules/preferences";
import { formatPrice } from "@/modules/crypto/services/core/Formatters";

@Component
export default class RateSummaryCard extends Vue {
  @Prop({ required: true }) readonly currency: Currency;

  get lang() {
    return preferences.lang;
  }

  private _formatPrice(price: number, currencySymbol: string): string {
    return formatPrice(price, currencySymbol, this.lang);
  }
}
</script>

<style scoped>
.summary-card {
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;
  min-width: 152px;
}

.summary-header {
  display: flex;
  text-align: left;
  margin-bottom: 7px;
}

.summary-title {
  flex: 1;
  font-weight: bold;
  color: white;
}

.summary-card-rates {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.summary-rate-name {
  color: white;
  font-size: 0.7rem;
  margin-right: 6px;
}
.summary-rate-price {
  color: yellow;
}
</style>