<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <div v-if="homeCurrencies">
      <div v-for="(curr, index) in homeCurrencies" v-bind:key="'hc_' + index">
        <div>{{ curr.name }}</div>
        <div v-for="(rate, index) in curr.rates" v-bind:key="'hcr_' + index">
          {{ rate.shortName + ": " + rate.price }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";
import CryptoServices from "@/modules/crypto/services/api/CryptoService";
import Currency from "@/modules/crypto/models/Currency";

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  public homeCurrencies!: Currency[] | null;
  constructor() {
    super();
    this.homeCurrencies = null;
  }
  async created() {
    this.homeCurrencies = await new CryptoServices().getMultipleSymbolsPrice();
  }
}
</script>
