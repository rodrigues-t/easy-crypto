<template>
  <div id="app">
    <Nav></Nav>
    <div class="py-3 px-3">
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
