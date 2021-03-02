<template>
  <div id="app">
    <Nav></Nav>
    <div class="py-1 px-1">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from "@/shared/components/Nav.vue";
@Component({
  components: {
    Nav
  }
})
export default class App extends Vue {
  
}
</script>
