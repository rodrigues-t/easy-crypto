<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-purple-500 py-3 px-6"
  >
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Easy Crypto</span>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
        v-on:click="toggleMenu"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div v-bind:class="'w-full flex-grow lg:flex lg:items-center lg:w-auto ' + (menuOpened ? 'block' : 'hidden')">
      <div class="lg:flex-grow">
        <router-link
          to="/"
          class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-400 mr-4"
        >
          <span v-on:click="toggleMenu">Home</span>
        </router-link>
        <router-link
          to="/about"
          v-on:click="toggleMenu"
          class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-400 mr-4"
        >
          <span v-on:click="toggleMenu">About</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Nav extends Vue {
  private menuOpened = false;

  private toggleMenu(): void {
    this.menuOpened = !this.menuOpened;
  }
}
</script>