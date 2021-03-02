<template>
  <table class="table-auto w-full">
    <thead>
      <tr class="bg-purple-400 text-white">
        <th class="text-left py-2 pl-4 pr-2">#</th>
        <th class="text-left p-2">Coin</th>
        <th class="text-left p-2">Price</th>
        <th class="text-left p-2">Total Vol. 24h</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(currency, index) in currencies"
        v-bind:key="'rlt' + index"
        :class="index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-300'"
      >
        <td class="text-left py-1 pl-4 pr-2">
          <p class="text-gray-500 font-bold">{{ index + 1 }}</p>
        </td>
        <td class="text-left py-1 px-2">{{ currency.shortName }}</td>
        <td class="text-left py-1 px-2 text-green-800 ">
          {{ _formatPrice(currency.rates[0].price, currency.rates[0].shortName) }}
        </td>
        <td class="text-left py-1 px-2">
            {{ `${currency.shortName} ${_formatNumber(currency.rates[0].totalVol24h)}` }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Currency from "../models/Currency";
import { formatPrice, formatNumber } from "@/modules/crypto/services/core/Formatters";

@Component
export default class RateListTable extends Vue {
  @Prop({ required: true }) readonly currencies: Array<Currency>;
  private _formatPrice(price: number, symbol: string): string {
      return formatPrice(price, symbol)
  }
  private _formatNumber(value: number): string {
      return formatNumber(value)
  }
}
</script>